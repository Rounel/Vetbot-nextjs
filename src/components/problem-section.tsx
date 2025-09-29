import { AlertTriangle, Clock, TrendingDown, MapPin } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function ProblemSection() {
  const problems = [
    {
      icon: AlertTriangle,
      title: "Maladies imprévues",
      description: "Les épidémies peuvent décimer un troupeau en quelques jours sans diagnostic rapide.",
    },
    {
      icon: Clock,
      title: "Accès limité aux vétérinaires",
      description: "Dans les zones rurales, il peut falloir des heures pour consulter un spécialiste.",
    },
    {
      icon: TrendingDown,
      title: "Pertes économiques",
      description: "Chaque animal perdu représente une perte financière importante pour l'éleveur.",
    },
    {
      icon: MapPin,
      title: "Isolement géographique",
      description: "L'éloignement des centres vétérinaires complique la prise en charge d'urgence.",
    },
  ]

  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center lg:flex-row justify-between mb-16 w-full">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-poppins text-gray-900 text-balance mb-4">
            <span className="text-primary">Les défis quotidiens</span>
            <br/> des éleveurs
          </h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-xl">
            Chaque jour, les éleveurs font face à des situations critiques qui menacent la santé de leurs animaux et la
            viabilité de leur exploitation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {problems.map((problem, index) => (
            <Card key={index} className="border-destructive/20 hover:border-destructive/40 transition-colors">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <problem.icon className="w-6 h-6 text-destructive" />
                </div>
                <h3 className="font-semibold mb-2">{problem.title}</h3>
                <p className="text-sm text-muted-foreground">{problem.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Testimonial */}
        <div className="bg-card rounded-2xl p-8 border border-border max-w-4xl mx-auto">
          <blockquote className="text-lg text-center italic mb-4">
            "J'ai perdu 30% de mon troupeau l'année dernière à cause d'une maladie que je n'ai pas su identifier à
            temps. Si j'avais eu un outil comme VetAI, j'aurais pu sauver mes animaux."
          </blockquote>
          <div className="text-center">
            <cite className="font-semibold">— Amadou K., Éleveur au Mali</cite>
          </div>
        </div>
      </div>
    </section>
  )
}
