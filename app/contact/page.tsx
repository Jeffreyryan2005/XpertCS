"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { AmbientBackground } from "@/components/hero_background_canvas"
import { Button } from "@/components/ui/button"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isLoading, setIsLoading] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [statusMessage, setStatusMessage] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    setSubmitStatus("idle")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitStatus("success")
        setStatusMessage("Message sent successfully! We'll get back to you soon.")
        setFormData({ name: "", email: "", subject: "", message: "" })
      } else {
        setSubmitStatus("error")
        setStatusMessage(data.message || "Failed to send message. Please try again.")
      }
    } catch (error) {
      setSubmitStatus("error")
      setStatusMessage("An error occurred. Please try again later.")
      console.error("Contact form error:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border/60">
        <AmbientBackground color="139,92,246" lines={72} opacity={0.2} speed={0.01} />
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(1200px_500px_at_20%_-10%,hsl(var(--primary)/0.15),transparent_70%)]" />
        <div className="mx-auto max-w-screen-2xl px-6 py-14 md:py-20 text-center">
          <p className="text-sm text-muted-foreground animate-step-in [animation-delay:40ms] mx-auto">
            <Link href="/" className="hover:underline">
              Home
            </Link>{" "}
            / <span className="text-foreground">Contact Us</span>
          </p>
          <h1 className="mt-3 text-balance text-3xl md:text-5xl font-semibold tracking-tight animate-step-in">
            Contact Us
          </h1>
          <p className="mt-3 mx-auto max-w-3xl text-muted-foreground animate-step-in [animation-delay:120ms]">
            Get in touch with our team. We're here to help and answer any questions you might have.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="scroll-mt-28">
        <div className="mx-auto max-w-screen-2xl px-6 py-10 md:py-16">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* Left Column - Contact Info */}
            <div className="space-y-8 animate-step-in">
              <div>
                <h2 className="text-pretty text-2xl md:text-3xl font-semibold mb-6">Reach Us</h2>
              </div>

              {/* Location */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary/10">
                    <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Our Location</h3>
                  <p className="mt-2 text-muted-foreground">
                    Xpert Consultancy Ltd
                    <br />
                    71-75 Shelton Street
                    <br />
                    London, England, WC2H 9JQ
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary/10">
                    <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Email</h3>
                  <p className="mt-2 text-muted-foreground">
                    <a href="mailto:enquiry@xpertcs.com" className="hover:text-primary transition-colors">
                      enquiry@xpertcs.com
                    </a>
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary/10">
                    <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Phone</h3>
                  <p className="mt-2 text-muted-foreground">
                    <a href="tel:+442073607595" className="hover:text-primary transition-colors">
                      +44 (0)207 360 7595
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="animate-step-in [animation-delay:120ms]">
              <h2 className="text-pretty text-2xl md:text-3xl font-semibold mb-6">Send Us Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="px-4 py-3 rounded-lg border border-border/60 bg-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="px-4 py-3 rounded-lg border border-border/60 bg-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  />
                </div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border/60 bg-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border border-border/60 bg-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                />

                {submitStatus === "success" && (
                  <div className="p-4 rounded-lg bg-green-50 dark:bg-green-950 text-green-800 dark:text-green-200 border border-green-200 dark:border-green-800">
                    {statusMessage}
                  </div>
                )}
                {submitStatus === "error" && (
                  <div className="p-4 rounded-lg bg-red-50 dark:bg-red-950 text-red-800 dark:text-red-200 border border-red-200 dark:border-red-800">
                    {statusMessage}
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full md:w-auto bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  {isLoading ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="scroll-mt-28 bg-muted/30">
        <div className="mx-auto max-w-screen-2xl px-6 py-10 md:py-16">
          <h2 className="text-pretty text-2xl md:text-3xl font-semibold mb-8 animate-step-in">Find Us On Map</h2>
          <div className="relative w-full h-96 rounded-lg overflow-hidden border border-border/60 animate-step-in [animation-delay:120ms]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.6235516849997!2d-0.12345!3d51.51288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b1f1f1f1f1f%3A0x1f1f1f1f1f1f1f1f!2s71-75%20Shelton%20Street%2C%20London%20WC2H%209JQ!5e0!3m2!1sen!2suk!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </div>
  )
}
