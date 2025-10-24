import { Camera, Heart, Shield, Home, Users } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

export function FeaturesSection() {
  const features = [
    {
      icon: Camera,
      title: "Diagnostic IA",
      description:
        "Prenez une photo ou décrivez les symptômes. Notre IA identifie la maladie en quelques secondes avec une précision de 98%.",
      color: "text-primary",
      bg: " bg-[url(/bg1.jpg)]",
    },
    {
      icon: Heart,
      title: "Premiers soins & urgences",
      description: "Recevez immédiatement les gestes de premiers secours et les mesures d'urgence à appliquer afin d'éviter la propagation des maladies et maintenir un élevage sain.",
      color: "text-destructive",
      bg: "bg-[url(/conseil.jpg)]",
    },
    {
      icon: Home,
      title: "Enclos intelligents",
      description: "Recommandations pour construire des enclos adaptés selon le type d'animal et le terrain.",
      color: "text-chart-3",
      bg: "bg-[url(/enclos2.jpg)]",
    },
    {
      icon: Users,
      title: "Réseau vétérinaire",
      description: "Connexion directe avec les vétérinaires et pharmacies locales pour un suivi professionnel.",
      color: "text-chart-4",
      bg: "bg-[url(/diagnostic.jpg)]",
    },
  ]

  return (
    <section id="fonctionnalites" className="py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center lg:flex-row justify-between mb-16 w-full">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-poppins text-gray-900 text-balance mb-4">
            <span className="text-primary">Une solution complète</span>
            <br/> pour votre élevage
          </h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-xl">
            VetBot combine intelligence artificielle et expertise vétérinaire pour vous offrir un assistant complet
            disponible 24h/24.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className={cn(`group hover:shadow-lg transition-all duration-300 py-0 overflow-hidden h-[400px] hover:-translate-y-1 bg-cover bg-center bg-`, feature.bg)}>
              <CardContent className=" bg-linear-360 from-black/80 to-90% to-transparent mt-auto py-3">
                <div className="mb-4">
                  {/* <div
                    className={`w-12 h-12 rounded-lg bg-background border-2 border-current ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <feature.icon className="w-6 h-6" />
                  </div> */}
                  <p className="text-4xl font-semibold">{feature.title}</p>
                </div>
                <p className="text-gray-300 max-w-md text-lg">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Feature highlight */}
        <div className="mt-16 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold font-poppins mb-4">Intelligence artificielle de pointe</h3>
              <p className="text-muted-foreground mb-6">
                Notre modèle d'IA a été entraîné sur plus de 100 000 cas vétérinaires et continue d'apprendre grâce aux
                retours des professionnels.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">98%</div>
                  <div className="text-sm text-muted-foreground">Précision</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-secondary">24/7</div>
                  <div className="text-sm text-muted-foreground">Disponibilité</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-64 bg-card rounded-xl border border-border flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                    <Camera className="w-8 h-8 text-primary" />
                  </div>
                  <p className="text-sm text-muted-foreground">Interface de diagnostic IA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
