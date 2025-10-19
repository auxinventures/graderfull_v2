import { NextResponse } from "next/server";
import OpenAI from "openai";
import pdfParse from "pdf-parse";
import mammoth from "mammoth";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const contentType = req.headers.get("content-type") || "";

    let textContent = "";

    // --- Case 1: JSON input ---
    if (contentType.includes("application/json")) {
      const { input } = await req.json();
      if (!input) {
        return NextResponse.json({ error: "Missing input" }, { status: 400 });
      }
      textContent = input;
    }

    // --- Case 2: FormData with file ---
    else if (contentType.includes("multipart/form-data")) {
      const formData = await req.formData();
      const file = formData.get("file") as File | null;

      if (!file) {
        return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
      }

      const arrayBuffer = await file.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);

      if (file.type === "application/pdf") {
        // PDF → text
        const pdfData = await pdfParse(buffer);
        textContent = pdfData.text;
      } else if (
        file.type ===
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
      ) {
        // DOCX → text
        const result = await mammoth.extractRawText({ buffer });
        textContent = result.value;
      } else if (file.type.startsWith("text/")) {
        // Plain text
        textContent = buffer.toString("utf-8");
      } else if (file.type.startsWith("image/")) {
        // Image → OCR via OpenAI vision
        const base64Image = buffer.toString("base64");
        const completion = await openai.chat.completions.create({
          model: "gpt-4o-mini",
          messages: [
            {
              role: "system",
              content: "You are an OCR and grader. Extract text from the image, then grade it.",
            },
            {
              role: "user",
              content: [
                {
                  type: "image_url",
                  image_url: {
                    url: `data:${file.type};base64,${base64Image}`,
                  },
                },
              ],
            },
          ],
        });
        textContent = completion.choices[0].message?.content || "";
      } else {
        return NextResponse.json({ error: "Unsupported file type" }, { status: 400 });
      }
    } else {
      return NextResponse.json(
        { error: "Unsupported content type" },
        { status: 400 }
      );
    }

    if (!textContent.trim()) {
      return NextResponse.json({ error: "No text extracted from file." }, { status: 400 });
    }

    // --- Call OpenAI to grade ---
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content:
            "You are an AI grader. Analyze the text, evaluate based on clarity, grammar, and argument quality. Give constructive feedback and a score from 1–10.",
        },
        {
          role: "user",
          content: textContent,
        },
      ],
    });

    const feedback =
      completion.choices[0].message?.content || "No feedback generated.";

    return NextResponse.json({ feedback });
  } catch (error: any) {
    console.error("Error grading:", error);
    return NextResponse.json(
      { error: "Something went wrong while grading." },
      { status: 500 }
    );
  }
}
