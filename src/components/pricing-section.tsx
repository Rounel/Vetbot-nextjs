import { Check, Star } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function PricingSection() {
  const plans = [
    {
      name: "Gratuit",
      price: "0",
      period: "Toujours gratuit",
      description: "Parfait pour découvrir VetAI",
      features: ["5 diagnostics par mois", "Conseils de base", "Support communautaire", "Accès aux guides préventifs"],
      cta: "Commencer gratuitement",
      popular: false,
    },
    {
      name: "Premium",
      price: "15",
      period: "par mois",
      description: "Pour les éleveurs professionnels",
      features: [
        "Diagnostics illimités",
        "Recommandations avancées",
        "Suivi vétérinaire prioritaire",
        "Alertes personnalisées",
        "Historique complet",
        "Support 24/7",
        "Connexion vétérinaires locaux",
      ],
      cta: "Essayer Premium",
      popular: true,
    },
    {
      name: "Coopérative",
      price: "Sur mesure",
      period: "Contactez-nous",
      description: "Pour les groupements d'éleveurs",
      features: [
        "Tout du plan Premium",
        "Gestion multi-exploitations",
        "Tableau de bord centralisé",
        "Formation personnalisée",
        "API dédiée",
        "Support technique dédié",
      ],
      cta: "Nous contacter",
      popular: false,
    },
  ]

  return (
    <section id="tarifs" className="py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold font-poppins text-balance mb-4">Choisissez votre plan</h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
            Commencez gratuitement et évoluez selon vos besoins. Tous les plans incluent notre garantie de satisfaction.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative ${
                plan.popular ? "border-2 border-primary shadow-lg scale-105" : "border border-border"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                    <Star className="w-4 h-4" />
                    <span>Plus populaire</span>
                  </div>
                </div>
              )}

              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-poppins">{plan.name}</CardTitle>
                <div className="mt-4">
                  {plan.price === "Sur mesure" ? (
                    <div className="text-2xl font-bold">{plan.price}</div>
                  ) : (
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold">{plan.price}€</span>
                      <span className="text-muted-foreground ml-2">/{plan.period}</span>
                    </div>
                  )}
                </div>
                <p className="text-muted-foreground mt-2">{plan.description}</p>
              </CardHeader>

              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full ${
                    plan.popular
                      ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                      : "bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                  }`}
                >
                  {plan.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Money back guarantee */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            💰 Garantie satisfait ou remboursé 30 jours • 🔒 Paiement sécurisé • 📱 Annulation à tout moment
          </p>
        </div>
      </div>
    </section>
  )
}
