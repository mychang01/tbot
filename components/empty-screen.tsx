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
          <h1 className="text-4xl font-bold">
            Discover the Power of AI in Stock Analysis
          </h1>
          <p className="text-xl">
            Get real-time insights and visualizations for smarter investment decisions.
          </p>
          <Button className="mt-4" onClick={() => window.location.href = '/new'}>
            Start Analyzing Now
            <IconArrowRight className="ml-2" />
          </Button>
        </div>
        
        {/* Right side - Original content */}
        <div className="flex-1">
          <h2 className="text-2xl font-semibold mb-4">
            Welcome to StockBot powered by Groq!
          </h2>
          <p className="leading-normal text-lg">
            Open source AI chatbot that uses function calling to render relevant
            TradingView stock market widgets.{' '}
            <span className="text-muted-foreground">
              Built with{' '}
              <ExternalLink href="https://sdk.vercel.ai">
                Vercel AI SDK
              </ExternalLink>
              ,{' '}
              <ExternalLink href="https://tradingview.com">
                TradingView Widgets
              </ExternalLink>
              , and powered by{' '}
              <ExternalLink href="https://groq.com">
                Llama3-70b on Groq
              </ExternalLink>
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}
