import { AboutSection } from "@/components/AboutSection"
import { IntroSection } from "@/components/IntroSection"
import { MethodologySection } from "@/components/MethodologySection"
import { PricingSection } from "@/components/PriceSection"
import type React from "react"

export default function Home(): React.ReactElement {
  return (
    <main className="min-h-screen">
      <IntroSection />
      <AboutSection />
      <MethodologySection />
      <PricingSection />
    </main>
  )
}
