"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Globe, Search, LogOut, Dot, MessageSquare, Loader2, History, X, Stethoscope } from "lucide-react"
import { cn, getInitials } from "@/lib/utils"
import { useAuth } from "@/contexts/authContext"
import { Loader } from "./loader"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { logout, MEDIA_API_URL, BASE_API_URL } from "@/services/services"
import { usePathname, useRouter } from "next/navigation"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

// Helper function for API calls
const apiCall = async (endpoint: string, options: RequestInit = {}) => {
  const response = await fetch(`${BASE_API_URL}${endpoint}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}` || '',
      ...options.headers,
    },
  })
  if (!response.ok) {
    throw new Error(`API call failed: ${response.statusText}`)
  }
  return response.json()
}

export default function Navbar() {
  const pathname = usePathname()
  const isAuthPage = pathname?.startsWith('/auth')
  const isAdminPage = pathname?.startsWith('/admin')
  const router = useRouter()
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const { user, loading, setUser } = useAuth()
  const [contacts, setContacts] = useState<any[]>([])
  const [isLoadingContacts, setIsLoadingContacts] = useState(false)
  const [showContacts, setShowContacts] = useState(false)
  const [unreadCount, setUnreadCount] = useState(0)
  const [showHistory, setShowHistory] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { label: "Accueil", href: "#accueil" },
    { label: "Fonctionnalités", href: "#fonctionnalites" },
    { label: "Comment ça marche", href: "#comment-ca-marche" },
    { label: "Avantages", href: "#avantages" },
    { label: "Tarifs", href: "#tarifs" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ]

  // Fetch contacts
  const fetchContacts = async () => {
    try {
      setIsLoadingContacts(true)
      const response = await apiCall('/visitor-contacts/')
      setContacts(response?.results)
      // Count unread contacts (status === 'pending')
      setUnreadCount(response?.results.filter((contact: any) => contact.status === 'pending').length)
    } catch (err) {
      console.error("Erreur lors du chargement des contacts:", err)
    } finally {
      setIsLoadingContacts(false)
    }
  }

  // Handle contact status update
  const handleContactStatus = async (contactId: number, status: 'accept' | 'reject') => {
    try {
      await apiCall(`/visitor-contacts/${contactId}/${status}/`, {
        method: 'POST'
      })
      await fetchContacts() // Refresh contacts after update
    } catch (err) {
      console.error("Erreur lors de la mise à jour du statut du contact:", err)
    }
  }

  // Fetch contacts when user is loaded
  useEffect(() => {
    if (user) {
      fetchContacts()
    }
  }, [user])

  const handleLogout = async () => {
    const res = await logout()
    console.log("from NAVBAR", res)
    if (res.ok) {
      setUser(null)
      if (pathname.includes("provider/me")) {
        router.push("/login")
      }
    }
  }

  console.log("from NAVBAR")
  console.log(!loading && user)
  

  return (
    <>
      {
        !isAuthPage && !isAdminPage && (
          <header className="sticky top-0 z-60 w-full border-b bg-transparent supports-[backdrop-filter]:backdrop-blur supports-[backdrop-filter]:bg-transparent mb-[100dvh]">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex h-16 items-center justify-between">
                {/* Logo */}
                <div className="flex items-center space-x-2">
                  <Link href="/" className="flex items-center space-x-2">
                    <Image src={'/vetbot-logo.png'} alt="vetbot logo" width={145} height={70} className="w-12 h-auto" />
                  </Link>
                </div>
      
                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-8">
                  {navItems.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>
      
                {/* Auth Buttons - Desktop */}
                {
                  loading ? (
                    <Loader />
                  ) : !user ? (
                    <div className="hidden md:flex items-center space-x-4">
                      <Button className="bg-primary hover:bg-primary/90 text-white">Essayer gratuitement</Button>
                    </div>
                  ) : (
                      <div className="hidden md:flex md:items-center md:gap-2">
                        <p>Welcome {user.first_name} {user.last_name}!</p>
                        <DropdownMenu>
                          <DropdownMenuTrigger>
                            <Avatar>
                              <AvatarImage src={MEDIA_API_URL + user.profile_photo} alt="@shadcn" />
                              <AvatarFallback className="bg-purple-700 text-white">
                                {getInitials(`${user.first_name} ${user.last_name}`)}
                              </AvatarFallback>
                            </Avatar>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent>
                            <DropdownMenuLabel>
                              My Account
                              <div className="flex items-center text-xs gap-2 font-light text-neutral-500">
                                <div className="bg-green-500 size-2 rounded-full"/>
                                Available
                              </div>
                            </DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                              <Link href={"/provider/me"}>
                                Profile
                              </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => setShowContacts(true)}>
                              <div className="flex items-center justify-between w-full">
                                <span>Contact Requests</span>
                                {unreadCount > 0 && (
                                  <Badge variant="destructive" className="ml-2">
                                    {unreadCount}
                                  </Badge>
                                )}
                              </div>
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="text-red-600" onClick={() => handleLogout()}>
                              <LogOut />
                              Logout
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                  )
                }
      
                {/* Mobile Menu Button */}
                <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                  {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
              </div>
      
              {/* Mobile Navigation */}
              {isMenuOpen && (
                <div className="md:hidden py-4 border-t">
                  <nav className="flex flex-col space-y-4">
                    {navItems.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.label}
                      </a>
                    ))}
                    <Button className="mt-4 bg-primary hover:bg-primary/90 text-white w-full">
                      Essayer gratuitement
                    </Button>
                  </nav>
                </div>
              )}
            </div>
          </header>
        )
      }


      {/* History Modal */}
      <Dialog open={showHistory} onOpenChange={setShowHistory}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto bg-gray-900 text-white border-gray-700">
          <DialogHeader>
            <DialogTitle className="text-white">Historique</DialogTitle>
          </DialogHeader>
          
          <div className="flex gap-6">
            {/* Left side */}
            <div className="flex-1 space-y-6">
              {/* Search bar */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Rechercher..."
                  className="w-full rounded-lg border border-gray-600 bg-gray-800 py-2 pl-10 pr-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Search className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              </div>

              {/* Actions section */}
              <div>
                <h3 className="text-lg font-semibold mb-3">Actions</h3>
                <div className="space-y-2">
                  <button className="flex items-center gap-3 w-full p-3 rounded-lg hover:bg-gray-800 transition-colors">
                    <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                      <span className="text-sm">👤</span>
                    </div>
                    <span>Se connecter</span>
                  </button>
                </div>
              </div>

              {/* History section */}
              <div>
                <h3 className="text-lg font-semibold mb-3">Historique</h3>
                <div className="flex items-center justify-center h-32 bg-gray-800 rounded-lg border border-gray-700">
                  <p className="text-gray-400 text-center">Connectez-vous pour voir votre historique</p>
                </div>
              </div>
            </div>

            {/* Right side */}
            <div className="w-32">
              <div className="text-right">
                <button className="text-blue-400 hover:text-blue-300 transition-colors">
                  Tout Afficher
                </button>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}

