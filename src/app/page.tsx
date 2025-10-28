import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Bot,
  Smartphone,
  Clock,
  Stethoscope,
  CheckCircle,
  Star,
  MapPin,
  Mail,
  Phone,
  Facebook,
  Twitter,
  Instagram,
  Heart,
  Bell,
  Megaphone,
  Camera,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/navbar"
import { ProblemSection } from "@/components/problem-section"
import { FeaturesSection } from "@/components/features-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { BenefitsSection } from "@/components/benefits-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { PricingSection } from "@/components/pricing-section"
import { FAQSection } from "@/components/faq-section"
import { CTASection } from "@/components/cta-section"
import { HeroSection } from "@/components/hero-section"
import { CongratsSection } from "@/components/congrats"

export default function VetBotLanding() {
  return (
    <div className="min-h-screen bg-white relative">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <FeaturesSection />
      <CongratsSection />
      <HowItWorksSection />
      <BenefitsSection />
      <TestimonialsSection />
      <PricingSection />
      <FAQSection />
      <CTASection />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-2">
              <div className="flex items-center mb-6">
                <div className="bg-green-500 rounded-lg p-2 mr-3">
                  <Bot className="h-6 w-6 text-white" />
                </div>
                <span className="text-2xl font-bold">VetBot</span>
              </div>
              <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
                Assistant vétérinaire intelligent pour les éleveurs de volailles en Afrique. Diagnostic rapide, conseils
                personnalisés, disponible 24h/24.
              </p>
              <div className="flex space-x-4">
                {[Facebook, Twitter, Instagram].map((Icon, index) => (
                  <div
                    key={index}
                    className="bg-gray-800 p-3 rounded-lg hover:bg-gray-700 cursor-pointer transition-colors"
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-6 text-lg">Liens</h3>
              <ul className="space-y-4 text-gray-400">
                {["Accueil", "Fonctionnalités", "Contact", "À propos", "Blog"].map((item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-white transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-6 text-lg">Contact</h3>
              <div className="space-y-4 text-gray-400">
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-3" />
                  <span>contact@vetbot.ci</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-3" />
                  <span>+225 XX XX XX XX</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-3" />
                  <span>Abidjan, Côte d'Ivoire</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 mb-4 md:mb-0">
                📍 Projet développé dans le cadre du Hackathon Innovation Agricole 2024
              </p>
              <p className="text-gray-400">© 2024 VetBot. Tous droits réservés.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
