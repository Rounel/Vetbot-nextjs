"use client"

import { useRef, useState } from "react"
import { useRouter } from "next/navigation"
import { motion } from "motion/react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { ChevronRight, ChevronLeft, Upload, Check, Globe, Eye, EyeOff } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { countryCodes } from "@/components/ui/country-codes"
import { registerProvider } from "@/services/services"
import { useAuth } from "@/contexts/authContext"
import Image from "next/image"
import { PasswordStrength } from "@/components/ui/password-strength"
import Link from "next/link"
import { COUNTRIES } from "@/types/countries";
import { toast } from "sonner"

const formSchema = z.object({
  nom: z.string().min(2, { message: "Le nom est requis" }),
  prenom: z.string().min(2, { message: "Le prénom est requis" }),
  email: z.string().email({ message: "Adresse email invalide" }),
  password: z.string().min(8, { message: "Le mot de passe doit contenir au moins 8 caractères" }),
  pays_id: z.number().optional(),
  role: z.enum(["eleveur", "veterinaire"]),
  numerotelephone: z.string().min(6, { message: "Numéro de téléphone invalide" }),
  ville: z.string().min(2, { message: "La ville est requise" }),
  experience: z.string().min(1, { message: "L'expérience est requise" }),
  type_elevage: z.string().min(1, { message: "Le type d'élevage est requis" }),
  quantite: z.string().optional(),
  surface_m2: z.string().optional(),
})

type FormValues = z.infer<typeof formSchema>

export default function ProviderRegistrationForm() {

  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nom: "",
      prenom: "",
      email: "",
      password: "",
      pays_id: 53,
      role: "eleveur",
      numerotelephone: "",
      ville: "",
      experience: "",
      type_elevage: "",
      quantite: "",
      surface_m2: "",
    },
    mode: "onChange",
  })

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true)
    setError(null)
    console.log("Form submitted 0:", data)
    const toSend = data

    try {
      const response = await registerProvider(toSend)
      console.log("Registration response:", response)
      setIsSubmitting(false)

      // Redirect to email confirmation page
      if (response.id) {
        toast("Votre compte a bien été crée, maintenant connectez vous !", {
          description: "",
        })
        router.push(`/login`)
      }
    } catch (err) {
      console.error("Error during registration:", err)
      setError("Une erreur inattendue est survenue. Veuillez réessayer.")
      setIsSubmitting(false)
    }
  }

  const [countrySearch, setCountrySearch] = useState("");

  const elevageOptions = [
    { value: "poulets", label: "Poulets" },
    { value: "canards", label: "Canards" },
    { value: "pintades", label: "Pintades" },
    { value: "autre", label: "Autre" },
  ];

  return (
    <div className="min-h-screen w-full flex flex-col lg:flex-row">
      <section className="flex-1 flex items-center justify-center  relative">
        <div className="w-full absolute top-5 left-5 ">
          <Link href={"/"} className="text-2xl font-bold text-white">
            VetBot
          </Link>
        </div>
        <div className="max-h-[90dvh] overflow-y-auto mx-auto px-4 py-12 w-full">
          <form onSubmit={form.handleSubmit(onSubmit)} className="rounded-xl p-8 flex flex-col items-center gap-4 w-full max-w-xl shadow">
            <h1 className="text-2xl font-bold mb-2 text-primary self-start">Inscription</h1>
            <div className="grid grid-cols-2 gap-2 w-full">
              <Input placeholder="Nom" {...form.register("nom")} className="w-full" />
              <Input placeholder="Prénom" {...form.register("prenom")} className="w-full" />
            </div>
            <Input type="email" placeholder="Email" {...form.register("email")} className="w-full" />
            <Input type="password" placeholder="Mot de passe" {...form.register("password")} className="w-full" />
            <div className="grid grid-cols-2 gap-2 w-full">
              <Select value={form.watch("role")} onValueChange={val => form.setValue("role", val as "eleveur" | "veterinaire") }>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Rôle" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="eleveur">Éleveur</SelectItem>
                  <SelectItem value="veterinaire">Vétérinaire</SelectItem>
                </SelectContent>
              </Select>
              <Input placeholder="Numéro de téléphone" {...form.register("numerotelephone")} className="w-full" />
            </div>
            <div className="grid grid-cols-2 gap-2 w-full">
              <Input placeholder="Ville" {...form.register("ville")} className="w-full" />
                
              <Select value={form.watch("pays_id") || 53} onValueChange={val => form.setValue("pays_id", val)}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Sélectionnez un pays (optionnel)" />
                </SelectTrigger>
                <SelectContent>
                  <div className="px-2 py-1">
                    <input
                      type="text"
                      placeholder="Rechercher..."
                      value={countrySearch}
                      onChange={e => setCountrySearch(e.target.value)}
                      className="w-full px-2 py-1 border rounded mb-2 text-sm"
                    />
                  </div>
                  {COUNTRIES.filter(country =>
                    country.name.toLowerCase().includes(countrySearch.toLowerCase())
                  ).map(country => (
                    <SelectItem key={country.id} value={country.id}>{country.name}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <Select value={form.watch("experience")} onValueChange={val => form.setValue("experience", val)}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Expérience" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="debutant">Débutant</SelectItem>
                <SelectItem value="intermediaire">Intermédiaire</SelectItem>
                <SelectItem value="experimente">Expérimenté</SelectItem>
              </SelectContent>
            </Select>
            <Select value={form.watch("type_elevage")} onValueChange={val => form.setValue("type_elevage", val)}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Type d'élevage" />
              </SelectTrigger>
              <SelectContent>
                {elevageOptions.map(opt => (
                  <SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Input placeholder="Quantité" type="number" {...form.register("quantite")} className="w-full" />
            <Input placeholder="Superficie (m²) du terrain" type="number" {...form.register("surface_m2")} className="w-full" />
            {error && <div className="text-red-500 text-sm">{error}</div>}
            <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded transition" disabled={isSubmitting}>
              {isSubmitting ? "Inscription..." : "S'inscrire"}
            </Button>
          </form>
        </div>
      </section>

      <section className="hidden lg:block flex-1 h-[100dvh] relative">
          <Image 
            src={"/hero.png"}
            alt="illus"
            width={1024}
            height={1000}
            className="h-full w-full object-[revert-layer]"
          />
      </section>
    </div>
  )
}
