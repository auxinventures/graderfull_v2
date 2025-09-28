'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabaseClient'
import { loadStripe } from '@stripe/stripe-js'

// Load Stripe client
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string)

export default function DashboardPage() {
  const [user, setUser] = useState<any>(null)
  const [profile, setProfile] = useState<any>(null)
  const router = useRouter()

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) {
        router.push('/login')
      } else {
        setUser(user)
        const { data: profile } = await supabase
          .from("profiles")
          .select("plan")
          .eq("id", user.id)
          .single()
        setProfile(profile)
      }
    }
    getUser()
  }, [router])

  const handleCheckout = async () => {
    const stripe = await stripePromise
    if (!stripe) return

    // Call backend route to create a Stripe Checkout Session
    const res = await fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        priceId: "price_12345", // replace with your actual Stripe Price ID
        customerEmail: user.email,
      }),
    })

    const session = await res.json()
    const result = await stripe.redirectToCheckout({ sessionId: session.id })
    if (result.error) alert(result.error.message)
  }

  if (!user) return <p>Loading...</p>

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold">Welcome, {user.email}</h1>
      <p>Current plan: {profile?.plan}</p>

      {profile?.plan === "free" ? (
        <button
          onClick={handleCheckout}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
        >
          Upgrade with Stripe
        </button>
      ) : (
        <p className="mt-4 text-green-600">✅ You are on the Pro Plan</p>
      )}
    </main>
  )
}
