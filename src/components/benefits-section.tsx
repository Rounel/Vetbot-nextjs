import { TrendingDown, Zap, Shield, DollarSign, Clock, Heart, ArrowRight, CheckCircle2 } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function BenefitsSection() {
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
    <div className="min-h-screen bg-gray-50 py-16 md:py-24">
      <div className="max-w-[90rem] mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold font-poppins text-balance mb-4 text-black">
            <span className="text-primary-500">Les avantages</span> pour votre élevage
          </h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
            VetBot transforme la gestion de votre élevage en vous offrant les outils pour protéger vos animaux et
            optimiser votre rentabilité.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-auto">
          {/* Large Image Card - Top Left */}
          <div className="md:row-span-2 rounded-3xl overflow-hidden bg-gradient-to-br from-red-200 via-red-300 to-red-400 relative">
            <img
              src="/suivi2.jpg"
              alt="Professional with device"
              className="w-full h-full object-center object-cover"
            />
            <div className="bg-white/40 backdrop-blur-sm absolute bottom-0 left-0 p-4 rounded-2xl">
              <p className="text-6xl font-bold text-primary">-70%</p>
              <p className="text-primary mb-5">de pertes</p>
              <h3 className="text-2xl font-bold text-black mb-2">Réduire les pertes de bétail</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Diagnostic précoce pour éviter la propagation des maladies.
              </p>
            </div>
          </div>

          {/* 95% Card - Top Middle */}
          <div className="rounded-3xl bg-gradient-to-br from-primary-800 to-primary-900 p-8 flex flex-col items-center justify-center text-center">
            <div className="text-6xl md:text-7xl font-bold text-white mb-4">{"< 2min"}</div>
            <span>de diagnostic</span>
            <p className="text-gray-300 text-lg leading-relaxed">
              Intervention immédiate grâce aux alertes intelligentes
            </p>
          </div>

          {/* Safe and Secure Card - Top Right */}
          <div className="rounded-3xl bg-white p-8 border border-gray-200 md:col-span-2 bg-[url('/enclos2.jpg')] bg-cover ">
            <div className="bg-white/40 backdrop-blur-sm rounded-xl p-4 flex flex-col">
              {/* <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl mb-6">
                <Shield className="w-8 h-8 text-blue-500" />
              </div> */}
              <div className="text-6xl font-bold text-white mb-2">+40%</div>
              <p className="text-gray-200 mb-6">de productivité</p>
              <h3 className="text-2xl font-bold text-white mb-3">Améliorer les conditions d'élevage</h3>
              <p className="text-gray-200 mb-6 leading-relaxed">
                Conseils personnalisés pour optimiser votre exploitation
              </p>
              {/* <button className="flex items-center gap-2 text-gray-900 font-semibold hover:gap-3 transition-all">
                Read more <ArrowRight className="w-4 h-4" />
              </button> */}
            </div>
          </div>

          {/* 500K+ Applications Card - Bottom Left */}
          <div className="rounded-3xl bg-white p-8 border border-gray-200 md:col-span-2">
            <h3 className="text-3xl font-bold text-gray-900 mb-3">Bien-être animal</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Conseils personnalisés pour optimiser votre exploitation. Soins adaptés pour la santé et le confort de vos animaux.
            </p>
            <div className="rounded-2xl bg-secondary-300 p-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 flex items-center gap-4">
                  <div className="p-2 w-max bg-white rounded-lg flex items-center justify-center">
                    <Shield className="size-10 text-primary" />
                  </div>
                  <div className="flex flex-col">
                    <div className="font-semibold text-gray-900 text-5xl">+40%</div>
                    <div className="text-xs text-gray-600">de productivité</div>
                  </div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 flex items-center gap-4">
                  <div className="p-2 w-max bg-white rounded-lg flex items-center justify-center">
                    <Heart className="size-10 text-primary" />
                  </div>
                  <div className="flex flex-col">
                    <div className="font-semibold text-gray-900 text-5xl">98%</div>
                    <div className="text-xs text-gray-600">de satisfaction</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 45% Card - Bottom Right */}
          <div className="rounded-3xl bg-gradient-to-br from-primary-100 to-primary-200 p-8 flex flex-col items-center justify-center text-center">
            <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-600 rounded-3xl mb-6">
              <CheckCircle2 className="w-10 h-10 text-white" />
            </div>
            <div className="text-8xl md:text-9xl font-bold text-gray-900 mb-4">24/7</div>
            <p className="text-gray-700 text-lg leading-relaxed">
              Assistant toujours accessible, même sans vétérinaire.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
