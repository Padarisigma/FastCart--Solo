import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, ArrowRight } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Exclusive Column */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Exclusive</h3>
            <h4 className="font-medium">Subscribe</h4>
            <p className="text-sm">Get 10% off your first order</p>

            <div className="flex mt-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent border border-white/30 px-4 py-2 text-sm w-full outline-none"
              />
              <button className="bg-transparent border border-white/30 border-l-0 px-3">
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Support Column */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <p className="text-sm">111 Bijoy sarani, Dhaka,</p>
            <p className="text-sm">DH 1515, Bangladesh.</p>
            <p className="text-sm">exclusive@gmail.com</p>
            <p className="text-sm">+88016-88888-9999</p>
          </div>

          {/* Account Column */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Account</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/account" className="text-sm hover:underline">
                  My Account
                </Link>
              </li>
              <li>
                <Link href="/cart" className="text-sm hover:underline">
                  Cart
                </Link>
              </li>
              <li>
                <Link href="/wishlist" className="text-sm hover:underline">
                  Wishlist
                </Link>
              </li>
              <li>
                <Link href="/shop" className="text-sm hover:underline">
                  Shop
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Link Column */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Quick Link</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy-policy" className="text-sm hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-use" className="text-sm hover:underline">
                  Terms Of Use
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-sm hover:underline">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Column */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Social</h3>
            <div className="flex space-x-4">
              <Link href="#" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm">
          © Copyright Rimel 2022. All right reserved.
        </div>
      </div>
    </footer>
  )
}
