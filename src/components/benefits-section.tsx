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
    <div className="min-h-screen bg-gray-50 px-6 py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold font-poppins text-balance mb-4">
            Les avantages pour votre élevage
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
              src="/person-in-coral-pink-clothing-holding-laptop-table.jpg"
              alt="Professional with device"
              className="w-full h-full object-cover"
            />
          </div>

          {/* 95% Card - Top Middle */}
          <div className="rounded-3xl bg-gradient-to-br from-blue-200 to-blue-300 p-8 flex flex-col items-center justify-center text-center">
            <div className="text-8xl md:text-9xl font-bold text-white mb-4">95%</div>
            <p className="text-gray-700 text-lg leading-relaxed">
              Gets your Funds Instantly, Delivered faster and seamless
            </p>
          </div>

          {/* Safe and Secure Card - Top Right */}
          <div className="rounded-3xl bg-white p-8 border border-gray-200 md:col-span-2">
            <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl mb-6">
              <Shield className="w-8 h-8 text-blue-500" />
            </div>
            <div className="text-6xl font-bold text-gray-900 mb-2">$100M</div>
            <p className="text-gray-600 mb-6">Fraud & Scam Protection</p>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Safe and Secure</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Your data and funds are always encrypted and secured with today's leading fraud protections.
            </p>
            <button className="flex items-center gap-2 text-gray-900 font-semibold hover:gap-3 transition-all">
              Read more <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* 500K+ Applications Card - Bottom Left */}
          <div className="rounded-3xl bg-white p-8 border border-gray-200 md:col-span-2">
            <h3 className="text-3xl font-bold text-gray-900 mb-2">500K+ Applications Processed</h3>
            <p className="text-gray-600 leading-relaxed">
              Offering phones, text, and email support in over 50+ languages, complemented by automatic notifications.
            </p>
          </div>

          {/* Financial Health Card with Gradient - Bottom Middle */}
          <div className="md:col-span-1 lg:col-span-1 rounded-3xl bg-white p-8 border border-gray-200">
            <h3 className="text-3xl font-bold text-gray-900 mb-3">Maintain financial health</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Maintaining your financial health and keep you hassle-Free wellbeing with our personalised guidelines.
            </p>
            <div className="rounded-2xl bg-gradient-to-br from-blue-300 via-purple-300 to-pink-300 p-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4">
                  <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center mb-2">
                    <div className="w-4 h-4 bg-gray-900 rounded-full" />
                  </div>
                  <div className="font-semibold text-gray-900 text-sm">Reports</div>
                  <div className="text-xs text-gray-600">Turn data into actionable insights.</div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4">
                  <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center mb-2">
                    <div className="w-4 h-4 bg-gray-900 rounded-sm" />
                  </div>
                  <div className="font-semibold text-gray-900 text-sm">Management</div>
                  <div className="text-xs text-gray-600">Oversight & Smart Tools</div>
                </div>
              </div>
            </div>
          </div>

          {/* 45% Card - Bottom Right */}
          <div className="rounded-3xl bg-gradient-to-br from-cyan-100 to-cyan-200 p-8 flex flex-col items-center justify-center text-center">
            <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-pink-300 to-pink-400 rounded-3xl mb-6">
              <CheckCircle2 className="w-10 h-10 text-white" />
            </div>
            <div className="text-8xl md:text-9xl font-bold text-gray-900 mb-4">45%</div>
            <p className="text-gray-700 text-lg leading-relaxed">
              Approval time decreases by upto 45% for the funds delivery.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
