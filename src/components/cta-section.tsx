import { Button } from "@/components/ui/button"
import { ArrowRight, Download, Smartphone } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-16 lg:py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/10 to-primary/5 animate-gradient" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-poppins text-balance mb-6">
            Protégez votre élevage dès aujourd'hui
          </h2>
          <p className="text-xl text-muted-foreground text-pretty mb-8 max-w-2xl mx-auto">
            Rejoignez les milliers d'éleveurs qui font confiance à VetBot pour la santé de leurs animaux. Commencez
            gratuitement, aucune carte bancaire requise.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold text-lg px-8 py-4 animate-pulse-green"
            >
              <Download className="mr-2 w-5 h-5" />
              Télécharger l'app maintenant
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" className="font-semibold text-lg px-8 py-4 bg-transparent">
              <Smartphone className="mr-2 w-5 h-5" />
              Voir la démo
            </Button>
          </div>

          {/* App store badges */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <div className="flex items-center space-x-4">
              <div className="w-40 h-12 bg-card border border-border rounded-lg flex items-center justify-center">
                <span className="text-sm font-medium">App Store</span>
              </div>
              <div className="w-40 h-12 bg-card border border-border rounded-lg flex items-center justify-center">
                <span className="text-sm font-medium">Google Play</span>
              </div>
            </div>
          </div>

          {/* Trust indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground">Éleveurs actifs</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-secondary">98%</div>
              <div className="text-sm text-muted-foreground">Précision IA</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-chart-3">24/7</div>
              <div className="text-sm text-muted-foreground">Disponibilité</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-chart-4">15+</div>
              <div className="text-sm text-muted-foreground">Pays couverts</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
