"use client";

import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";

import { Newsletter } from "../sections/newsletter/newsletter";
import { SocialLinks } from "../sections/social-links/sociallinks";
import { ContactInfo } from "../sections/contactinfo/contactinfo";

function Footer() {
  return (
    <footer className="bg-gray-900 text-amber-100">
      {/* Newsletter */}
      <Newsletter />

      {/* Main content */}
      <div className="mx-auto px-6 py-12">
        <div className="flex flex-col items-center gap-12 text-center md:flex-row md:items-start md:justify-center md:gap-44 md:text-left">
          {/* Contact */}
          <ContactInfo />

          {/* Social */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-center">Följ oss</h3>

            <SocialLinks />
          </div>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
