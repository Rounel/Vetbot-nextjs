import { TrendingDown, Zap, Shield, DollarSign, Clock, Heart } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export function CongratsSection() {
  const benefits = [
    {
      icon: TrendingDown,
      title: "Réduire les pertes de bétail",
      description: "Diagnostic précoce pour éviter la propagation des maladies",
      stat: "-70%",
      statLabel: "de pertes",
    },
    {
      icon: Zap,
      title: "Réaction rapide aux urgences",
      description: "Intervention immédiate grâce aux alertes intelligentes",
      stat: "< 2min",
      statLabel: "de diagnostic",
    },
    {
      icon: Shield,
      title: "Améliorer les conditions d'élevage",
      description: "Conseils personnalisés pour optimiser votre exploitation",
      stat: "+40%",
      statLabel: "de productivité",
    },
    {
      icon: DollarSign,
      title: "Sécurité financière",
      description: "Protection de vos investissements et revenus",
      stat: "€2000+",
      statLabel: "économisés/an",
    },
    {
      icon: Clock,
      title: "Disponible 24h/24",
      description: "Assistant toujours accessible, même sans vétérinaire",
      stat: "24/7",
      statLabel: "disponibilité",
    },
    {
      icon: Heart,
      title: "Bien-être animal",
      description: "Soins adaptés pour la santé et le confort de vos animaux",
      stat: "98%",
      statLabel: "satisfaction",
    },
  ]

  return (
    <section id="avantages" className="py-16 lg:py-24">
      <div className="container flex flex-col md:flex-row justify-between items-end mx-auto px-4 sm:px-6 lg:px-8 bg-[url('/sara-bg.png')] bg-cover bg-center rounded-lg shadow-lg p-8">
        <div className="">
          <Image
            src="/sara-logo.png"
            alt="SARA 2025 Award"
            width={500}
            height={800}
            className=""
          />
        </div>
        {/* <div className="w-1 h-full bg-white"></div> */}
        <div className="mb-6">
          <h2 className="text-3xl lg:text-5xl sm:text-4xl text-white font-bold text-balance">
            Applaudi au Salon International de l'Agriculture et des Ressources Animales 2025
          </h2>
        </div>
      </div>
    </section>
  )
}
