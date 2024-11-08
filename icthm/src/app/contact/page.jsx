"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Facebook,
  Twitter,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function ContactUs() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50 dark:from-orange-900 dark:to-yellow-900   text-foreground py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          className="text-4xl font-bold text-center text-primary mb-12"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          Contact Us
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            className="space-y-8"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ delay: 0.2 }}
          >
            <Image
              src="https://illustrations.popsy.co/amber/telephone-call.svg"
              alt="Contact Us"
              width={400}
              height={300}
              className=""
            />
            <div>
              <h2 className="text-3xl font-semibold  mb-4 underline underline-offset-4 decoration-orange-500">
                Get in Touch
              </h2>
              <p className="text-muted-foreground mb-4">
                We love to hear from you. Whether you have a question about our
                services, pricing, or anything else, our team is ready to answer
                all your questions.
              </p>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Mail className="mr-2 text-primary" />
                  <span>info@example.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="mr-2 text-primary" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="mr-2 text-primary" />
                  <span>123 Conference St, Tourism City, 12345</span>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-primary mb-4">
                Follow Us
              </h2>
              <div className="flex space-x-4">
                <a href="#" className="text-primary hover:text-primary/80">
                  <Facebook size={24} />
                </a>
                <a href="#" className="text-primary hover:text-primary/80">
                  <Twitter size={24} />
                </a>
                <a href="#" className="text-primary hover:text-primary/80">
                  <Instagram size={24} />
                </a>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="bg-white h-fit p-8 rounded-lg shadow-lg"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-2xl font-semibold text-primary mb-6">
              Send us a Message
            </h2>
            <form className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-muted-foreground mb-1"
                >
                  Name
                </label>
                <Input id="name" placeholder="Your Name" />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-muted-foreground mb-1"
                >
                  Email
                </label>
                <Input id="email" type="email" placeholder="your@email.com" />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-muted-foreground mb-1"
                >
                  Phone.no
                </label>
                <Input id="Phone" type="number" placeholder="91+ 8734628373" />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-muted-foreground mb-1"
                >
                  Country
                </label>
                <Input id="Country" type="text" placeholder="India" />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-muted-foreground mb-1"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Your message here..."
                  rows={4}
                />
              </div>
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
