import React from "react";
import Link from "next/link";
import { contactLinks, quickLinks, socialLinks } from "@/lib/links";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold font-display tracking-tight">
              BIG<span className="text-red-600">STEPPERS</span>
            </h2>
            <p className="text-gray-400 text-sm">
              Premium footwear for every step of your journey. Quality, comfort,
              and style combined.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map(({ icon: Icon, link }, index) => (
                <Link
                  href={link}
                  key={index}
                  className="text-gray-400 hover:text-white transition-colors">
                  <Icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {quickLinks.map(({ link, title }, index) => (
                <Link
                  href={link}
                  key={index}
                  className="text-gray-400 block hover:text-white transition-colors">
                  {title}
                </Link>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              {contactLinks.map(({ icon: Icon, data }, index) => (
                <li
                  key={index}
                  className="flex items-center space-x-3 text-gray-400">
                  <Icon className="w-5 h-5" />
                  <span>{data}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Newsletter</h3>
            <p className="text-gray-400 text-sm mb-4">
              Subscribe to get special offers, free giveaways, and new releases.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-red-600 text-white placeholder:text-gray-500"
              />
              <button className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-16 pt-8 text-center text-gray-400 text-sm">
          <p>© 2024 BigSteppers. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
