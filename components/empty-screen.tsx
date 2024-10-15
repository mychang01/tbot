import { UseChatHelpers } from 'ai/react'
import { Button } from '@/components/ui/button'
import { ExternalLink } from '@/components/external-link'
import { IconArrowRight } from '@/components/ui/icons'

export function EmptyScreen() {
  return (
    <div className="mx-auto max-w-5xl px-4">
      <div className="flex flex-col md:flex-row gap-8 border bg-background p-8">
        {/* Left side - Slogan and CTA */}
        <div className="flex-1 flex flex-col justify-center items-start space-y-4">
          <h1 className="text-4xl font-bold" style={{ color: 'rgb(151,14,14)' }}>
            Students Learn the Power of AI in Stock Analysis
          </h1>
          <p className="text-xl">
            Get real-time insights and visualizations for smarter investment decisions.
          </p>
          
        </div>
        
        {/* Right side - Original content */}
        <div className="flex-1">
          <h2 className="text-2xl font-semibold mb-4">
            Welcome to <span style={{ color: 'rgb(151,14,14)' }}>Emma Stock Market</span> StockBot!
          </h2>
          <p className="leading-normal text-lg">
            This chatbot will make it easier for you to check stock prices and market trends.
          </p>
        </div>
      </div>
    </div>
  )
}
