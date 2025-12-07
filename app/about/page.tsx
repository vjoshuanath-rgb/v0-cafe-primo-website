import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PawIcon } from "@/components/paw-icon"

const values = [
  {
    title: "Quality First",
    description: "We source the finest beans and ingredients, ensuring every sip and bite exceeds expectations.",
  },
  {
    title: "Community Love",
    description: "We're more than a café—we're a gathering place for friends, families, and neighbors.",
  },
  {
    title: "Good Reads",
    description: "Enjoy our collection of books while relaxing with your favorite drink.",
  },
  {
    title: "Local Pride",
    description: "Proudly serving Carcar City and Cebu South since 2021.",
  },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <PawIcon className="w-6 h-6 text-primary" />
          </div>
          <h1 className="font-serif text-5xl md:text-6xl text-foreground">Our Story</h1>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            From mobile pop-up to neighborhood café—the journey of Café Primo.
          </p>
        </div>
      </section>

      {/* Story Section - Updated with cafe primo sign image */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden">
              <Image src="/images/cafe-primo-sign.jpg" alt="Cafe Primo exterior" fill className="object-cover" />
            </div>
            <div>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">From Wheels to Walls</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  <strong className="text-foreground">Est. 2021</strong> — Café Primo started as the first roaming
                  mobile pop-up coffee bar in Cebu South. With a passion for great coffee and a dream to bring quality
                  brews to our community, we hit the road.
                </p>
                <p>
                  What began as a humble mobile setup quickly grew into something more. The warm reception from coffee
                  lovers across Cebu South inspired us to find a permanent home where we could welcome our growing
                  family of regulars.
                </p>
                <p>
                  Today, we&apos;re proud to call Poblacion I, Carcar City our home. Our neighborhood café has become a
                  sanctuary for those seeking great coffee, delicious food, and now—good reads too!
                </p>
                <p>
                  The paw in our name represents our playful spirit and the warmth we share with every guest who walks
                  through our doors. Welcome to the family, fren!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground">What We Stand For</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Our values guide everything we do, from the beans we choose to the smiles we share.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.title} className="bg-card p-6 rounded-xl">
                <PawIcon className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cafe Gallery Section - Updated with unique cafe images */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground">Our Café</h2>
            <p className="mt-4 text-muted-foreground">Where every corner tells a story.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative h-80 rounded-2xl overflow-hidden">
              <Image src="/images/cafe-night-exterior.jpg" alt="Cafe Primo at night" fill className="object-cover" />
            </div>
            <div className="relative h-80 rounded-2xl overflow-hidden">
              <Image src="/images/cafe-night-seating.jpg" alt="Outdoor seating area" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
