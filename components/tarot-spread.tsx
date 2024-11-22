import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { TarotCard } from '@/components/tarot-card'
import { Button } from "@/components/ui/button"
import { tarotCards } from '@/data/tarot-cards'
import type { TarotCard as TarotCardType } from '@/data/tarot-cards'

interface TarotSpreadProps {
  divination: {
    id: string
    name: string
  }
  onStartInterpretation: (cards: TarotCardType[]) => void
}

export function TarotSpread({ divination, onStartInterpretation }: TarotSpreadProps) {
  const [cards, setCards] = useState<TarotCardType[]>([])
  const [selectedCards, setSelectedCards] = useState<TarotCardType[]>([])

  useEffect(() => {
    // Combine all cards
    const allCards = [
      ...tarotCards.majorArcana,
      ...Object.values(tarotCards.minorArcana).flat()
    ]
    
    // Shuffle and select cards
    const shuffled = [...allCards].sort(() => Math.random() - 0.5)
    const selected = shuffled
      .slice(0, divination.id === 'celtic-cross' ? 10 : divination.id === 'relationship' ? 5 : 3)
      .map(card => ({
        ...card,
        isReversed: Math.random() > 0.5
      }))
    
    setCards(selected)
  }, [divination])

  const handleCardFlip = (card: TarotCardType) => {
    if (!selectedCards.find(c => c.id === card.id)) {
      setSelectedCards([...selectedCards, card])
    }
  }

  return (
    <div className="flex flex-col items-center w-full max-w-full overflow-x-hidden">
      <div className="relative w-full min-h-[400px] sm:min-h-[600px] mb-8">
        <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <TarotCard card={card} onFlip={handleCardFlip} />
            </motion.div>
          ))}
        </div>
      </div>
      <Button 
        onClick={() => onStartInterpretation(cards)}
        disabled={selectedCards.length !== cards.length}
        className="w-full max-w-xs"
      >
        开始解析
        {selectedCards.length !== cards.length && 
          ` (还需翻开 ${cards.length - selectedCards.length} 张牌)`
        }
      </Button>
    </div>
  )
}

