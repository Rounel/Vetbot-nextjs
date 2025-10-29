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
import { Footer } from "@/components/footer"

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
      <Footer />
    </div>
  )
}
