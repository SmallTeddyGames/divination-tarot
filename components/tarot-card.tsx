import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from "@/components/ui/card"
import type { TarotCard } from '@/data/tarot-cards'

interface TarotCardProps {
  card: TarotCard
  onFlip?: (card: TarotCard) => void
}

export function TarotCard({ card, onFlip }: TarotCardProps) {
  const [isFlipped, setIsFlipped] = useState(false)

  const handleClick = () => {
    setIsFlipped(!isFlipped)
    if (onFlip) {
      onFlip(card)
    }
  }

  return (
    <motion.div
      className="w-[150px] h-[225px] sm:w-[200px] sm:h-[300px] cursor-pointer"
      onClick={handleClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        className="w-full h-full relative"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
      >
        <Card className="absolute w-full h-full backface-hidden bg-primary text-primary-foreground flex items-center justify-center">
          <CardContent className="p-4">
            <p className="text-center font-bold text-sm sm:text-base">塔罗牌</p>
          </CardContent>
        </Card>
        <Card 
          className="absolute w-full h-full backface-hidden bg-secondary text-secondary-foreground flex flex-col items-center justify-center" 
          style={{ transform: 'rotateY(180deg)' }}
        >
          <CardContent className="p-4 flex flex-col items-center gap-2">
            <p className="text-center font-bold text-sm sm:text-base">{card.name}</p>
            {card.isReversed && (
              <p className="text-xs text-muted-foreground">(逆位)</p>
            )}
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  )
}

