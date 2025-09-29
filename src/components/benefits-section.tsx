import { TrendingDown, Zap, Shield, DollarSign, Clock, Heart } from "lucide-react"
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
    <section id="avantages" className="py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold font-poppins text-balance mb-4">
            Les avantages pour votre élevage
          </h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
            VetAI transforme la gestion de votre élevage en vous offrant les outils pour protéger vos animaux et
            optimiser votre rentabilité.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-primary"
            >
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold font-poppins mb-2">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{benefit.description}</p>
                    <div className="flex items-baseline space-x-2">
                      <span className="text-2xl font-bold text-primary">{benefit.stat}</span>
                      <span className="text-xs text-muted-foreground">{benefit.statLabel}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Success story */}
        <div className="mt-16 bg-gradient-to-r from-secondary/10 to-primary/10 rounded-2xl p-8 lg:p-12">
          <div className="text-center">
            <h3 className="text-2xl font-bold font-poppins mb-4">Témoignage de réussite</h3>
            <blockquote className="text-lg italic mb-6 max-w-4xl mx-auto">
              "Grâce à VetAI, j'ai détecté une épidémie naissante dans mon troupeau. L'intervention rapide m'a permis de
              sauver 80% de mes animaux et d'éviter une perte de 15 000€. L'application a littéralement sauvé mon
              exploitation."
            </blockquote>
            <div className="flex items-center justify-center space-x-4">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold">KD</span>
              </div>
              <div className="text-left">
                <cite className="font-semibold">Kouadio Diabaté</cite>
                <p className="text-sm text-muted-foreground">Éleveur de bovins, Côte d'Ivoire</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
