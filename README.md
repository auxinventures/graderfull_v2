graderfull_v2/
│
├── app/                   # Next.js 13+ App Router pages
│   ├── page.tsx           # Landing page (homepage)
│   ├── dashboard/         # Dashboard for logged-in users
│   │   └── page.tsx
│   ├── api/               # Server-side API routes
│   │   ├── grade/route.ts # Essay grading API
│   │   └── checkout/route.ts # Stripe checkout API
│
├── public/                # Static assets (images, videos, logos)
│   ├── grade-aiq-logo.png
│   ├── grade-aiq-video-desktop.mp4
│   └── etc...
│
├── .env.local             # Environment variables (keys for Supabase, Stripe, OpenAI)
├── package.json           # Dependencies and scripts
├── tsconfig.json          # TypeScript config
└── README.md              # Project notes (you can add setup instructions here)
