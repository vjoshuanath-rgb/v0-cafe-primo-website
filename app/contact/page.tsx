"use client"

import type React from "react"
import Image from "next/image"
import { useState } from "react"
import { Instagram, Phone, MapPin, Clock, Send } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { PawIcon } from "@/components/paw-icon"

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <PawIcon className="w-6 h-6 text-primary" />
          </div>
          <h1 className="font-serif text-5xl md:text-6xl text-foreground">Get in Touch</h1>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Have a question, feedback, or just want to say hello? We&apos;d love to hear from you, fren!
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="font-serif text-3xl text-foreground mb-8">Visit Us</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">Location</h3>
                    <p className="text-muted-foreground mt-1">
                      Poblacion I, Carcar City
                      <br />
                      Cebu, Philippines
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">Hours</h3>
                    <p className="text-muted-foreground mt-1">
                      Tuesdays - Sundays: 3:00 PM - 11:00 PM
                      <br />
                      <span className="text-sm">Food: 4:00 PM - 10:00 PM</span>
                      <br />
                      <span className="text-sm">Coffee & Croffles: 3:00 PM - 10:30 PM</span>
                    </p>
                    <p className="text-sm text-primary mt-2">Closed on Mondays</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">Phone</h3>
                    <p className="text-muted-foreground mt-1">
                      0945 456 1632
                      <br />
                      0945 701 2449
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                    <Instagram className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">Social</h3>
                    <a
                      href="https://instagram.com/cafeprimoo"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline mt-1 inline-block"
                    >
                      @cafeprimoo
                    </a>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="mt-12 relative h-64 rounded-xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d123.45!2d123.6387!3d10.1068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a9f3f3f3f3f3f3%3A0x0!2s4J4Q%2BRH2%2C%20Carcar%2C%20Cebu!5e0!3m2!1sen!2sph!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                ></iframe>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="font-serif text-3xl text-foreground mb-8">Send a Message</h2>
              {submitted ? (
                <div className="bg-secondary p-8 rounded-xl text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <PawIcon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="font-serif text-2xl text-foreground mb-2">Thank You!</h3>
                  <p className="text-muted-foreground">
                    We&apos;ve received your message and will get back to you soon. See you at the café, fren!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                        First Name
                      </label>
                      <Input id="firstName" required placeholder="Juan" className="bg-card" />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
                        Last Name
                      </label>
                      <Input id="lastName" required placeholder="Dela Cruz" className="bg-card" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <Input id="email" type="email" required placeholder="juan@example.com" className="bg-card" />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                      Subject
                    </label>
                    <Input id="subject" required placeholder="How can we help?" className="bg-card" />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      required
                      rows={5}
                      placeholder="Tell us what's on your mind..."
                      className="bg-card resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
