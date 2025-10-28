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
    <section id="faq" className="py-16 lg:py-24 bg-secondary/10 bg-[url('/bg-form-contact-h3.png')] bg-cover">
      <div className="w-full max-w-[90rem] grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10mx-auto px-4 sm:px-0 mx-auto">
        <div className="flex flex-col justify-between">
          <div className="">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4">Questions fréquentes</h2>
            <p className="text-xl text-pretty max-w-xl text-gray-700">
              Trouvez rapidement les réponses aux questions les plus courantes sur VetBot et son fonctionnement.
            </p>
          </div>

          {/* Contact support */}
          <div className="p-6 w-max rounded-2xl bg-gradient-to-br from-primary-100 via-primary-300 to-primary-100">
            <p className="text-black text-3xl font-semibold mb-4">Vous avez d'autres questions ?</p>
            <Button className="bg-primary hover:bg-primary-700 text-base text-white">Contactez le support</Button>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          {faqs.map((faq, index) => (
            <Card key={index} className="overflow-hidden py-0 bg-black/10">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left p-6 hover:bg-muted/20 transition-colors"
              >
                <div className="flex items-center justify-between text-primary-950">
                  <h3 className="font-semibold pr-4">{faq.question}</h3>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                  )}
                </div>
              </button>

              {openIndex === index && (
                <CardContent className="px-6 pb-6 pt-0">
                  <p className="text-primary-900 leading-relaxed">{faq.answer}</p>
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
