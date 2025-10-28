"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      name: "Aminata Traoré",
      role: "Éleveuse de chèvres, Mali",
      content:
        "VetBot m'a aidée à identifier une maladie rare chez mes chèvres. Sans cette application, j'aurais perdu tout mon troupeau.",
      rating: 5,
      avatar: "AT",
    },
    {
      name: "Dr. Jean-Baptiste Kone",
      role: "Vétérinaire, Burkina Faso",
      content:
        "En tant que vétérinaire, je recommande VetBot à tous mes clients éleveurs. C'est un outil précieux pour le diagnostic précoce.",
      rating: 5,
      avatar: "JK",
    },
    {
      name: "Moussa Diallo",
      role: "Éleveur de bovins, Sénégal",
      content:
        "L'application est simple à utiliser et très précise. Elle m'a fait économiser des milliers d'euros en évitant les pertes.",
      rating: 5,
      avatar: "MD",
    },
    {
      name: "Fatou Sow",
      role: "Éleveuse de volailles, Guinée",
      content:
        "Grâce aux conseils de prévention de VetBot, mes poules sont en meilleure santé et ma production a augmenté de 30%.",
      rating: 5,
      avatar: "FS",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [testimonials.length])

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-16 lg:py-24 bg-primary/20 bg-[url('/bg-form-contact-h3.png')] bg-cover">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-0 grid grid-cols-1 lg:grid-cols-2 lg:gap-10">
        <div className="flex flex-col justify-between">
          <h2 className="text-3xl lg:text-5xl sm:text-4xl font-bold font-poppins text-balance mb-4 text-primary-950">
            Ce que disent <br/>
            <span className="text-secondary">nos utilisateurs</span>
          </h2>
          <p className="text-xl text-primary-900/80 text-pretty max-w-lg">
            Découvrez comment VetBot transforme la vie des éleveurs et des vétérinaires à travers l'Afrique de l'Ouest.
          </p>
        </div>

        <div className="relative">
          {/* Testimonial slider */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <Card className="border-2 border-primary/20 bg-primary-950">
                    <CardContent className="p-8 text-center">
                      {/* Stars */}
                      <div className="flex justify-center space-x-1 mb-6">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                        ))}
                      </div>

                      {/* Content */}
                      <blockquote className="text-lg italic mb-6">"{testimonial.content}"</blockquote>

                      {/* Author */}
                      <div className="flex items-center justify-center space-x-4">
                        <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                          <span className="text-primary-foreground font-bold text-sm">{testimonial.avatar}</span>
                        </div>
                        <div className="text-left">
                          <cite className="font-semibold">{testimonial.name}</cite>
                          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center space-x-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="w-10 h-10 bg-secondary-600 border border-border rounded-full flex items-center justify-center hover:bg-muted transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex ? "bg-primary" : "bg-muted"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-10 h-10 bg-secondary-600 border border-border rounded-full flex items-center justify-center hover:bg-muted transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
