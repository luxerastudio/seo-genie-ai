"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { 
  Sparkles, 
  ArrowRight, 
  CheckCircle, 
  TrendingUp,
  Settings,
  Lock,
  Globe
} from "lucide-react"

const features = [
  {
    title: "Multi-Language Support",
    description: "Generate content in 50+ languages with native cultural adaptation",
    icon: TrendingUp,
    gradient: "from-blue-600 to-cyan-600"
  },
  {
    title: "Real-time SEO Meter",
    description: "Live SEO scoring with actionable optimization recommendations",
    icon: Settings,
    gradient: "from-green-600 to-emerald-600"
  },
  {
    title: "AES Encryption",
    description: "Military-grade encryption for all API keys and sensitive data",
    icon: Lock,
    gradient: "from-purple-600 to-pink-600"
  },
  {
    title: "Instant Export",
    description: "One-click export to PDF, DOCX, HTML with professional branding",
    icon: TrendingUp,
    gradient: "from-orange-600 to-red-600"
  },
  {
    title: "Advanced Analytics",
    description: "Track performance metrics and optimize content strategy",
    icon: TrendingUp,
    gradient: "from-indigo-600 to-purple-600"
  },
  {
    title: "Team Collaboration",
    description: "Work together seamlessly with your entire team",
    icon: Settings,
    gradient: "from-teal-600 to-blue-600"
  }
]

const pricingPlans = [
  {
    name: "Starter",
    price: "$29",
    description: "Perfect for individuals getting started",
    popular: false,
    color: "border-slate-300",
    features: [
      "100 articles per month",
      "Basic SEO analysis",
      "10 languages",
      "Email support"
    ]
  },
  {
    name: "Pro",
    price: "$79",
    description: "Most popular for growing teams",
    popular: true,
    color: "border-indigo-500",
    features: [
      "Unlimited articles",
      "Advanced SEO analysis",
      "All 50+ languages",
      "Priority support",
      "Export features",
      "API access"
    ]
  },
  {
    name: "Enterprise",
    price: "$199",
    description: "Complete solution for large teams",
    popular: false,
    color: "border-purple-500",
    features: [
      "Everything in Pro",
      "Custom AI models",
      "White-label options",
      "Dedicated support",
      "Advanced analytics",
      "Team collaboration"
    ]
  }
]

export default function Home() {
  const [email, setEmail] = useState("")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="min-h-screen bg-black relative">
      </div>
    )
  }

  return (
    <div id="seo-genie-ultimate-final" className="min-h-screen bg-black text-white relative">
      
      <nav className="glass-card sticky top-0 z-50 border-0">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-600 to-purple-600">
                <Sparkles className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">SEO-Genie AI</span>
            </div>
            <div className="flex items-center space-x-4">
              <Button 
                onClick={() => window.location.href = "/dashboard"}
                className="premium-button"
              >
                Launch App
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <section className="relative py-24 px-6">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-gradient-to-r from-indigo-900/50 to-purple-900/50 border border-indigo-700/50 mb-6">
              <span className="text-sm font-semibold text-indigo-300">Enterprise AI Platform</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Generate Rank-Ready
              <br />
              SEO Content in Seconds!
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Transform your content strategy with AI-powered SEO optimization that delivers 
              <span className="font-semibold text-indigo-400">10x faster</span> results
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="premium-button"
                onClick={() => window.location.href = "/dashboard"}
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-indigo-500 px-8 py-4 text-lg font-bold text-indigo-400 hover:bg-indigo-900 transition-all duration-300"
              >
                <span className="font-bold">Watch Demo</span>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Enterprise-Grade Features
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Built for teams that demand excellence in content creation and SEO optimization
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="glass-card hover:shadow-xl transition-shadow p-8"
            >
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${feature.gradient} mb-4`}>
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-24 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Choose the perfect plan for your team's content creation needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`glass-card text-center ${plan.popular ? 'ring-2 ring-indigo-500' : ''}`}
            >
              <h3 className="text-2xl font-bold text-white mb-2">
                {plan.name}
              </h3>
              <p className="text-gray-300 mb-6">{plan.description}</p>
              <div className="text-4xl font-bold text-white mb-6">
                {plan.price}
                <span className="text-lg font-normal text-gray-400">/month</span>
              </div>
              <Button 
                className={`w-full premium-button mb-6 ${plan.popular ? 'shadow-2xl' : ''}`}
                onClick={() => window.location.href = "/dashboard"}
              >
                {plan.name === "Starter" ? "Get Started" : plan.name === "Pro" ? "Start Pro Trial" : "Contact Sales"}
              </Button>
              <ul className="space-y-3 text-left">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-300">
                    <CheckCircle className="h-4 w-4 text-green-400 mr-3 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-24 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Transform Your Content Strategy?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of teams already using SEO-Genie AI to create rank-ready content at scale
          </p>
          <Button 
            size="lg"
            className="premium-button"
            onClick={() => window.location.href = "/dashboard"}
          >
            Get Started Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </section>

      <footer className="glass-card py-16 px-6 border-t-0">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-lg font-bold text-white mb-4">Product</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">API</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Documentation</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold text-white mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold text-white mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="/privacy" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="/terms" className="text-gray-300 hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Cookie Policy</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">GDPR</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold text-white mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Community</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Status</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Changelog</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center">
            <p className="text-gray-300">
              © 2024 SEO-Genie AI. All rights reserved. Built with ❤️ for content creators worldwide.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
