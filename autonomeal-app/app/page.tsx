"use client"

import { useState, useEffect, useRef } from "react"
<<<<<<< HEAD
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ChefHat, Brain, Utensils, CheckCircle, Lock, Sparkles, Star, ArrowRight } from "lucide-react"

export default function AutonoMealApp() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const cursorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  useEffect(() => {
    if (cursorRef.current) {
      cursorRef.current.style.left = `${mousePosition.x}px`
      cursorRef.current.style.top = `${mousePosition.y}px`
    }
  }, [mousePosition])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-purple-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-gradient-to-r from-green-300/15 to-blue-300/15 rounded-full blur-3xl animate-bounce-slow"></div>
        <div className="absolute bottom-1/3 left-1/4 w-48 h-48 bg-gradient-to-r from-orange-300/15 to-purple-300/15 rounded-full blur-3xl animate-float"></div>
      </div>

      <div
        ref={cursorRef}
        className="fixed w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full pointer-events-none z-50 transition-all duration-100 ease-out opacity-60 blur-sm"
        style={{ transform: "translate(-50%, -50%)" }}
      />

      {/* Header */}
      <header className="border-b border-white/20 backdrop-blur-sm bg-white/80 relative z-10">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 group hover:scale-105 transition-all duration-300">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                <ChefHat className="w-6 h-6 text-white group-hover:rotate-12 transition-transform duration-300" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                autonoMeal
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Button
                variant="ghost"
                className="text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 hover:scale-105"
              >
                Sign In
              </Button>
              <Button
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                onClick={() => {}}
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-16 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6 group hover:scale-110 transition-all duration-500">
            <div className="relative">
              <ChefHat className="w-16 h-16 text-gray-800 group-hover:rotate-12 transition-transform duration-500" />
              <Sparkles className="w-6 h-6 text-blue-500 absolute -top-1 -right-1 animate-pulse group-hover:animate-spin" />
            </div>
            <h1 className="text-6xl font-bold">
              <span className="text-gray-800 group-hover:text-blue-600 transition-colors duration-500">autono</span>
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Meal</span>
            </h1>
          </div>

          <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-800 to-blue-600 bg-clip-text text-transparent mb-6 hover:scale-105 transition-transform duration-300">
            Every meal, a step toward independence
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed hover:text-gray-800 transition-colors duration-300">
            AI-powered recipe recommendations that adapt to your skill level, available ingredients, and culinary
            preferences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          <Card className="border-0 bg-white/80 backdrop-blur-sm p-8 text-center hover:shadow-2xl transition-all duration-500 hover:scale-110 hover:-translate-y-2 group cursor-pointer">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl group-hover:rotate-12 transition-all duration-500">
              <Brain className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
              AI-Powered
            </h3>
          </Card>

          <Card className="border-0 bg-white/80 backdrop-blur-sm p-8 text-center hover:shadow-2xl transition-all duration-500 hover:scale-110 hover:-translate-y-2 group cursor-pointer">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl group-hover:rotate-12 transition-all duration-500">
              <Utensils className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors duration-300">
              Skill-Adaptive
            </h3>
          </Card>

          <Card className="border-0 bg-white/80 backdrop-blur-sm p-8 text-center hover:shadow-2xl transition-all duration-500 hover:scale-110 hover:-translate-y-2 group cursor-pointer">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl group-hover:rotate-12 transition-all duration-500">
              <CheckCircle className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-green-600 transition-colors duration-300">
              Ingredient-Smart
            </h3>
          </Card>
        </div>

        {/* Recipe Form Section */}
        <div className="max-w-4xl mx-auto">
          <Card className="overflow-hidden shadow-2xl border-0 backdrop-blur-xl bg-white/10 hover:bg-white/20 transition-all duration-700 hover:scale-[1.03] hover:-translate-y-8 group relative animate-float-gentle border border-white/20 hover:border-white/40">
            {/* Floating glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-cyan-500/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700 animate-pulse"></div>

            {/* Floating particles around the card */}
            <div className="absolute -top-4 -left-4 w-3 h-3 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-all duration-500 delay-100"></div>
            <div className="absolute -top-6 right-1/4 w-2 h-2 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-all duration-500 delay-200"></div>
            <div className="absolute -bottom-4 -right-4 w-4 h-4 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-all duration-500 delay-300"></div>
            <div className="absolute top-1/2 -left-6 w-2 h-2 bg-green-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-all duration-500 delay-400"></div>
            <div className="absolute top-1/4 -right-6 w-3 h-3 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-all duration-500 delay-500"></div>

            {/* Enhanced header with floating effect */}
            <div className="bg-gradient-to-r from-blue-600 via-blue-500 to-purple-600 px-8 py-8 relative overflow-hidden group-hover:from-blue-500 group-hover:via-purple-500 group-hover:to-cyan-500 transition-all duration-700">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/50 to-purple-600/50 animate-pulse group-hover:animate-none"></div>

              {/* Floating decorative elements in header */}
              <div className="absolute top-4 right-8 opacity-30 group-hover:opacity-60 transition-opacity duration-500">
                <Sparkles className="w-6 h-6 text-white animate-spin-slow group-hover:animate-pulse" />
              </div>
              <div className="absolute bottom-4 left-8 opacity-20 group-hover:opacity-50 transition-opacity duration-500">
                <Star className="w-4 h-4 text-yellow-300 animate-pulse group-hover:animate-bounce" />
              </div>

              {/* Enhanced title with floating animation */}
              <div className="relative z-10 text-center group-hover:transform group-hover:-translate-y-1 transition-transform duration-500">
                <h1 className="text-4xl font-bold text-white mb-2 group-hover:text-cyan-100 transition-colors duration-500">
                  Get Your Perfect Recipe
                </h1>
                <div className="h-1 w-24 bg-gradient-to-r from-white/50 to-cyan-300/50 rounded-full mx-auto mb-3 group-hover:w-32 group-hover:from-cyan-300 group-hover:to-white transition-all duration-500"></div>
                <p className="text-blue-100 group-hover:text-white transition-colors duration-500">
                  Tell us about your cooking style and we'll create something amazing just for you
                </p>
              </div>
            </div>

            {/* Enhanced form content with floating cards */}
            <CardContent className="p-10 bg-gradient-to-br from-white/5 to-purple-50/10 backdrop-blur-xl relative">
              {/* Floating background elements */}
              <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000 animate-pulse"></div>
              <div className="absolute bottom-10 left-10 w-24 h-24 bg-gradient-to-br from-cyan-400/10 to-green-400/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000 delay-300 animate-pulse"></div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                {/* Left Column - Enhanced floating cards */}
                <div className="space-y-8">
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/30 hover:shadow-2xl hover:bg-white/90 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2 group/card relative overflow-hidden">
                    {/* Card glow effect */}
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-2xl blur opacity-0 group-hover/card:opacity-100 transition-opacity duration-500"></div>

                    {/* Floating icon */}
                    <div className="flex items-center gap-4 mb-4 relative z-10">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg group-hover/card:shadow-xl group-hover/card:scale-110 group-hover/card:rotate-3 transition-all duration-500">
                        <ChefHat className="w-6 h-6 text-white group-hover/card:animate-bounce" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 group-hover/card:text-blue-600 transition-colors duration-300">
                        Cooking Experience
                      </h3>
                    </div>
                    <Textarea
                      placeholder="Tell us about your cooking experience... (e.g., 'I've made pasta, grilled chicken, and basic stir-fries' or 'I just started cooking last week')"
                      className="min-h-[120px] resize-none border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 transition-all duration-300 bg-white/50 backdrop-blur-sm group-hover/card:bg-white/80"
                    />
                    <p className="text-sm text-gray-500 mt-3 group-hover/card:text-gray-700 transition-colors duration-300">
=======
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Separator } from "@/components/ui/separator"
import { ChefHat, Sparkles, Utensils, Brain, ArrowRight, CheckCircle, User, Lock } from "lucide-react"
import { createClient } from "@/lib/supabase/client"

export default function HomePage() {
  const [user, setUser] = useState<any>(null)
  const [formData, setFormData] = useState({
    cookingHistory: "",
    missingIngredients: "",
    preferences: "",
    dietaryRestrictions: "",
  })
  const [isGenerating, setIsGenerating] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const router = useRouter()
  const supabase = createClient()

  useEffect(() => {
    const getUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser()
      setUser(user)
    }
    getUser()
  }, [supabase])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        })
      }
    }

    const container = containerRef.current
    if (container) {
      container.addEventListener("mousemove", handleMouseMove)
      return () => container.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleGenerateRecipes = async () => {
    if (!user) {
      router.push("/auth/login")
      return
    }

    setIsGenerating(true)
    // TODO: Replace with actual backend API call that includes ML skill detection
    setTimeout(() => {
      // This will be replaced with real backend integration
      setIsGenerating(false)
      // Navigate to dashboard or results page when backend is ready
      router.push("/dashboard")
    }, 2000)
  }

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-white dark:bg-gray-900 relative overflow-hidden transition-colors duration-300"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:60px_60px] animate-pulse"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-primary/40 to-secondary/40 rounded-full animate-float opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {isHovering && (
        <div
          className="absolute pointer-events-none z-50 transition-all duration-300 ease-out"
          style={{
            left: mousePosition.x - 150,
            top: mousePosition.y - 150,
            width: 300,
            height: 300,
          }}
        >
          <div className="w-full h-full rounded-full bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 blur-3xl animate-pulse"></div>
        </div>
      )}

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-16 animate-slide-down">
            <div className="flex items-center gap-3 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-all duration-500"></div>
                <ChefHat className="h-10 w-10 text-gray-800 dark:text-white relative z-10 group-hover:scale-110 transition-all duration-300" />
              </div>
              <span className="text-4xl font-black font-montserrat bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
                autonoMeal
              </span>
            </div>
            <div className="flex items-center gap-4">
              {user ? (
                <Button
                  variant="outline"
                  onClick={() => router.push("/dashboard")}
                  className="flex items-center gap-2 hover:shadow-xl hover:scale-105 transition-all duration-300 border-2 hover:border-primary/50"
                >
                  <User className="h-4 w-4" />
                  Dashboard
                </Button>
              ) : (
                <div className="flex items-center gap-3">
                  <Button
                    variant="ghost"
                    onClick={() => router.push("/auth/login")}
                    className="transition-all duration-300 hover:bg-muted/80"
                  >
                    Sign In
                  </Button>
                  <Button
                    onClick={() => router.push("/auth/sign-up")}
                    className="bg-gradient-to-r from-primary via-primary to-secondary hover:from-primary/90 hover:via-primary/90 hover:to-secondary/90 text-primary-foreground transition-all duration-300 hover:shadow-xl hover:scale-110 px-6"
                  >
                    Get Started
                  </Button>
                </div>
              )}
            </div>
          </div>

          <div className="text-center mb-20 animate-fade-in">
            <div className="flex items-center justify-center gap-4 mb-8 group">
              <div className="relative transform group-hover:scale-110 transition-all duration-700">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 rounded-full blur-2xl opacity-30 animate-pulse"></div>
                <ChefHat className="h-16 w-16 text-gray-800 dark:text-white animate-float relative z-10" />
                <div className="absolute -top-2 -right-2 animate-bounce">
                  <Sparkles className="h-8 w-8 text-blue-500" />
                </div>
              </div>
              <span className="text-6xl font-black font-montserrat bg-gradient-to-r from-gray-900 via-blue-600 via-purple-600 to-gray-900 dark:from-white dark:via-blue-400 dark:via-purple-400 dark:to-white bg-clip-text text-transparent animate-gradient">
                autonoMeal
              </span>
            </div>
            <p className="text-3xl font-bold text-gray-900 dark:text-white mb-6 font-montserrat animate-slide-up">
              Every meal, a step toward independence
            </p>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed animate-slide-up-delay">
              AI-powered recipe recommendations that adapt to your skill level, available ingredients, and culinary
              preferences
            </p>
          </div>

          <div
            className="grid md:grid-cols-3 gap-8 mb-20"
            style={{
              transform: `translateX(${Math.min(scrollY * 0.1, 50)}px)`,
              transition: "transform 0.1s ease-out",
            }}
          >
            <Card className="border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-black shadow-xl hover:shadow-2xl transition-all duration-700 hover:scale-110 hover:-translate-y-4 group animate-slide-up relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-transparent to-purple-50 dark:from-blue-900/20 dark:via-transparent dark:to-purple-900/20 opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <CardContent className="p-8 text-center relative z-10">
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-200 to-purple-200 dark:from-blue-500/20 dark:to-purple-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  <Brain className="h-16 w-16 text-blue-600 dark:text-blue-400 mx-auto group-hover:scale-125 transition-all duration-500 relative z-10" />
                </div>
                <h3 className="text-xl font-bold font-montserrat mb-3 text-gray-900 dark:text-white">AI-Powered</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Smart recipe generation based on your unique cooking journey and preferences
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-black shadow-xl hover:shadow-2xl transition-all duration-700 hover:scale-110 hover:-translate-y-4 group animate-slide-up-delay relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-transparent to-blue-50 dark:from-purple-900/20 dark:via-transparent dark:to-blue-900/20 opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <CardContent className="p-8 text-center relative z-10">
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-200 to-blue-200 dark:from-purple-500/20 dark:to-blue-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  <Utensils className="h-16 w-16 text-purple-600 dark:text-purple-400 mx-auto group-hover:scale-125 transition-all duration-500 relative z-10" />
                </div>
                <h3 className="text-xl font-bold font-montserrat mb-3 text-gray-900 dark:text-white">Skill-Adaptive</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Recipes that perfectly match your current cooking experience and comfort level
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-black shadow-xl hover:shadow-2xl transition-all duration-700 hover:scale-110 hover:-translate-y-4 group animate-slide-up-delay-2 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-transparent to-purple-50 dark:from-blue-900/20 dark:via-transparent dark:to-purple-900/20 opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <CardContent className="p-8 text-center relative z-10">
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-200 to-purple-200 dark:from-blue-500/20 dark:to-purple-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  <CheckCircle className="h-16 w-16 text-blue-600 dark:text-blue-400 mx-auto group-hover:scale-125 transition-all duration-500 relative z-10" />
                </div>
                <h3 className="text-xl font-bold font-montserrat mb-3 text-gray-900 dark:text-white">
                  Ingredient-Smart
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Intelligently works around missing ingredients in your kitchen
                </p>
              </CardContent>
            </Card>
          </div>

          <Card
            className="border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-black shadow-2xl hover:shadow-3xl transition-all duration-700 animate-scale-in relative overflow-hidden"
            style={{
              transform: `translateX(${Math.min(scrollY * 0.05, 30)}px)`,
              transition: "transform 0.1s ease-out",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent via-purple-50/30 to-blue-50/30 dark:from-blue-900/10 dark:via-transparent dark:via-purple-900/10 dark:to-blue-900/10"></div>
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500"></div>
            <CardHeader className="text-center pb-10 relative z-10">
              <CardTitle className="text-4xl font-black font-montserrat bg-gradient-to-r from-gray-900 via-blue-600 to-gray-900 dark:from-white dark:via-blue-400 dark:to-white bg-clip-text text-transparent mb-4">
                Get Your Perfect Recipe
              </CardTitle>
              <CardDescription className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Tell us about your cooking style and we'll create something amazing just for you
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8 relative z-10 px-8 pb-10">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <Label
                      htmlFor="cookingHistory"
                      className="text-base font-semibold font-montserrat text-gray-900 dark:text-white"
                    >
                      Cooking Experience
                    </Label>
                    <Textarea
                      id="cookingHistory"
                      placeholder="Tell us about your cooking experience... (e.g., 'I've made pasta, grilled chicken, and basic stir-fries' or 'I just started cooking last week')"
                      value={formData.cookingHistory}
                      onChange={(e) => setFormData({ ...formData, cookingHistory: e.target.value })}
                      className="mt-2 min-h-[100px] resize-none"
                    />
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
>>>>>>> fd99dd0 (added an updated frontend)
                      Share your cooking background to get personalized recipes
                    </p>
                  </div>

<<<<<<< HEAD
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/30 hover:shadow-2xl hover:bg-white/90 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2 group/card relative overflow-hidden">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-2xl blur opacity-0 group-hover/card:opacity-100 transition-opacity duration-500"></div>

                    <div className="flex items-center gap-4 mb-4 relative z-10">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover/card:shadow-xl group-hover/card:scale-110 group-hover/card:rotate-3 transition-all duration-500">
                        <Utensils className="w-6 h-6 text-white group-hover/card:animate-bounce" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 group-hover/card:text-purple-600 transition-colors duration-300">
                        Cuisine Preferences
                      </h3>
                    </div>
                    <Input
                      placeholder="e.g., Italian, Asian, Mediterranean, comfort food..."
                      className="border-gray-200 focus:border-purple-500 focus:ring-4 focus:ring-purple-500/20 transition-all duration-300 bg-white/50 backdrop-blur-sm group-hover/card:bg-white/80 py-4"
=======
                  <div>
                    <Label
                      htmlFor="preferences"
                      className="text-base font-semibold font-montserrat text-gray-900 dark:text-white"
                    >
                      Cuisine Preferences
                    </Label>
                    <Input
                      id="preferences"
                      placeholder="e.g., Italian, Asian, Mediterranean, comfort food..."
                      value={formData.preferences}
                      onChange={(e) => setFormData({ ...formData, preferences: e.target.value })}
                      className="mt-2 h-12"
>>>>>>> fd99dd0 (added an updated frontend)
                    />
                  </div>
                </div>

<<<<<<< HEAD
                {/* Right Column - Enhanced floating cards */}
                <div className="space-y-8">
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/30 hover:shadow-2xl hover:bg-white/90 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2 group/card relative overflow-hidden">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-green-400/20 to-emerald-400/20 rounded-2xl blur opacity-0 group-hover/card:opacity-100 transition-opacity duration-500"></div>

                    <div className="flex items-center gap-4 mb-4 relative z-10">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg group-hover/card:shadow-xl group-hover/card:scale-110 group-hover/card:rotate-3 transition-all duration-500">
                        <CheckCircle className="w-6 h-6 text-white group-hover/card:animate-bounce" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 group-hover/card:text-green-600 transition-colors duration-300">
                        Missing Ingredients
                      </h3>
                    </div>
                    <Textarea
                      placeholder="List ingredients you don't have (e.g., onions, garlic, milk, eggs...)"
                      className="min-h-[120px] resize-none border-gray-200 focus:border-green-500 focus:ring-4 focus:ring-green-500/20 transition-all duration-300 bg-white/50 backdrop-blur-sm group-hover/card:bg-white/80"
                    />
                  </div>

                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/30 hover:shadow-2xl hover:bg-white/90 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2 group/card relative overflow-hidden">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-400/20 to-red-400/20 rounded-2xl blur opacity-0 group-hover/card:opacity-100 transition-opacity duration-500"></div>

                    <div className="flex items-center gap-4 mb-4 relative z-10">
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center shadow-lg group-hover/card:shadow-xl group-hover/card:scale-110 group-hover/card:rotate-3 transition-all duration-500">
                        <Star className="w-6 h-6 text-white group-hover/card:animate-bounce" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 group-hover/card:text-orange-600 transition-colors duration-300">
                        Dietary Restrictions
                      </h3>
                    </div>
                    <Input
                      placeholder="e.g., vegetarian, gluten-free, dairy-free..."
                      className="border-gray-200 focus:border-orange-500 focus:ring-4 focus:ring-orange-500/20 transition-all duration-300 bg-white/50 backdrop-blur-sm group-hover/card:bg-white/80 py-4"
=======
                <div className="space-y-6">
                  <div>
                    <Label
                      htmlFor="missingIngredients"
                      className="text-base font-semibold font-montserrat text-gray-900 dark:text-white"
                    >
                      Missing Ingredients
                    </Label>
                    <Textarea
                      id="missingIngredients"
                      placeholder="List ingredients you don't have (e.g., onions, garlic, milk, eggs...)"
                      value={formData.missingIngredients}
                      onChange={(e) => setFormData({ ...formData, missingIngredients: e.target.value })}
                      className="mt-2 min-h-[80px]"
                    />
                  </div>

                  <div>
                    <Label
                      htmlFor="dietaryRestrictions"
                      className="text-base font-semibold font-montserrat text-gray-900 dark:text-white"
                    >
                      Dietary Restrictions
                    </Label>
                    <Input
                      id="dietaryRestrictions"
                      placeholder="e.g., vegetarian, gluten-free, dairy-free..."
                      value={formData.dietaryRestrictions}
                      onChange={(e) => setFormData({ ...formData, dietaryRestrictions: e.target.value })}
                      className="mt-2 h-12"
>>>>>>> fd99dd0 (added an updated frontend)
                    />
                  </div>
                </div>
              </div>

<<<<<<< HEAD
              {/* Enhanced Submit Button with floating effect */}
              <div className="mt-12 pt-8 border-t border-white/20 relative z-10">
                <Button
                  disabled
                  className="w-full bg-gradient-to-r from-gray-300 to-gray-400 text-gray-500 cursor-not-allowed hover:from-gray-300 hover:to-gray-400 py-6 text-xl font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 relative overflow-hidden group/button border border-white/30"
                  size="lg"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover/button:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/button:translate-x-full transition-transform duration-1000"></div>
                  <Lock className="w-6 h-6 mr-3 group-hover/button:animate-pulse" />
                  Sign In to Generate Recipes
                  <ArrowRight className="w-5 h-5 ml-3 opacity-50 group-hover/button:opacity-100 group-hover/button:translate-x-1 transition-all duration-300" />
                </Button>
=======
              <Separator className="bg-gradient-to-r from-transparent via-blue-300 dark:via-blue-600 to-transparent h-px" />

              <div className="text-center">
                <Button
                  onClick={handleGenerateRecipes}
                  disabled={!formData.cookingHistory.trim() || isGenerating}
                  size="lg"
                  className={`h-16 px-16 text-xl font-bold font-montserrat transition-all duration-700 shadow-2xl relative overflow-hidden group ${
                    user
                      ? "bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 hover:from-blue-700 hover:via-purple-700 hover:to-blue-700 text-white hover:shadow-3xl hover:scale-110"
                      : "bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400 cursor-not-allowed hover:bg-gray-200 dark:hover:bg-gray-700"
                  }`}
                >
                  {user && (
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-blue-500/30 opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                  )}
                  <span className="relative z-10">
                    {isGenerating ? (
                      <>
                        <Sparkles className="mr-3 h-6 w-6 animate-spin" />
                        Analyzing Your Experience...
                      </>
                    ) : user ? (
                      <>
                        Generate My Recipes
                        <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform duration-500" />
                      </>
                    ) : (
                      <>
                        <Lock className="mr-3 h-6 w-6" />
                        Sign In to Generate Recipes
                      </>
                    )}
                  </span>
                </Button>

                {!user && (
                  <p className="text-gray-600 dark:text-gray-300 mt-4 animate-fade-in-delay text-lg">
                    Create an account to unlock AI-powered recipe generation
                  </p>
                )}
>>>>>>> fd99dd0 (added an updated frontend)
              </div>
            </CardContent>
          </Card>
        </div>
<<<<<<< HEAD
      </main>
=======
      </div>
>>>>>>> fd99dd0 (added an updated frontend)
    </div>
  )
}
