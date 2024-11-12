'use client'

import { useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CalendarDays, MapPin, Users, Lightbulb, Globe, Award } from 'lucide-react'

export default function ConferenceAboutSection() {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    }
  }, [controls, isInView])

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.5, 
        ease: 'easeOut',
        staggerChildren: 0.1 
      } 
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  }

  const conferenceFeatures = [
    { icon: CalendarDays, text: "3-day event packed with insights" },
    { icon: MapPin, text: "Hosted in the heart of New York City" },
    { icon: Users, text: "Network with 500+ industry professionals" },
    { icon: Lightbulb, text: "20+ workshops on emerging trends" },
    { icon: Globe, text: "Speakers from 30+ countries" },
    { icon: Award, text: "Annual Tourism Innovation Awards" },
  ]

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      className="py-16 px-4 bg-gradient-to-br from-orange-50 to-yellow-50 dark:from-orange-900 dark:to-yellow-900"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div variants={itemVariants} className="text-center mb-12">
          <Badge variant="outline" className="mb-4 text-lg px-4 py-1">About the Conference</Badge>
          <h2 className="text-4xl font-bold text-primary mb-4">International Conference on Tourism Management and Hospitality</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Bringing together industry leaders, researchers, and innovators to shape the future of tourism and hospitality.
          </p>
        </motion.div>
 <motion.div variants={itemVariants} className="mt-12 text-center pb-12">
          <Card className="bg-white/50 backdrop-blur-sm border-2 border-primary/20 inline-block">
            <CardHeader>
                <CardTitle className="text-2xl font-bold text-primary">ICTMH</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground px-12">
                  To foster innovation, collaboration, and sustainable practices in the tourism and hospitality industry through knowledge sharing, networking, and showcasing cutting-edge research and technologies.
                                 To foster innovation, collaboration, and sustainable practices in the tourism and hospitality industry through knowledge sharing, networking, and showcasing cutting-edge research and technologies.

                </p>
              </CardContent>
          </Card>
          
        </motion.div>
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div variants={itemVariants}>
            <Card className="h-full bg-white/50 backdrop-blur-sm border-2 border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-primary">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To foster innovation, collaboration, and sustainable practices in the tourism and hospitality industry through knowledge sharing, networking, and showcasing cutting-edge research and technologies.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="h-full bg-white/50 backdrop-blur-sm border-2 border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-primary">Conference Highlights</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="grid grid-cols-2 gap-4">
                  {conferenceFeatures.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <feature.icon className="h-5 w-5 text-primary mr-2" />
                      <span className="text-sm text-muted-foreground">{feature.text}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div variants={itemVariants} className="mt-12 text-center">
          <Card className="bg-white/50 backdrop-blur-sm border-2 border-primary/20 inline-block">
            <CardContent className="p-6">
              <CardDescription className="text-lg font-medium text-primary mb-2">
                Join us in shaping the future of tourism and hospitality
              </CardDescription>
              <p className="text-muted-foreground">
                September 15-17, 2024 • New York City, USA
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.section>
  )
}