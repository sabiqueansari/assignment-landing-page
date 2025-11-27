"use client"

import { Star } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "Product Manager",
    quote:
      "ProjectFlow transformed how our team collaborates. We've cut project timelines by 40% and communication has never been clearer.",
    rating: 5,
    avatar: "SC",
  },
  {
    id: 2,
    name: "Marcus Rodriguez",
    role: "Engineering Lead",
    quote:
      "The dashboard is incredibly intuitive. My team was productive within hours, not days. This is a game-changer for remote teams.",
    rating: 5,
    avatar: "MR",
  },
  {
    id: 3,
    name: "Elena Petrov",
    role: "Creative Director",
    quote:
      "Finally, a tool that keeps everyone on the same page. The real-time collaboration features are exactly what we needed.",
    rating: 5,
    avatar: "EP",
  },
]

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="dark py-20 lg:py-32 bg-gradient-to-b from-background to-background/95 overflow-hidden">
      {/* Grid background effect */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4 text-balance">
            Loved by teams everywhere
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See what users are saying about ProjectFlow and how it's transforming their workflow.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="group relative flex flex-col rounded-2xl border border-border/50 bg-card/40 backdrop-blur-sm p-8 hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/20 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-2xl pointer-events-none" />

              {/* Content */}
              <div className="relative flex flex-col h-full">
                {/* Star Rating */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-foreground/90 mb-6 flex-grow leading-relaxed text-balance">
                  {`"${testimonial.quote}"`}
                </p>

                {/* User Info */}
                <div className="flex items-center gap-3 pt-4 border-t border-border/30">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center font-semibold text-primary-foreground text-sm">
                    {testimonial.avatar}
                  </div>
                  <div className="flex flex-col">
                    <p className="font-semibold text-foreground text-sm">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
