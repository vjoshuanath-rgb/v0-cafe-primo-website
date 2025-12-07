import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PawIcon } from "@/components/paw-icon"

type MenuItem = {
  name: string
  description?: string
  price?: number
  hot?: number
  cold12?: number
  cold16?: number
  size12?: number
  size16?: number
  isFavorite?: boolean
}

type MenuCategory = {
  name: string
  description?: string
  items: MenuItem[]
  extraNote?: string
}

const menuCategories: MenuCategory[] = [
  {
    name: "Coffee Menu",
    items: [
      { name: "Americano", description: "Water + Espresso", hot: 80, cold12: 85, cold16: 90 },
      { name: "Latte", description: "Milk + Espresso", hot: 100, cold12: 110, cold16: 120, isFavorite: true },
      { name: "Vanilla Latte", description: "Milk + Espresso + Vanilla Syrup", hot: 110, cold12: 115, cold16: 125 },
      { name: "Cappuccino", description: "Milk + Espresso + Milk foam", hot: 100, cold12: 115, cold16: 125 },
      { name: "Primo's Signature Latte", description: "Milk Mixture + Espresso + Foam", size12: 130, size16: 145, isFavorite: true },
      { name: "Cafe Primo", description: "Oatmilk + Condense + Espresso + Secret sauce", hot: 110, cold12: 130, cold16: 145, isFavorite: true },
      { name: "Thai Style", description: "Milk Mixture + Espresso", size12: 120, size16: 140 },
      { name: "Salted Cream Coffee", description: "Milk + Espresso + Salted Foam", size12: 120, size16: 130, isFavorite: true },
      { name: "Bạc xỉu (Coconut coffee)", description: "Milk + Coconutmilk + Espresso", size12: 130, size16: 140, isFavorite: true },
      { name: "Caramel Macchiato", description: "Milk + Caramel + Vanilla + Espresso", hot: 115, cold12: 130, cold16: 140 },
      { name: "Spanish Latte", description: "Milk + Condense + Espresso", hot: 110, cold12: 120, cold16: 140, isFavorite: true },
      { name: "Caramel Latte", description: "Milk + Caramel + Espresso", hot: 110, cold12: 120, cold16: 140 },
      { name: "Salted Caramel Latte", description: "Milk + Salted Caramel + Espresso + Salted Foam", hot: 110, cold12: 130, cold16: 140, isFavorite: true },
      { name: "Biscoff Latte", description: "Milk + Biscoff sauce + Espresso", hot: 120, cold12: 140, cold16: 155, isFavorite: true },
      { name: "Mocha", description: "Milk + Chocolate Sauce + Espresso", hot: 115, cold12: 130, cold16: 140 },
      { name: "White Chocolate Mocha", description: "Milk + White chocolate Sauce + Espresso", hot: 115, cold12: 130, cold16: 140 },
      { name: "Tres Leches", description: "Milk + Condense + Caramel + Espresso", hot: 110, cold12: 120, cold16: 140 },
    ],
    extraNote: "EXTRA SHOT: 35  SUB OAT: 35  EXTRA SAUCE/SYRUP: 25"
  },
  {
    name: "Ice Blended Drinks",
    description: "(ADD 30 PESOS FOR ESPRESSO)",
    items: [
      { name: "Biscoff Frappe", price: 155 },
      { name: "Caramel Frappe", price: 145 },
      { name: "Matcha Frappe", price: 140 },
      { name: "Mocha Frappe", price: 140 },
      { name: "Choco Banana Smoothie", price: 135 },
    ],
  },
  {
    name: "Cold Brew Drinks",
    items: [
      { name: "White Cold Brew", price: 150 },
      { name: "Salted Caramel", price: 150 },
    ],
  },
  {
    name: "Matcha Series",
    description: "12OZ ONLY",
    items: [
      { name: "Matcha Latte", price: 120 },
      { name: "Salted Matcha", price: 135 },
      { name: "Dirty Matcha", price: 140 },
    ],
  },
  {
    name: "Non-Coffee",
    items: [
      { name: "Milo Dinosaur", size12: 60, size16: 80 },
      { name: "Blue Lemonade", size12: 45, size16: 55 },
      { name: "Pink Lemonade", size12: 45, size16: 55 },
      { name: "Houseblend Iced Tea", size12: 45, size16: 55 },
      { name: "Kiwi", size12: 50, size16: 65 },
      { name: "Honey Peach", size12: 50, size16: 65 },
      { name: "Passionfruit", size12: 50, size16: 65 },
      { name: "Strawberry", size12: 50, size16: 65 },
      { name: "Lychee", size12: 50, size16: 65 },
    ],
  },
  {
    name: "All Day Breakfast",
    items: [
      { name: "Corned Beef", price: 145 },
      { name: "Spam", price: 150 },
      { name: "Hungarian", price: 150 },
      { name: "Tapa", price: 145 },
      { name: "Tocino", price: 130 },
      { name: "Longganisa", price: 130 },
    ],
  },
  {
    name: "Pasta",
    items: [
      { name: "Black Pepper Bacon", price: 140 },
      { name: "Tuna Pasta", price: 130 },
    ],
  },
  {
    name: "Sandwich",
    items: [
      { name: "Ham and Egg", price: 145 },
      { name: "Tuna and Egg", price: 130 },
      { name: "Grilled Cheese", price: 130 },
    ],
    extraNote: "ADDITIONAL EGG: 25   ADDITIONAL GARLIC RICE: 25"
  },
  {
    name: "Croffles",
    items: [
      { name: "Classic", price: 100 },
      { name: "Biscoff", price: 150 },
      { name: "Matcha", price: 130 },
      { name: "Banana Nutella", price: 130 },
      { name: "Caramel", price: 125 },
    ],
  },
  {
    name: "Finger Food",
    items: [
      { name: "French Fries", price: 70 },
      { name: "Kropek", price: 45 },
      { name: "Onion Rings", price: 100 },
      { name: "Barkada Set", price: 200, description: "(Fries, Kropek & Onion Rings)" },
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
              <div className="mb-8 pb-4 border-b border-border">
                <h2 className="font-serif text-3xl text-foreground">{category.name}</h2>
                {category.description && (
                  <p className="text-sm text-muted-foreground mt-1">{category.description}</p>
                )}
              </div>
              
              <div className="space-y-4">
                {category.items.map((item) => (
                  <div
                    key={item.name}
                    className="bg-card rounded-lg p-4 hover:shadow-md transition-shadow"
                  >
                    <div className="flex justify-between items-start gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <h3 className="font-medium text-foreground">{item.name}</h3>
                          {item.isFavorite && (
                            <PawIcon className="w-5 h-5 text-primary flex-shrink-0" />
                          )}
                        </div>
                        {item.description && (
                          <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                        )}
                      </div>
                      <div className="text-right flex-shrink-0">
                        {item.price !== undefined && (
                          <span className="text-primary font-semibold">₱{item.price}</span>
                        )}
                        {item.hot !== undefined && (
                          <div className="space-y-1">
                            <div className="flex gap-3 text-sm">
                              <div className="text-center">
                                <div className="text-xs text-muted-foreground mb-1">Hot</div>
                                <span className="text-foreground font-medium">₱{item.hot}</span>
                              </div>
                              <div className="text-center">
                                <div className="text-xs text-muted-foreground mb-1">Cold 12oz</div>
                                <span className="text-foreground font-medium">₱{item.cold12}</span>
                              </div>
                              <div className="text-center">
                                <div className="text-xs text-muted-foreground mb-1">Cold 16oz</div>
                                <span className="text-foreground font-medium">₱{item.cold16}</span>
                              </div>
                            </div>
                          </div>
                        )}
                        {item.size12 !== undefined && (
                          <div className="space-y-1">
                            <div className="flex gap-3 text-sm">
                              <div className="text-center">
                                <div className="text-xs text-muted-foreground mb-1">Cold 12oz</div>
                                <span className="text-foreground font-medium">₱{item.size12}</span>
                              </div>
                              <div className="text-center">
                                <div className="text-xs text-muted-foreground mb-1">Cold 16oz</div>
                                <span className="text-foreground font-medium">₱{item.size16}</span>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {category.extraNote && (
                <p className="text-sm text-muted-foreground mt-4 italic">{category.extraNote}</p>
              )}
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
