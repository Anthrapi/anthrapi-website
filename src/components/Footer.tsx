import Link from 'next/link';
import { Linkedin, Twitter, Instagram, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-3">
            <div className="mb-1 flex items-center space-x-2">
              <span className="text-xl font-semibold">Anthrapi</span>
            </div>
            <p className="mb-6 max-w-md text-base text-gray-300">
              Empowering businesses with innovative AI solutions and creative
              services. We transform ideas into digital excellence.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://linkedin.com/company/anthrapi"
                className="transition-opacity hover:opacity-80"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-5 w-5 text-white" />
              </Link>
              <Link
                href="https://twitter.com/anthrapi"
                className="transition-opacity hover:opacity-80"
                aria-label="Twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter className="h-5 w-5 text-white" />
              </Link>
              <Link
                href="https://instagram.com/anthrapi.ltd"
                className="transition-opacity hover:opacity-80"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="h-5 w-5 text-white" />
              </Link>
              <Link
                href="tel:+919740315502"
                className="transition-opacity hover:opacity-80"
                aria-label="Call us"
              >
                <Phone className="h-5 w-5 text-white" />
              </Link>
              <Link
                href="mailto:contact@anthrapi.com"
                className="transition-opacity hover:opacity-80"
                aria-label="Email us"
              >
                <Mail className="h-5 w-5 text-white" />
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-sm font-semibold tracking-wider text-gray-300 uppercase">
              Services
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/men-at-work"
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  AI Solutions
                </Link>
              </li>
              <li>
                <Link
                  href="/men-at-work"
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  Creative Services
                </Link>
              </li>
              <li>
                <Link
                  href="/men-at-work"
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  Software Development
                </Link>
              </li>
              <li>
                <Link
                  href="/men-at-work"
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  Consulting
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          {/* <div>
            <h3 className="mb-4 text-sm font-semibold tracking-wider text-gray-300 uppercase">
              Company
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="#who"
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#why"
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  Why Choose Us
                </Link>
              </li>
              <li>
                <Link
                  href="/men-at-work"
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  Our Work
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div> */}
        </div>

        {/* Bottom Section */}
        <div className="mt-12 border-t border-gray-800 pt-8">
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <p className="text-sm text-gray-400">
              © 2024 Anthrapi. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link
                href="#"
                className="text-gray-400 transition-colors hover:text-white"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-gray-400 transition-colors hover:text-white"
              >
                Terms of Service
              </Link>
              <Link
                href="#"
                className="text-gray-400 transition-colors hover:text-white"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
