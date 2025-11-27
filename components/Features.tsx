"use client"

import { Zap, Brain, Users } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "Real-time Sync",
    description:
      "Instant updates across all devices and team members. Keep everyone in sync without delays or refreshes.",
  },
  {
    icon: Brain,
    title: "AI Analytics",
    description:
      "Automated insights and velocity tracking. Understand team performance with intelligent data analysis.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Comments, mentions, and huddles built-in. Communicate seamlessly without leaving your projects.",
  },
]

export default function FeaturesSection() {
  return (
    <section id="features" className="bg-slate-950 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 text-balance">
            Everything you need to ship faster
          </h2>
          <p className="text-lg text-slate-400">
            Streamline your workflow with powerful features designed for modern teams
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="group bg-slate-900 border border-slate-800 rounded-lg p-8 transition-all duration-300 ease-out hover:border-indigo-500 hover:shadow-lg hover:shadow-indigo-500/20 hover:-translate-y-1"
              >
                {/* Icon */}
                <div className="mb-6">
                  <Icon className="w-8 h-8 text-indigo-600" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>

                {/* Description */}
                <p className="text-slate-400 leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
