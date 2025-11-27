"use client"

import { ArrowRight, Play } from "lucide-react"
import Image from "next/image"

export default function HeroSection() {
  return (
    <section id="home" className="dark min-h-screen bg-gradient-to-b from-background via-background to-background/95 overflow-hidden">
      {/* Grid background effect */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="flex flex-col space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 w-fit px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20">
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-sm font-medium text-accent">Now available for teams</span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground tracking-tight">
                <span className="text-balance">Manage Projects at Light Speed</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-lg">
                Collaborate seamlessly with your team, streamline workflows, and deliver projects faster. Built for
                modern teams that move at the speed of innovation.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4">
              <button className="group inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-indigo-600 hover:bg-indigo-700 text-primary-foreground font-semibold text-base hover:shadow-lg hover:shadow-primary/50 transition-all duration-200 hover:scale-105">
                Get Started
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="group inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-full border border-border bg-background hover:bg-accent/5 text-foreground font-semibold text-base transition-all duration-200">
                <Play className="w-5 h-5 fill-current" />
                View Demo
              </button>
            </div>

            {/* Trust Badge */}
            <div className="flex items-center gap-2 pt-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-accent/20 border-2 border-background flex items-center justify-center text-xs font-semibold text-accent"
                  >
                    +
                  </div>
                ))}
              </div>
              <span className="text-sm text-muted-foreground">Trusted by 500+ teams worldwide</span>
            </div>
          </div>

          {/* Right Column - Dashboard Image */}
          <div className="relative hidden lg:flex items-center justify-center">
            <div className="relative w-full aspect-square max-w-lg">
              {/* Glow background */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-accent/20 rounded-2xl blur-3xl opacity-50" />

              {/* Dashboard placeholder with border */}
              <div className="absolute inset-0 rounded-2xl border border-border/50 bg-background/30 backdrop-blur-sm overflow-hidden">
                <Image
                  src="/streamline-dashboard.png"
                  alt="Streamline Dashboard"
                  fill
                  className="object-cover"
                  priority
                />

                {/* Overlay shine effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none" />
              </div>

              {/* Floating card - top right */}
              <div className="absolute -top-6 -right-6 bg-background border border-border/50 rounded-xl p-3 shadow-lg backdrop-blur-sm">
                <div className="flex items-center gap-2 text-xs font-semibold">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  <span>All systems operational</span>
                </div>
              </div>

              {/* Floating card - bottom left */}
              <div className="absolute -bottom-4 -left-4 bg-background border border-border/50 rounded-xl p-4 shadow-lg backdrop-blur-sm max-w-xs">
                <p className="text-xs text-muted-foreground">
                  ✨ "This tool transformed how we work. Highly recommended."
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Dashboard Preview */}
        <div className="lg:hidden mt-16">
          <div className="relative w-full aspect-video rounded-2xl border border-border/50 bg-background/30 backdrop-blur-sm overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-accent/20 rounded-2xl blur-3xl opacity-50" />
            <Image
              src="/streamline-dashboard.png"
              alt="Streamline Dashboard"
              fill
              className="object-cover relative z-10"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
