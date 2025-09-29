import { Camera, Brain, CheckCircle } from "lucide-react"

export function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      icon: Camera,
      title: "Prenez une photo ou décrivez",
      description: "Photographiez l'animal malade ou décrivez les symptômes observés dans l'application.",
      color: "text-primary",
    },
    {
      number: "02",
      icon: Brain,
      title: "L'IA analyse et diagnostique",
      description:
        "Notre intelligence artificielle analyse les données et identifie la maladie probable en quelques secondes.",
      color: "text-secondary",
    },
    {
      number: "03",
      icon: CheckCircle,
      title: "Suivez le plan d'action",
      description: "Recevez un plan de traitement détaillé et contactez un vétérinaire si nécessaire.",
      color: "text-chart-3",
    },
  ]

  return (
    <section id="comment-ca-marche" className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold font-poppins text-balance mb-4">Comment ça marche ?</h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
            En seulement 3 étapes simples, obtenez un diagnostic précis et un plan d'action pour soigner vos animaux.
          </p>
        </div>

        <div className="relative">
          {/* Connection lines */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-border transform -translate-y-1/2" />

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Step card */}
                <div className="bg-card rounded-2xl p-8 border border-border text-center relative z-10 hover:shadow-lg transition-shadow">
                  {/* Step number */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="w-8 h-8 bg-background border-2 border-border rounded-full flex items-center justify-center">
                      <span className="text-sm font-bold text-muted-foreground">{step.number}</span>
                    </div>
                  </div>

                  {/* Icon */}
                  <div
                    className={`w-16 h-16 rounded-2xl bg-background border-2 border-current ${step.color} flex items-center justify-center mx-auto mb-6 mt-4`}
                  >
                    <step.icon className="w-8 h-8" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold font-poppins mb-4">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>

                {/* Arrow for mobile */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center my-6">
                    <div className="w-px h-8 bg-border" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold px-8 py-4 rounded-lg transition-colors">
            Commencer maintenant
          </button>
        </div>
      </div>
    </section>
  )
}
