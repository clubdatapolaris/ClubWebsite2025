"use client"

import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import type React from "react"
import { useEffect, useState } from "react"
import PageTransition from "../components/PageTransition"

// Define categories with their corresponding images
const categoriesWithImages = {
  'Squid Maze': [
    '/images/Squid Maze Photos/WhatsApp Image 2025-03-01 at 12.54.14 AM.jpg',
    '/images/Squid Maze Photos/5.jpg',
    '/images/Squid Maze Photos/3.jpg',
    '/images/Squid Maze Photos/4.jpg',
    '/images/Squid Maze Photos/1742409304267.jpg',
    'images/Squid Maze Photos/10.jpg',
    '/images/Squid Maze Photos/2.jpg',
    '/images/Squid Maze Photos/one.jpg',
    '/images/Squid Maze Photos/7.jpg',
    '/images/Squid Maze Photos/8.jpg',
    '/images/Squid Maze Photos/9.jpg',
    '/images/Squid Maze Photos/20250227_110930.jpg',
  ],
  'Stranger Code': [
    '/images/stranger_code/stranger_code1.jpeg',
    '/images/stranger_code/stranger_code2.jpeg',
    '/images/stranger_code/stranger_code3.jpeg',
  ],
  'SkillSprint': [
    '/images/skillsprint/DSC05922.JPG',
    '/images/skillsprint/DSC05925.JPG',
    '/images/skillsprint/DSC06009.JPG',
  ],
  'Brain Heist': [
    '/images/brain_heist/brain_heist1.jpg',
    '/images/brain_heist/brain_heist2.jpg',
    '/images/brain_heist/brain_heist3.jpg',
  ],
  'MachineHack': [
    '/images/machinhack/machinehack1.JPG',
    '/images/machinhack/machinehack2.JPG',
    '/images/machinhack/machinehack3.JPG',
  ],
  'Club Inauguration': [
    '/images/club_inauguration/club_inauguration_17.JPG',
    '/images/club_inauguration/club_inauguration_13.JPG',
    '/images/club_inauguration/club_inauguration_26.jpg',
  ],
};

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  const categories = ["All", ...Object.keys(categoriesWithImages)]
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredImages =
    activeCategory === "All" ? Object.values(categoriesWithImages).flat() : categoriesWithImages[activeCategory] || []

  // Simulate loading images
  useEffect(() => {
    setIsLoading(true)
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [activeCategory])

  const handleNext = () => {
    if (filteredImages.length === 0) return
    setCurrentIndex((prevIndex) => (prevIndex + 1) % filteredImages.length)
    setSelectedImage(filteredImages[(currentIndex + 1) % filteredImages.length])
  }

  const handlePrev = () => {
    if (filteredImages.length === 0) return
    setCurrentIndex((prevIndex) => (prevIndex - 1 + filteredImages.length) % filteredImages.length)
    setSelectedImage(filteredImages[(currentIndex - 1 + filteredImages.length) % filteredImages.length])
  }

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (selectedImage) {
        if (event.key === "ArrowRight") {
          handleNext()
        } else if (event.key === "ArrowLeft") {
          handlePrev()
        } else if (event.key === "Escape") {
          setSelectedImage(null)
        }
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [selectedImage, currentIndex, filteredImages])

  // Reset current index when category changes
  useEffect(() => {
    setCurrentIndex(0)
  }, [activeCategory])

  return (
    <PageTransition>
      <main className="pt-24 pb-16">
        {/* Header Section */}
        <section className="relative py-16 md:py-24 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1483058712412-4245e9b90334')] bg-cover bg-center bg-no-repeat opacity-10"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-club-dark via-club-dark/95 to-club-dark"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              <motion.h1
                className="text-4xl md:text-5xl font-bold text-white mb-6 font-display"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <span className="text-orange-500">Gallery</span>
              </motion.h1>
              <motion.p
                className="text-lg text-white/80"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Explore moments from our events, activities, and gatherings.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Category Filters */}
            <motion.div
              className="flex flex-wrap justify-center gap-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-2 rounded-full border transition-all duration-300 ${
                    activeCategory === category
                      ? "bg-orange-500 border-red text-black font-semibold"
                      : "bg-transparent border-white/20 text-white/70 hover:border-white/50 hover:text-white"
                  }`}
                >
                  {category}
                </button>
              ))}
            </motion.div>

            {/* Event Title (when a specific category is selected) */}
            {activeCategory !== "All" && (
              <motion.div
                className="mb-8 text-center"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  <span className="text-orange-500">{activeCategory}</span> Event
                </h2>
                <p className="text-white/70 mt-2 text-lg">{filteredImages.length} photos from this event</p>
              </motion.div>
            )}

            {/* Loading State */}
            {isLoading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[...Array(6)].map((_, index) => (
                  <div key={index} className="aspect-[4/3] rounded-xl bg-white/5 animate-pulse" />
                ))}
              </div>
            ) : (
              /* Gallery Grid */
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredImages.map((src, index) => (
                  <motion.div
                    key={index}
                    className="relative aspect-[4/3] overflow-hidden rounded-xl cursor-pointer group"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    onClick={() => {
                      setSelectedImage(src)
                      setCurrentIndex(index)
                    }}
                  >
                    <img
                      src={src || "/placeholder.svg"}
                      alt={`Gallery Image ${index + 1}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      onError={(e) => {
                        // Fallback if image fails to load
                        ;(e.target as HTMLImageElement).src =
                          `https://via.placeholder.com/800x600?text=Image+${index + 1}`
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4">
                        
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {/* Empty State */}
            {!isLoading && filteredImages.length === 0 && (
              <div className="text-center py-16">
                <p className="text-white/70 text-lg">No images found for this category.</p>
              </div>
            )}
          </div>
        </section>

        {/* Image Lightbox */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors"
              onClick={(e) => {
                e.stopPropagation()
                setSelectedImage(null)
              }}
            >
              <X className="h-6 w-6 text-white" />
            </button>

            <div className="relative max-w-5xl max-h-[90vh] flex items-center">
              <button
                className="absolute left-4 bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors"
                onClick={(e) => {
                  e.stopPropagation()
                  handlePrev()
                }}
              >
                <ChevronLeft className="h-6 w-6 text-white" />
              </button>
              <img
                src={selectedImage || "/placeholder.svg"}
                alt="Enlarged gallery image"
                className="max-w-full max-h-[85vh] object-contain rounded-md transform transition-transform duration-500 hover:scale-105"
                onClick={(e) => e.stopPropagation()}
                onError={(e) => {
                  // Fallback if image fails to load
                  ;(e.target as HTMLImageElement).src = "https://via.placeholder.com/800x600?text=Image+Not+Found"
                }}
              />
              <button
                className="absolute right-4 bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors"
                onClick={(e) => {
                  e.stopPropagation()
                  handleNext()
                }}
              >
                <ChevronRight className="h-6 w-6 text-white" />
              </button>
            </div>

            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 px-4 py-2 rounded-full">
              <p className="text-white text-sm">
                {currentIndex + 1} / {filteredImages.length}
              </p>
            </div>
          </div>
        )}
      </main>
    </PageTransition>
  )
}

export default Gallery;

// Remove this unused categories array

