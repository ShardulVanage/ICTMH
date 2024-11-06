import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t-2 border-orange-400">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-8 md:mb-0 md:w-1/3">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/ictmh.svg"
                alt="ICTMH Logo"
                width={200}
                height={80}
              />
            </Link>
            {/* <h2 className="text-xl font-bold text-orange-600 mb-4">
              International Conference on Tourism Management and Hospitality
            </h2> */}
            <div className="flex space-x-4 mb-4">
              <a
                href="#"
                className="text-orange-600 hover:text-orange-500 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-orange-600 hover:text-orange-500 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-orange-600 hover:text-orange-500 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-orange-600 hover:text-orange-500 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:w-2/3">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-orange-600">About</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/about-conference"
                    className="hover:text-orange-500 transition-colors"
                  >
                    About Conference
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about-zep-research"
                    className="hover:text-orange-500 transition-colors"
                  >
                    About Zep Research
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-orange-600">
                Call for Papers
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/theme-and-topics"
                    className="hover:text-orange-500 transition-colors"
                  >
                    Theme and Topics
                  </Link>
                </li>
                <li>
                  <Link
                    href="/papers-format"
                    className="hover:text-orange-500 transition-colors"
                  >
                    Papers Format
                  </Link>
                </li>
                <li>
                  <Link
                    href="/mode-of-presentation"
                    className="hover:text-orange-500 transition-colors"
                  >
                    Mode of Presentation
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-orange-600">
                Quick Links
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/submission"
                    className="hover:text-orange-500 transition-colors"
                  >
                    Submission
                  </Link>
                </li>
                <li>
                  <Link
                    href="/venue"
                    className="hover:text-orange-500 transition-colors"
                  >
                    Venue
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="hover:text-orange-500 transition-colors"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    href="/registration"
                    className="hover:text-orange-500 transition-colors"
                  >
                    Registration
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-orange-200 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} International Conference on
            Tourism Management and Hospitality. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
