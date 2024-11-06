"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, MapPin, Users } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const ctaItems = [
  {
    title: "Awards",
    description: "Recognize excellence in tourism and hospitality",
    icon: Award,
    link: "/awards",
  },
  {
    title: "Sponsorship",
    description: "Partner with us to showcase your brand",
    icon: Users,
    link: "/sponsorship",
  },
  {
    title: "Venue",
    description: "Explore our world-class conference facilities",
    icon: MapPin,
    link: "/venue",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function CTASection() {
  return (
    <section className="py-16 bg-gradient-to-br from-orange-50 to-yellow-50 dark:from-orange-900 dark:to-yellow-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            transition={{ duration: 0.5 }}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-primary">
                  Celebrate & Support Tourism and Hospitality
                </CardTitle>
                <CardDescription>
                  Explore key aspects of our conference
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4">
                {ctaItems.map((item, index) => (
                  <motion.div
                    key={item.title}
                    variants={cardVariants}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card>
                      <CardContent className="flex items-center p-4">
                        <item.icon className="h-8 w-8 text-primary mr-4" />
                        <div>
                          <h3 className="font-semibold">{item.title}</h3>
                          <p className="text-sm text-muted-foreground">
                            {item.description}
                          </p>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button
                          asChild
                          variant="outline"
                          className="w-full border-orange-400 hover:bg-orange-50"
                        >
                          <Link href={item.link}>Learn More</Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  </motion.div>
                ))}
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card className="h-full flex flex-col justify-between">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-primary">
                  Register Now
                </CardTitle>
                <CardDescription className="text-base">
                  Secure your spot at the International Conference on Tourism
                  Management and Hospitality
                </CardDescription>
                <Image
                  src="https://illustrations.popsy.co/amber/man-on-a-bicycle.svg"
                  alt="Conference Illustration"
                  width={200}
                  height={200}
                />
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Join industry leaders, researchers, and professionals for an
                  enriching experience in the world of tourism and hospitality.
                </p>
                <ul className="list-disc list-inside mb-4 text-muted-foreground">
                  <li>Engaging keynote speakers</li>
                  <li>Interactive workshops</li>
                  <li>Networking opportunities</li>
                  <li>Latest industry insights</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  asChild
                  className="w-full bg-primary text-lg text-primary-foreground hover:bg-primary/90 py-6"
                >
                  <Link href="/register">Register for the Conference</Link>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
