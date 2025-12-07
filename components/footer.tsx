import Link from "next/link"
import { Instagram, Phone, MapPin } from "lucide-react"
import { Logo } from "./logo"

export function Footer() {
  return (
    <footer className="bg-secondary py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <Logo />
            <p className="mt-4 text-muted-foreground max-w-sm">
              Est. 2021 — First roaming mobile pop-up coffee bar in Cebu South. Now your neighborhood café in Poblacion
              I, Carcar City.
            </p>
            <div className="flex items-center gap-2 mt-4 text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">Poblacion I, Carcar City, Cebu</span>
            </div>
          </div>

          <div>
            <h4 className="font-serif font-semibold text-foreground mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link href="/menu" className="block text-muted-foreground hover:text-foreground transition-colors">
                Menu
              </Link>
              <Link href="/store" className="block text-muted-foreground hover:text-foreground transition-colors">
                Store
              </Link>
              <Link href="/about" className="block text-muted-foreground hover:text-foreground transition-colors">
                About Us
              </Link>
              <Link href="/contact" className="block text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-serif font-semibold text-foreground mb-4">Connect With Us</h4>
            <div className="space-y-3">
              <a
                href="https://instagram.com/cafeprimoo"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Instagram className="w-5 h-5" />
                @cafeprimoo
              </a>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone className="w-5 h-5" />
                <div className="text-sm">
                  <p>0945 456 1632</p>
                  <p>0945 701 2449</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Café Primo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
