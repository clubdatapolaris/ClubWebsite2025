"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { AnimatePresence, motion } from "framer-motion"
import { Calendar, ChevronLeft, ChevronRight, MapPin } from "lucide-react"
import type React from "react"
import { useEffect, useState } from "react"
import PageTransition from "../components/PageTransition"

const pastEvents = [
  {
    title: "Squid Maze",
    date: "February 27-28, 2025",
    location: "RCPIT",
    category: "Competition",
    description:
      "Squid Maze was a highlight of Converges 2k25, organized by Data Polaris in collaboration with SkillBhavan® at R.C. Patel Institute of Technology, Shirpur. Inspired by the 'Squid Game' series, this event challenged participants through three engaging rounds:",
    images: ["DP3(tosend)/src/images/Squid Maze Photos/WhatsApp Image 2025-03-19 at 11.53.39 PM.jpeg", "DP3(tosend)/src/images/Squid Maze Photos/2.jpeg", "DP3(tosend)/src/images/Squid Maze Photos/8 copy.jpg","DP3(tosend)/src/images/Squid Maze Photos/10.jpg"],
    featured: true,
  },
  {
    title: "Stranger Code",
    date: "January 2024",
    location: "RCPIT Campus",
    category: "Competition",
    description: 
      "Stranger Code was an exciting coding competition that challenged participants to solve programming problems with unique constraints and mystery elements.",
    images: [
      "images/stranger_code/stranger_code1.jpeg",
      "images/stranger_code/stranger_code2.jpeg",
      "images/stranger_code/stranger_code3.jpeg",
    ],
    featured: false,
  },
  {
    title: "SkillSprint",
    date: "16 October 2023",
    location: "Auditorium Hall, RCPIT",
    category: "Workshop",
    description:
      "SkillSprint Bootcamp provided students with an opportunity to gain expertise in Artificial Intelligence, Machine Learning, and Data Science.",
    images: ["images/skillsprint/DSC05925.JPG", "images/skillsprint/DSC05922.JPG", "images/skillsprint/DSC06009.JPG"],
    featured: false,
  },
  {
    title: "Brain Heist",
    date: "March 2023",
    location: "RCPIT Campus",
    category: "Competition",
    description: 
      "Brain Heist was a successful event in Converges 2k23. It was organised by the Club Data Polaris. It's main focus was to engage the participants in world of Technology in fun way and giving them hands on experience of the technical competition.",
    images: [
      "images/events/brain_heist1.jpg",
      "images/events/brain_heist2.jpg",
      "images/events/brain_heist3.jpg",
    ],
    featured: false,
  },
  {
    title: "MachineHack",
    date: "23 December 2022",
    location: "Auditorium Hall, RCPIT",
    category: "Championship",
    description: "The Machine learning Championship in collaboration with MachineHack and Analytics India Magazine.",
    images: [
      "images/machinhack/machinehack1.JPG",
      "images/machinhack/machinehack2.JPG",
      "images/machinhack/machinehack3.JPG",
    ],
    featured: false,
  },
  {
    title: "Club Inauguration",
    date: "08 December 2022",
    location: "Auditorium Hall, RCPIT",
    category: "Ceremony",
    description:
      "On the occasion of Clubs opening, the club launched the Machine learning Championship in collaboration with MachineHack and Analytics India Magazine.",
    images: [
      "images/club_inauguration/club_inauguration_17.JPG",
      "images/club_inauguration/club_inauguration_13.JPG",
      "images/club_inauguration/club_inauguration_26.jpg",
    ],
    featured: false,
  },
]

const ImageGallery = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  useEffect(() => {
    let interval
    if (!isHovered && images.length > 1) {
      interval = setInterval(() => {
        nextImage()
      }, 3000)
    }
    return () => clearInterval(interval)
  }, [isHovered, images.length])

  return (
    <div
      className="h-64 overflow-hidden relative rounded-t-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence initial={false} mode="wait">
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          alt="Event Image"
          className="w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        />
      </AnimatePresence>

      {images.length > 1 && (
        <div className="absolute inset-0 flex items-center justify-between px-4">
          <Button
            variant="ghost"
            size="icon"
            className="bg-black/30 hover:bg-black/50 text-white rounded-full h-8 w-8"
            onClick={(e) => {
              e.stopPropagation()
              prevImage()
            }}
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="bg-black/30 hover:bg-black/50 text-white rounded-full h-8 w-8"
            onClick={(e) => {
              e.stopPropagation()
              nextImage()
            }}
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      )}

      {images.length > 1 && (
        <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1">
          {images.map((_, idx) => (
            <div
              key={idx}
              className={`h-1.5 rounded-full transition-all ${currentIndex === idx ? "w-6 bg-orange-500" : "w-1.5 bg-white/70"}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}

const Events: React.FC = () => {
  // Add this state to track which events are expanded
  const [expandedEvents, setExpandedEvents] = useState<number[]>([])
  
  // Function to toggle expanded state
  const toggleEventExpansion = (index: number) => {
    setExpandedEvents(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index) 
        : [...prev, index]
    )
  }

  return (
    <PageTransition>
      <main className="min-h-screen bg-club-blue text-white pt-24">
        {/* Timeline */}
        <section className="py-16 bg-club-blue/80 backdrop-blur-sm relative">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              className="mb-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 font-display">Event <span className="text-orange-500">Timeline</span></h2>
              <div className="h-1 w-20 bg-orange-500 rounded-full mx-auto"></div>
            </motion.div>

            <div className="relative">
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-500 via-purple-500 to-blue-500"></div>

              <div className="space-y-12">
                {pastEvents.map((event, index) => (
                  <motion.div
                    key={index}
                    className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                  >
                    <div className="flex-1 md:w-1/2" />
                    <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full border-4 border-gray-900 bg-orange-500 z-10"></div>
                    <div className="pl-12 md:pl-0 flex-1 md:w-1/2">
                      <div className="bg-club-dark/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-orange-500/30 transition-all">
                        <Badge className="mb-3 bg-orange-500/20 text-orange-400 border-orange-500/30" variant="outline">
                          {event.category}
                        </Badge>
                        <h3 className="text-2xl font-semibold mb-2">{event.title}</h3>
                        <div className="flex items-center text-club-muted text-sm mb-2">
                          <Calendar className="w-4 h-4 mr-2" />
                          {event.date}
                        </div>
                        <div className="flex items-center text-club-muted text-sm mb-4">
                          <MapPin className="w-4 h-4 mr-2" />
                          {event.location}
                        </div>
                        <p className={`text-club-muted text-lg ${expandedEvents.includes(index) ? "" : "line-clamp-3"}`}>
  {event.description}
</p>

                        <Button
                          variant="ghost"
                          className="mt-4 text-orange-400 hover:text-orange-300 hover:bg-orange-500/10 p-0 font-semibold"
                          onClick={() => toggleEventExpansion(index)}
                        >
                          {expandedEvents.includes(index) ? 'Show Less' : 'Read More'}
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </PageTransition>
  )
}

export default Events
