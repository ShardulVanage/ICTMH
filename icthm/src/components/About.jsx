"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";

export default function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <section
      ref={ref}
      className="w-full py-12 md:py-12 lg:py-24 bg-gradient-to-br from-orange-50 to-yellow-50 dark:from-orange-900 dark:to-yellow-900"
    >
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center"
        >
          <motion.div variants={itemVariants} className="flex justify-center">
            <div className="relative w-full max-w-[500px] aspect-square overflow-hidden rounded-lg">
              <Image
                src="https://illustrations.popsy.co/amber/shaking-hands.svg"
                alt="Conference Image"
                layout="fill"
                objectFit="cover"
                className="object-center"
              />
            </div>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="flex flex-col justify-center space-y-4"
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-4xl underline underline-offset-2 decoration-orange-500">
              About Our Conference
            </h2>
            <p className="text-muted-foreground">
              Join us for an inspiring gathering of industry leaders,
              innovators, and visionaries. Our conference offers unparalleled
              networking opportunities, cutting-edge insights, and
              transformative ideas that will shape the future of technology and
              business.
            </p>
            <motion.div variants={itemVariants}>
              <Button
                asChild
                className="bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105"
              >
                <a href="/about-conference">Read More</a>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
