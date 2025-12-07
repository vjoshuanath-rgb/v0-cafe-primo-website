import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Coffee, Heart, BookOpen, Clock, MapPin } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { PawIcon } from "@/components/paw-icon"

const features = [
  {
    icon: Coffee,
    title: "Artisan Coffee",
    description: "Expertly crafted beverages using premium, ethically-sourced beans since 2021.",
  },
  {
    icon: BookOpen,
    title: "Good Reads",
    description: "Enjoy free books while waiting for your order or just relaxing at the café.",
  },
  {
    icon: Heart,
    title: "Made with Love",
    description: "Every drink and treat is prepared with care and attention to detail.",
  },
]

const popularItems = [
  {
    name: "Bạc xỉu (Coconut coffee)",
    price: "₱130 / ₱140",
    image: "/images/bac-xiu.jpg",
  },
  {
    name: "Salted Cream Latte",
    price: "₱120 / ₱130",
    image: "/images/salted-cream-latte.jpg",
  },
  {
    name: "Biscoff Frappe",
    price: "₱155",
    image: "/images/biscoff-frappe.jpg",
  },
]

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section - Updated with cafe primo sign image */}
      <section className="pt-20">
        <div className="relative h-[90vh] min-h-[600px] flex items-center">
          <div className="absolute inset-0">
            <Image
              src="/images/cafe-exterior-day.jpg"
              alt="Cafe Primo exterior"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-foreground/40" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="text-accent text-sm uppercase tracking-widest">Est. 2021</span>
              <span className="text-accent">•</span>
              <span className="text-accent text-sm uppercase tracking-widest">Carcar City, Cebu</span>
            </div>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-card font-medium tracking-tight text-balance">
              Good Coffee, Good Food, Good Reads
            </h1>
            <p className="mt-6 text-lg md:text-xl text-card/90 max-w-2xl mx-auto text-pretty">
              First roaming mobile pop-up coffee bar in Cebu South, now your neighborhood café in Poblacion I, Carcar
              City.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="/menu">
                  View Menu
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Store Hours Banner */}
      <section className="py-8 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 text-primary-foreground">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span className="font-medium">Tuesdays - Sundays: 3:00 PM - 11:00 PM</span>
            </div>
            <div className="hidden md:block w-px h-6 bg-primary-foreground/30" />
            <div className="text-center md:text-left">
              <span className="text-sm text-primary-foreground/80">Food: 4:00 PM - 10:00 PM</span>
              <span className="mx-2 text-primary-foreground/50">|</span>
              <span className="text-sm text-primary-foreground/80">Coffee & Croffles: 3:00 PM - 10:30 PM</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-foreground">Why Choose Us</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              More than just a café, we&apos;re a community that celebrates great coffee, good company, and relaxing
              moments.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-card p-8 rounded-2xl text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Book Corner Section - Updated with merchandise image */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden">
              <Image src="/images/books-stack.jpg" alt="Books available at Cafe Primo" fill className="object-cover" />
            </div>
            <div>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">Good Reads Corner</h2>
              <div className="space-y-4 text-muted-foreground">
                <p className="text-lg">Good coffee, good food, and now, good reads!</p>
                <p>
                  We&apos;ve added a few books for our frens to enjoy for free while waiting for your order or just
                  relaxing at the café.
                </p>
                <p className="text-sm italic">
                  Please handle them with care so everyone can enjoy them for a long time. Happy reading!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Items Section */}
      <section className="py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl text-foreground">Customer Favorites</h2>
              <p className="mt-4 text-muted-foreground max-w-lg">
                Discover the drinks and treats our guests can&apos;t stop talking about.
              </p>
            </div>
            <Link
              href="/menu"
              className="mt-6 md:mt-0 inline-flex items-center text-primary font-medium hover:underline"
            >
              View Full Menu
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularItems.map((item) => (
              <div
                key={item.name}
                className="group bg-card rounded-2xl overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl font-semibold text-foreground">{item.name}</h3>
                  <p className="text-primary font-medium mt-1">{item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cafe Vibes Section - Updated with all new gallery images */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl text-foreground">Our Space</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              A cozy neighborhood café where you can unwind, work, or catch up with friends.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* Large feature image */}
            <div className="col-span-2 md:row-span-2 relative h-80 md:h-[32rem] rounded-2xl overflow-hidden">
              <Image
                src="/images/cafe-storefront.jpg"
                alt="Cafe storefront"
                fill
                className="object-cover"
              />
            </div>
            {/* Vertical tall images */}
            <div className="md:row-span-2 relative h-80 md:h-[32rem] rounded-2xl overflow-hidden">
              <Image src="/images/espresso-machine.jpg" alt="Espresso machine" fill className="object-cover" />
            </div>
            <div className="md:row-span-2 relative h-80 md:h-[32rem] rounded-2xl overflow-hidden">
              <Image src="/images/biscoff-frappe.jpg" alt="Biscoff Frappe" fill className="object-cover" />
            </div>
            {/* Medium squares */}
            <div className="relative h-40 md:h-60 rounded-2xl overflow-hidden">
              <Image src="/images/latte-art.jpg" alt="Latte art" fill className="object-cover" />
            </div>
            <div className="relative h-40 md:h-60 rounded-2xl overflow-hidden">
              <Image src="/images/salted-cream-latte.jpg" alt="Salted cream latte" fill className="object-cover" />
            </div>
            {/* Wide rectangle */}
            <div className="col-span-2 relative h-40 md:h-60 rounded-2xl overflow-hidden">
              <Image
                src="/images/drinks-croffles-spread.jpg"
                alt="Drinks and croffles spread"
                fill
                className="object-cover"
              />
            </div>
            {/* Vertical tall */}
            <div className="md:row-span-2 relative h-80 md:h-[28rem] rounded-2xl overflow-hidden">
              <Image
                src="/images/interior-seating.jpg"
                alt="Interior seating"
                fill
                className="object-cover"
              />
            </div>
            {/* Medium rectangles */}
            <div className="relative h-40 md:h-56 rounded-2xl overflow-hidden">
              <Image src="/images/cafe-night-seating.jpg" alt="Night seating area" fill className="object-cover" />
            </div>
            <div className="col-span-2 relative h-40 md:h-56 rounded-2xl overflow-hidden">
              <Image
                src="/images/almond-croffle-latte.jpg"
                alt="Almond croffle with latte"
                fill
                className="object-cover"
              />
            </div>
            {/* Bottom wide image */}
            <div className="col-span-2 md:col-span-3 relative h-64 md:h-80 rounded-2xl overflow-hidden">
              <Image src="/images/cafe-night-exterior.jpg" alt="Cafe exterior at night" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <PawIcon className="w-12 h-12 text-accent mx-auto mb-6" />
          <h2 className="font-serif text-4xl md:text-5xl text-primary-foreground mb-6">See You at the Café, Fren!</h2>
          <p className="text-primary-foreground/80 text-lg mb-4 max-w-2xl mx-auto">
            We kindly ask for your patience during busy times. Your neighborhood café awaits you at Poblacion I, Carcar
            City.
          </p>
          <div className="flex items-center justify-center gap-2 text-primary-foreground/70 mb-8">
            <MapPin className="w-4 h-4" />
            <span>Poblacion I, Carcar City, Cebu</span>
          </div>
          <Button asChild size="lg" className="bg-card text-foreground hover:bg-card/90">
            <Link href="/contact">Visit Us Today</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
