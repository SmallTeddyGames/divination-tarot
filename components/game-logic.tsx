import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { TarotCard } from '@/data/tarot-cards'

interface GameLogicProps {
  selectedDivination: {
    name: string
  }
  cards: TarotCard[]
  onRestart: () => void
}

export function GameLogic({ selectedDivination, cards, onRestart }: GameLogicProps) {
  return (
    <div className="w-full max-w-2xl mx-auto px-4">
      <h2 className="text-xl sm:text-2xl font-bold mb-4 text-center">
        {selectedDivination.name} 解读结果
      </h2>
      <div className="space-y-4">
        {cards.map((card, index) => (
          <Card key={card.id}>
            <CardHeader>
              <CardTitle className="text-lg sm:text-xl">
                {`第 ${index + 1} 张牌：${card.name}`}
                {card.isReversed && " (逆位)"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm sm:text-base text-muted-foreground whitespace-pre-line">
                {card.meaning}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
      <Button 
        onClick={onRestart}
        className="w-full max-w-xs mx-auto mt-8 block"
      >
        重新开始
      </Button>
    </div>
  )
}

