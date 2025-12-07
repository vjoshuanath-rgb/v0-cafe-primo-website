import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PawIcon } from "@/components/paw-icon"

const menuCategories = [
  {
    name: "Coffee",
    items: [
      {
        name: "Salted Cream Latte",
        price: 150,
        description: "Espresso with silky salted cream top",
        image: "/images/almond-croffle-latte.jpg",
      },
      {
        name: "Cold Brew",
        price: 130,
        description: "Smooth, slow-steeped for 12 hours",
        image: "/images/cold-brew.jpg",
      },
      {
        name: "White Cold Brew",
        price: 145,
        description: "Our signature bottled cold brew with milk",
        image: "/images/white-cold-brew.jpg",
      },
      {
        name: "Bac Xiu",
        price: 140,
        description: "Vietnamese-style milk coffee",
        image: "/images/bac-xiu.jpg",
      },
      {
        name: "Biscoff Frappe",
        price: 175,
        description: "Blended coffee with Biscoff cookie",
        image: "/images/biscoff-frappe.jpg",
      },
    ],
  },
  {
    name: "Croffles",
    items: [
      {
        name: "Banana-Nutella Croffle",
        price: 145,
        description: "Crispy croffle with Nutella and fresh banana",
        image: "/images/banana-nutella-croffle.jpg",
      },
    ],
  },
  {
    name: "Meals",
    items: [
      {
        name: "Black Pepper Bacon Pasta",
        price: 195,
        description: "Creamy pasta with bacon and garlic bread",
        image: "/images/black-pepper-pasta.jpg",
      },
      {
        name: "Corned Beef",
        price: 175,
        description: "Garlic rice, egg, and fresh vegetables",
        image: "/images/corned-beef.jpg",
      },
      {
        name: "Tuna House Salad",
        price: 165,
        description: "Fresh greens with tuna and house dressing",
        image: "/images/tuna-salad.jpg",
      },
      {
        name: "Ham & Egg Sandwich",
        price: 185,
        description: "Toasted sandwich with fries and dip",
        image: "/images/ham-egg-sandwich.jpg",
      },
    ],
  },
]

export default function MenuPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <PawIcon className="w-6 h-6 text-primary" />
          </div>
          <h1 className="font-serif text-5xl md:text-6xl text-foreground">Our Menu</h1>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Good coffee, good food, and good reads. Handcrafted with love, served with a smile.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden">
            <Image src="/images/cafe-storefront.jpg" alt="Cafe Primo interior view" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* Menu Categories */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {menuCategories.map((category) => (
            <div key={category.name} className="mb-16 last:mb-0">
              <h2 className="font-serif text-3xl text-foreground mb-8 pb-4 border-b border-border">{category.name}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((item) => (
                  <div
                    key={item.name}
                    className="bg-card rounded-2xl overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    <div className="relative h-48">
                      <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                    </div>
                    <div className="p-4">
                      <div className="flex justify-between items-start">
                        <h3 className="font-medium text-foreground">{item.name}</h3>
                        <span className="text-primary font-semibold">₱{item.price}</span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Hours Notice */}
      <section className="py-12 bg-secondary">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <PawIcon className="w-8 h-8 text-primary mx-auto mb-4" />
          <p className="text-foreground font-medium mb-2">Store Hours: 3:00 PM - 11:00 PM (Tues - Sun)</p>
          <p className="text-muted-foreground text-sm">
            Food: 4:00 PM - 10:00 PM | Coffee & Croffles: 3:00 PM - 10:30 PM
          </p>
          <p className="text-muted-foreground text-sm mt-4">
            We kindly ask for your patience during busy times. See you at the cafe, fren!
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
