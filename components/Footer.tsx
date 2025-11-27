import { Mail, Linkedin, Twitter, Github } from "lucide-react"

export default function FooterSection() {
  const currentYear = new Date().getFullYear()

  const links = {
    product: [
      { label: "Features", href: "#features" },
      { label: "Pricing", href: "#pricing" },
      { label: "Security", href: "#" },
    ],
    company: [
      { label: "About", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Careers", href: "#" },
    ],
    resources: [
      { label: "Documentation", href: "#" },
      { label: "Help Center", href: "#" },
      { label: "Contact", href: "#" },
    ],
  }

  const socialLinks = [
    { icon: Twitter, label: "Twitter", href: "#" },
    { icon: Linkedin, label: "LinkedIn", href: "#" },
    { icon: Github, label: "GitHub", href: "#" },
    { icon: Mail, label: "Email", href: "#" },
  ]

  return (
    <footer className="bg-slate-950 border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-12">
        {/* Main footer content */}
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          {/* Logo section - Left */}
          <div className="flex flex-col gap-2">
            <div className="text-xl font-bold text-white">Streamline</div>
            <p className="text-sm text-muted-foreground">Manage projects at light speed</p>
          </div>

          {/* Links section - Center */}
          <div className="grid gap-8 md:grid-cols-3">
            {/* Product links */}
            <div className="flex flex-col gap-4">
              <h3 className="text-sm font-semibold text-gray-300">Product</h3>
              <ul className="flex flex-col gap-2">
                {links.product.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-accent">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company links */}
            <div className="flex flex-col gap-4">
              <h3 className="text-sm font-semibold text-gray-300">Company</h3>
              <ul className="flex flex-col gap-2">
                {links.company.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-accent">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources links */}
            <div className="flex flex-col gap-4">
              <h3 className="text-sm font-semibold text-gray-300">Resources</h3>
              <ul className="flex flex-col gap-2">
                {links.resources.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-accent">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Social icons - Right */}
          <div className="flex gap-4">
            {socialLinks.map((social) => {
              const Icon = social.icon
              return (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="rounded-lg bg-indigo-600 hover:bg-indigo-700 p-2 text-white transition-all"
                >
                  <Icon size={20} />
                </a>
              )
            })}
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-border" />

        {/* Copyright section */}
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <p className="text-sm text-muted-foreground">© {currentYear} Streamline. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-muted-foreground transition-colors hover:text-accent">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-muted-foreground transition-colors hover:text-accent">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
