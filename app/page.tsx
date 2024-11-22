"use client"

import { useState } from 'react'
import { DivinationSelection } from '@/components/divination-selection'
import { TarotSpread } from '@/components/tarot-spread'
import { GameLogic } from '@/components/game-logic'
import type { TarotCard } from '@/data/tarot-cards'

export default function Home() {
  const [selectedDivination, setSelectedDivination] = useState<{id: string, name: string} | null>(null)
  const [gameState, setGameState] = useState<'selection' | 'spread' | 'interpretation'>('selection')
  const [selectedCards, setSelectedCards] = useState<TarotCard[]>([])

  return (
    <main className="min-h-screen flex flex-col items-center p-4 sm:p-8">
      <h1 className="text-2xl sm:text-4xl font-bold mb-8">塔罗牌占卜</h1>
      {gameState === 'selection' && (
        <DivinationSelection onSelect={(divination) => {
          setSelectedDivination(divination)
          setGameState('spread')
        }} />
      )}
      {gameState === 'spread' && selectedDivination && (
        <TarotSpread 
          divination={selectedDivination}
          onStartInterpretation={(cards) => {
            setSelectedCards(cards)
            setGameState('interpretation')
          }}
        />
      )}
      {gameState === 'interpretation' && selectedDivination && (
        <GameLogic
          selectedDivination={selectedDivination}
          cards={selectedCards}
          onRestart={() => {
            setGameState('selection')
            setSelectedCards([])
            setSelectedDivination(null)
          }}
        />
      )}
    </main>
  )
}

