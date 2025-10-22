"use client"

import { Button } from "@/components/ui/button"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "L'IA remplace-t-elle le vétérinaire ?",
      answer:
        "Non, VetBot est un outil d'aide au diagnostic qui complète l'expertise vétérinaire. Pour les cas graves ou complexes, nous recommandons toujours de consulter un vétérinaire professionnel. L'application vous met d'ailleurs en relation avec des vétérinaires locaux.",
    },
    {
      question: "Comment fonctionne le diagnostic par photo ?",
      answer:
        "Notre IA analyse les images en utilisant des algorithmes de vision par ordinateur entraînés sur des milliers de cas vétérinaires. Elle identifie les symptômes visuels, les compare à sa base de données et propose un diagnostic avec un niveau de confiance. Plus la photo est claire et bien cadrée, plus le diagnostic est précis.",
    },
    {
      question: "Est-ce que ça marche hors connexion ?",
      answer:
        "VetBot nécessite une connexion internet pour le diagnostic IA en temps réel. Cependant, les guides de premiers secours et les conseils de prévention de base sont disponibles hors ligne une fois téléchargés. Nous travaillons sur une version hors ligne pour les zones à faible connectivité.",
    },
    {
      question: "Quels animaux sont pris en charge ?",
      answer:
        "VetBot prend en charge les principaux animaux d'élevage : bovins, ovins, caprins, porcins, volailles, et équins. Notre base de données couvre plus de 200 maladies communes dans ces espèces. Nous ajoutons régulièrement de nouvelles espèces selon les demandes des utilisateurs.",
    },
    {
      question: "Mes données sont-elles sécurisées ?",
      answer:
        "Absolument. Toutes vos données sont chiffrées et stockées de manière sécurisée. Nous respectons les réglementations sur la protection des données et ne partageons jamais vos informations personnelles. Vous pouvez supprimer votre compte et toutes vos données à tout moment.",
    },
    {
      question: "Comment puis-je contacter un vétérinaire via l'app ?",
      answer:
        "VetBot intègre un annuaire de vétérinaires et pharmacies vétérinaires locales. Après un diagnostic, vous pouvez directement appeler ou envoyer un message aux professionnels proches de vous. Certains vétérinaires partenaires offrent des consultations à distance.",
    },
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold font-poppins text-balance mb-4">Questions fréquentes</h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
            Trouvez rapidement les réponses aux questions les plus courantes sur VetBot et son fonctionnement.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <Card key={index} className="overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left p-6 hover:bg-muted/50 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold font-poppins pr-4">{faq.question}</h3>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                  )}
                </div>
              </button>

              {openIndex === index && (
                <CardContent className="px-6 pb-6 pt-0">
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </CardContent>
              )}
            </Card>
          ))}
        </div>

        {/* Contact support */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Vous ne trouvez pas la réponse à votre question ?</p>
          <Button variant="outline">Contacter le support</Button>
        </div>
      </div>
    </section>
  )
}
