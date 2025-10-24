import { AlertTriangle, Clock, TrendingDown, MapPin, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { cn } from "@/lib/utils"

export function ProblemSection() {
  const problems = [
    {
      icon: AlertTriangle,
      title: "Maladies imprévues",
      description: "Les épidémies peuvent décimer un troupeau en quelques jours sans diagnostic rapide.",
      stats: "10+",
      bg: "bg-gray-200",
      illustration: "/conseil.jpg"
    },
    {
      icon: Clock,
      title: "Accès limité aux vétérinaires",
      description: "Dans les zones rurales, il peut falloir des heures pour consulter un spécialiste.",
      stats: "80%",
      bg: "bg-primary-300",
      illustration: "/conseil.jpg"
    },
    {
      icon: TrendingDown,
      title: "Pertes économiques",
      description: "Chaque animal perdu représente une perte financière importante pour l'éleveur.",
      stats: "1455",
      bg: "bg-primary-300",
      illustration: "/conseil.jpg"
    },
    {
      icon: MapPin,
      title: "Isolement géographique",
      description: "L'éloignement des centres vétérinaires complique la prise en charge d'urgence.",
      stats: "100+",
      bg: "bg-gray-200",
      illustration: "/conseil.jpg"
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

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 mb-12">
          {problems.map((problem, index) => (
            <div key={index} className="transition-colors">
              <div className="grid grid-cols-2 h-[300px] gap-6">
                <div className="relative rounded-xl overflow-hidden">
                  <Image src={problem.illustration} alt={problem.title} fill className="object-cover" />
                </div>
                <div className={cn(`rounded-xl overflow-hidden flex flex-col justify-between py-4 px-5`, problem.bg)}>
                  <div className="w-full flex items-center justify-between">
                    <span className="font-semibold text-5xl text-black">{problem.stats}</span>
                    <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                      <problem.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="flex flex-col ">
                    <h3 className="font-semibold text-2xl text-black mb-2">{problem.title}</h3>
                    <p className=" text-gray-700">{problem.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonial */}
        <div className="bg-primary-950 rounded-2xl py-16 px-8 border border-border w-full mx-auto flex items-center">
          <Quote className="w-6 h-6 lg:size-56 fill-primary-400 text-primary-400 rotate-180" />
          <div className="flex-1 px-4">
            <blockquote className="text-lg text-center italic mb-4 lg:text-2xl">
              "J'ai perdu 30% de mon troupeau l'année dernière à cause d'une maladie que je n'ai pas su identifier à
              temps. Si j'avais eu un outil comme VetBot, j'aurais pu sauver mes animaux."
            </blockquote>
            <div className="text-center">
              <cite className="font-semibold lg:text-lg">— Matthieu S., Entrepreneur dans l'élevage en Côte d'Ivoire</cite>
            </div>
          </div>
          <Quote className="w-6 h-6 lg:size-56 fill-primary-400 text-primary-400" />
        </div>
      </div>
    </section>
  )
}
