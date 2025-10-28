 import { Pen, ImageIcon } from "lucide-react"
 import Image from "next/image"

  export function HowItWorksSection() {
  const steps = [
    {
      number: 1,
      title: "Prenez une photo ou décrivez",
      description:
        "Photographiez l'animal malade ou décrivez les symptômes observés dans l'application.",
      side: "left" as const,
      icons: [
        { type: "lucide" as const, Icon: ImageIcon },
        { type: "lucide" as const, Icon: Pen },
      ],
    },
    {
      number: 2,
      title: "L'IA analyse et diagnostique",
      description:
        "Notre intelligence artificielle analyse les données et identifie la maladie probable en quelques secondes.",
      side: "right" as const,
      icons: [
        { type: "image" as const, src: "/thinker.svg", alt: "Thinker", width: 70, height: 70 },
      ],
    },
    {
      number: 3,
      title: "Suivez le plan d'action",
      description:
        "Recevez un plan de traitement détaillé et contactez un vétérinaire si nécessaire.",
      side: "left" as const,
      icons: [
        { type: "image" as const, src: "/planning.svg", alt: "Planning", width: 70, height: 70 },
        { type: "image" as const, src: "/medicine.svg", alt: "medecine", width: 70, height: 70 },
        { type: "image" as const, src: "/house-design.svg", alt: "house-design", width: 70, height: 70 },
      ],
    },
  ]

  return (
    <div className="bg-primary-950 flex items-center justify-center px-6 py-20 relative">
      <div className="absolute top-0 left-0 w-3/4 h-20 bg-[url('/bg-section-lab-1.png')] bg-cover"></div>
      <div className="absolute bottom-0 right-0 w-3/4 h-20 bg-[url('/bg-section-why-h1.png')] bg-cover"></div>
      <div className="max-w-4xl w-full">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-20">How it works?</h1>

        {/* Steps */}
        <div className="relative">
          {/* Vertical dotted line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px border-l-2 border-dotted border-primary/30 -translate-x-1/2 hidden md:block" />
          {steps.map((step, idx) => {
            const isLeft = step.side === "left"
            return (
              <div
                key={step.number}
                className={`relative ${idx < steps.length - 1 ? "mb-24 md:mb-32" : ""}`}
              >
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  {/* Text */}
                  <div
                    className={
                      isLeft
                        ? "text-right order-2 mr-4 md:order-1"
                        : "text-left order-2 ml-4"
                    }
                  >
                    <h2 className="text-xl font-semibold text-white mb-3">{step.title}</h2>
                    <p className="text-gray-400 leading-relaxed">{step.description}</p>
                  </div>

                  {/* Icons */}
                  <div
                    className={
                      isLeft
                        ? "flex justify-center md:justify-start order-1 md:order-2"
                        : "flex justify-center md:justify-end order-1"
                    }
                  >
                    <div className="relative">
                      {/* Blue dot connector */}
                      <div
                        className={
                          isLeft
                            ? "absolute -left-[2.25rem] top-1/2 size-10 md:flex items-center justify-center bg-primary rounded-full -translate-y-1/2 hidden"
                            : "absolute -right-[2.25rem] top-1/2 size-10 md:flex items-center justify-center bg-primary rounded-full -translate-y-1/2 hidden"
                        }
                      >
                        {step.number}
                      </div>

                      {/* Icon container */}
                      <div className={isLeft ? "flex flex-row gap-4 ml-4" : "flex flex-row gap-4 mr-4"}>
                        {step.icons.map((ic, i) => (
                          <div
                            key={i}
                            className="w-20 h-20 bg-primary-200/30 rounded-2xl flex items-center justify-center border border-primary/20"
                          >
                            {ic.type === "lucide" && ic.Icon ? (
                              <ic.Icon className="text-primary-300 size-15" />
                            ) : (
                              <Image src={ic.src} alt={ic.alt} width={ic.width} height={ic.height} />
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
