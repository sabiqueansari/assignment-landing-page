"use client"

import { Check } from "lucide-react"

export default function PricingSection() {
  const plans = [
    {
      name: "Free",
      price: "0",
      description: "Perfect for getting started",
      features: ["Up to 3 projects", "2 team members", "5GB storage", "Basic support", "Community access"],
      highlighted: false,
    },
    {
      name: "Pro",
      price: "29",
      description: "Best for growing teams",
      features: [
        "Unlimited projects",
        "Up to 20 team members",
        "500GB storage",
        "Priority support",
        "Advanced analytics",
        "Custom integrations",
      ],
      highlighted: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large organizations",
      features: [
        "Unlimited everything",
        "Unlimited team members",
        "Unlimited storage",
        "24/7 dedicated support",
        "SSO & advanced security",
        "Custom contracts",
      ],
      highlighted: false,
    },
  ]

  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Choose the perfect plan for your team. Always flexible to scale as you grow.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-lg transition-all duration-300 ${
                plan.highlighted
                  ? "md:scale-105 border-2 border-accent bg-card/50 shadow-2xl shadow-accent/20"
                  : "border border-border bg-card/30"
              }`}
            >
              {/* Recommended badge */}
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-block px-4 py-1 rounded-full text-sm font-semibold bg-accent text-accent-foreground">
                    Recommended
                  </span>
                </div>
              )}

              <div className="p-8">
                {/* Plan name and description */}
                <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mb-6">{plan.description}</p>

                {/* Price */}
                <div className="mb-8">
                  {plan.price === "Custom" ? (
                    <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                  ) : (
                    <>
                      <span className="text-4xl font-bold text-foreground">${plan.price}</span>
                      <span className="text-muted-foreground ml-2">/month</span>
                    </>
                  )}
                </div>

                {/* Subscribe button */}
                <button
                  className={`w-full py-3 px-6 rounded-lg font-semibold mb-8 transition-all duration-200 ${
                    plan.highlighted
                      ? "bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg hover:shadow-xl"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  }`}
                >
                  Subscribe Now
                </button>

                {/* Features list */}
                <div className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer text */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground">All plans include a 14-day free trial. No credit card required.</p>
        </div>
      </div>
    </section>
  )
}
