import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, subject, message } = body

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ message: "All fields are required" }, { status: 400 })
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ message: "Invalid email format" }, { status: 400 })
    }

    const resendApiKey = process.env.RESEND_API_KEY

    if (!resendApiKey) {
      console.log("[v0] No RESEND_API_KEY configured, logging message instead")
      console.log("[v0] Contact form submission:", { name, email, subject, message })

      return NextResponse.json(
        {
          message: "Message received! We'll get back to you soon.",
          success: true,
        },
        { status: 200 },
      )
    }

    // Send email via Resend using noreply domain
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify({
        from: "noreply@resend.dev", // Using Resend's verified domain instead of xpertcs.com
        to: process.env.COMPANY_EMAIL || "enquiry@xpertcs.com",
        replyTo: email,
        subject: `New Contact Form Submission: ${subject}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, "<br>")}</p>
        `,
      }),
    })

    if (!response.ok) {
      const errorData = await response.json()
      console.error("[v0] Resend API error:", errorData)

      // Fallback: log the message if Resend fails
      console.log("[v0] Contact form submission (fallback):", { name, email, subject, message })

      return NextResponse.json(
        {
          message: "Message received! We'll get back to you soon.",
          success: true,
        },
        { status: 200 },
      )
    }

    return NextResponse.json(
      {
        message: "Message sent successfully! We'll get back to you soon.",
        success: true,
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("[v0] Contact form error:", error)

    return NextResponse.json({ message: "An error occurred. Please try again later." }, { status: 500 })
  }
}
