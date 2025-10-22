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

export default function VetBotLanding() {
  return (
    <div className="min-h-screen bg-white relative">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <FeaturesSection />
      <HowItWorksSection />
      <BenefitsSection />
      <TestimonialsSection />
      <PricingSection />
      <FAQSection />
      <CTASection />

      {/* Main Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Votre assistant vétérinaire intelligent</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              VetBot vous accompagne dans le diagnostic, les conseils et le suivi de vos volailles grâce à
              l'intelligence artificielle
            </p>
          </div>

          <div className="space-y-16">
            {/* Diagnostic Section */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative">
                  <img
                    src="/diagnostic.jpg"
                    alt="Diagnostic animalier pour votre bétail"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-12 flex flex-col justify-center">
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                      <Heart className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-800 mb-4">Diagnostic</h3>
                    <p className="text-lg text-gray-600 mb-2 font-semibold">Diagnostic animalier pour votre bétail</p>
                    <p className="text-gray-600 leading-relaxed mb-8">
                      Posez vos questions sur la santé de vos animaux et obtenez des conseils vétérinaires instantanés.
                    </p>
                  </div>
                  <Button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold w-fit">
                    Diagnostiquer
                  </Button>
                </div>
              </div>
            </div>

            {/* Conseils Section */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="p-12 flex flex-col justify-center order-2 lg:order-1">
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                      <Megaphone className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-800 mb-4">Conseils</h3>
                    <p className="text-lg text-gray-600 mb-2 font-semibold">Conseils animalier pour votre bétail</p>
                    <p className="text-gray-600 leading-relaxed mb-8">
                      Posez vos questions sur la santé de vos animaux et obtenez des conseils vétérinaires instantanés.
                    </p>
                  </div>
                  <Button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold w-fit">
                    Demander Conseils
                  </Button>
                </div>
                <div className="relative order-1 lg:order-2">
                  <img
                    src="/conseil.jpg"
                    alt="Conseils animalier pour votre bétail"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Suivi Section */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative">
                  <img
                    src="/suivi2.jpg"
                    alt="Suivi et notifications pour votre activité"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-12 flex flex-col justify-center">
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                      <Bell className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-800 mb-4">Suivi</h3>
                    <p className="text-lg text-gray-600 mb-2 font-semibold">
                      Faites vous notifier les actions importantes à mener pour la survie de votre activité
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-8">
                      Enregistrez vos actions pour vous les faire rappeler par un système de notifications ou d'alertes.
                    </p>
                  </div>
                  <Button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold w-fit">
                    Créer des rappels
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Comment ça marche ?</h2>
            <p className="text-xl text-gray-600">En 4 étapes simples</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                icon: Smartphone,
                title: "Lancez VetBot",
                description: "Depuis votre téléphone",
                color: "bg-blue-500",
              },
              {
                step: "02",
                icon: Camera,
                title: "Décrivez le problème",
                description: "Texte, image ou vocal",
                color: "bg-green-500",
              },
              {
                step: "03",
                icon: Bot,
                title: "VetBot analyse",
                description: "Questions et réponses personnalisées",
                color: "bg-purple-500",
              },
              {
                step: "04",
                icon: Stethoscope,
                title: "Recevez le diagnostic",
                description: "+ suivi vétérinaire",
                color: "bg-orange-500",
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <Card className="bg-white border border-gray-200 hover:shadow-lg transition-all duration-300 p-8">
                  <CardContent className="pt-6">
                    <div className="relative mb-6">
                      <div className={`${item.color} rounded-full w-16 h-16 flex items-center justify-center mx-auto`}>
                        <item.icon className="h-8 w-8 text-white" />
                      </div>
                      <Badge className="absolute -top-2 -right-2 bg-gray-800 text-white text-xs px-2 py-1">
                        {item.step}
                      </Badge>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Prêt à améliorer la santé de vos volailles ?</h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Rejoignez les éleveurs qui font confiance à VetBot pour des diagnostics rapides et des conseils
            personnalisés
          </p>
          <Button className="bg-white text-green-600 hover:bg-gray-100 px-12 py-4 text-xl font-semibold rounded-lg">
            Lancer VetBot gratuitement
          </Button>
        </div>
      </section>

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
