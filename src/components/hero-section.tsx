import Image from "next/image"
import Link from "next/link"

export function HeroSection() {
  return (
      <section className="h-[100dvh] w-[100dvw] absolute top-0 left-0 flex justify-center items-center overflow-hidden">
        <div className="h-[100dvh] w-[100dvw] absolute top-0 left-0">
          <div className="relative">
              <Image
                src="/bg2.jpg"
                alt="VetBot - Intelligence artificielle pour éleveurs"
                width={1500}
                height={1000}
                className="w-full h-auto object-cover bg-bottom"
              />
          </div>
        </div>
        <div className="w-full h-full relative mx-auto z-50 flex items-end bg-linear-30 from-black to-50% to-transparent">
          <div className="space-y-8 mb-20 py-10 max-w-[90rem] w-full mx-auto">
            <h1 className=" text-5xl md:text-6xl max-w-4xl font-bold text-accent3 leading-tight">
              VetBot – L'intelligence artificielle au service des <span className="text-primary-500">éleveurs</span>
            </h1>
            <p className="text-xl text-accent3 leading-relaxed mx-auto ">
              Aides et suivi pour maintenir un rendement positif de son élevage
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href={"/login"} className="bg-primary hover:bg-primary-700 text-white px-8 py-1 text-lg font-semibold rounded-lg">
                Commencer maintenant
              </Link>
              <Link
                target="_blank"
                href={"https://youtu.be/t1nw0UuPN9Y"}
                className="border-gray-300 text-gray-700 hover:bg-gray-200 px-8 py-1 border text-lg font-semibold rounded-lg bg-white"
              >
                Voir la démo
              </Link>
            </div>
          </div>
        </div>
      </section>
  )
}
