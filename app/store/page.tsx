"use client"

import Image from "next/image"
import { useState } from "react"
import { ShoppingBag, Check } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { useCart } from "@/components/cart-provider"
import { PawIcon } from "@/components/paw-icon"

const products = [
  {
    id: "beans-house",
    name: "House Blend Beans",
    price: 450,
    category: "Coffee Beans",
    image: "/coffee-beans-bag-brown-packaging.jpg",
    description: "Our signature blend with notes of chocolate and caramel.",
  },
  {
    id: "beans-espresso",
    name: "Espresso Roast",
    price: 480,
    category: "Coffee Beans",
    image: "/dark-roast-espresso-coffee-beans-bag.jpg",
    description: "Bold and intense, perfect for espresso lovers.",
  },
  {
    id: "beans-light",
    name: "Light Roast Single Origin",
    price: 520,
    category: "Coffee Beans",
    image: "/light-roast-coffee-beans-specialty-bag.jpg",
    description: "Fruity and bright from Ethiopian highlands.",
  },
  {
    id: "mug-primo",
    name: "Café Primo Mug",
    price: 350,
    category: "Merchandise",
    image: "/ceramic-coffee-mug-cream-color-paw-print.jpg",
    description: "Ceramic mug with our signature paw logo.",
  },
  {
    id: "tumbler",
    name: "Travel Tumbler",
    price: 650,
    category: "Merchandise",
    image: "/stainless-steel-travel-tumbler-coffee.jpg",
    description: "Insulated tumbler, keeps drinks hot for hours.",
  },
  {
    id: "tshirt",
    name: "Café Primo T-Shirt",
    price: 550,
    category: "Merchandise",
    image: "/beige-t-shirt-coffee-shop-logo-casual.jpg",
    description: "Soft cotton tee with our logo print.",
  },
  {
    id: "tote",
    name: "Canvas Tote Bag",
    price: 280,
    category: "Merchandise",
    image: "/canvas-tote-bag-coffee-cafe-eco-friendly.jpg",
    description: "Eco-friendly tote for your daily essentials.",
  },
  {
    id: "gift-box",
    name: "Gift Box Set",
    price: 1200,
    category: "Gift Sets",
    image: "/coffee-gift-box-set-premium-packaging.jpg",
    description: "Coffee beans, mug, and treats in a beautiful box.",
  },
]

const categories = ["All", "Coffee Beans", "Merchandise", "Gift Sets"]

export default function StorePage() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [addedItems, setAddedItems] = useState<Set<string>>(new Set())
  const { addToCart } = useCart()

  const filteredProducts = activeCategory === "All" ? products : products.filter((p) => p.category === activeCategory)

  const handleAddToCart = (product: (typeof products)[0]) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    })
    setAddedItems((prev) => new Set([...prev, product.id]))
    setTimeout(() => {
      setAddedItems((prev) => {
        const next = new Set(prev)
        next.delete(product.id)
        return next
      })
    }, 2000)
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
          <h1 className="font-serif text-5xl md:text-6xl text-foreground">Shop</h1>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Take a piece of Café Primo home. From premium coffee beans to cozy merchandise, find something you&apos;ll
            love.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 border-b border-border sticky top-20 bg-background z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-muted-foreground hover:text-foreground"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group bg-card rounded-2xl overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative h-64 overflow-hidden bg-muted">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <span className="text-xs uppercase tracking-wider text-muted-foreground">{product.category}</span>
                  <h3 className="font-serif text-lg font-semibold text-foreground mt-1">{product.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{product.description}</p>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-primary font-bold text-lg">₱{product.price}</span>
                    <Button
                      size="sm"
                      onClick={() => handleAddToCart(product)}
                      className={`transition-all ${
                        addedItems.has(product.id)
                          ? "bg-green-600 hover:bg-green-600"
                          : "bg-primary hover:bg-primary/90"
                      } text-primary-foreground`}
                    >
                      {addedItems.has(product.id) ? (
                        <>
                          <Check className="w-4 h-4 mr-1" />
                          Added
                        </>
                      ) : (
                        <>
                          <ShoppingBag className="w-4 h-4 mr-1" />
                          Add
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
