import { Camera, Brain, CheckCircle, Image, Pen } from "lucide-react"

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
    <div className="min-h-screen bg-primary-950 flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl w-full">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-20">How it works?</h1>

        {/* Steps */}
        <div className="relative">
          {/* Vertical dotted line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px border-l-2 border-dotted border-primary/30 -translate-x-1/2 hidden md:block" />

          {/* Step 1 - Order Your Kit */}
          <div className="relative mb-24 md:mb-32">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Text - Left */}
              <div className="text-right order-2 mr-4 md:order-1">
                <h2 className="text-xl font-semibold text-white mb-3">Order Your Kit</h2>
                <p className="text-gray-400 leading-relaxed">
                  Get your NovaLink dish and router shipped directly to your door — no technician needed.
                </p>
              </div>

              {/* Icon - Right */}
              <div className="flex justify-center md:justify-start order-1 md:order-2">
                <div className="relative">
                  {/* Blue dot connector */}
                  <div className="absolute -left-[2.25rem] top-1/2 size-10 md:flex items-center justify-center bg-primary rounded-full -translate-y-1/2 hidden" >
                    1
                  </div>

                  {/* Icon container */}
                  <div className="flex flex-row gap-4 ml-4">
                    <div className="w-20 h-20 bg-primary-200/30 rounded-2xl flex items-center justify-center border border-primary/20">
                      <Image className="text-primary-300 size-10" />
                    </div>
                    <div className="w-20 h-20 bg-primary-200/30 rounded-2xl flex items-center justify-center border border-primary/20">
                      <Pen className="text-primary-300 size-10" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 2 - Set It Up */}
          <div className="relative mb-24 md:mb-32">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Icon - Left */}
              <div className="flex justify-center md:justify-end order-1">
                <div className="relative">
                  {/* Blue dot connector */}
                  <div className="absolute -right-[2.25rem] top-1/2 size-10 md:flex items-center justify-center bg-primary rounded-full -translate-y-1/2 hidden" >
                    2
                  </div>

                  {/* Icon container */}
                  {/* <div className="w-20 h-20 bg-primary-950/30 rounded-2xl flex items-center justify-center border border-primary/20">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-10 h-10 text-primary"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5.636 5.636a9 9 0 1012.728 0M12 3v9" />
                    </svg>
                  </div> */}
                </div>
              </div>

              {/* Text - Right */}
              <div className="text-left order-2 ml-4">
                <h2 className="text-xl font-semibold text-white mb-3">Set It Up</h2>
                <p className="text-gray-400 leading-relaxed">
                  Plug it in, power it up, and point it at the sky. The smart dish aligns itself automatically.
                </p>
              </div>
            </div>
          </div>

          {/* Step 3 - Connect Instantly */}
          <div className="relative">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Text - Left */}
              <div className="text-right order-2 md:order-1 mr-4">
                <h2 className="text-xl font-semibold text-white mb-3">Connect Instantly</h2>
                <p className="text-gray-400 leading-relaxed">
                  Stream, work, game, and browse with speeds that rival fiber — wherever you are.
                </p>
              </div>

              {/* Icon - Right */}
              <div className="flex justify-center md:justify-start order-1 md:order-2">
                <div className="relative">
                  {/* Blue dot connector */}
                  <div className="absolute -left-[2.25rem] top-1/2 size-10 md:flex items-center justify-center bg-primary rounded-full -translate-y-1/2 hidden"  >
                    3
                  </div>

                  {/* Icon container */}
                  {/* <div className="w-20 h-20 bg-primary-950/30 rounded-2xl flex items-center justify-center border border-primary/20">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-10 h-10 text-primary"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z"
                      />
                    </svg>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
