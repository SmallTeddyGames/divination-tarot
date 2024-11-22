export const tarotCards = {
  majorArcana: [
    {
      id: 0,
      name: "愚者",
      meaning: "代表新的开始、冒险、自发性和纯真。正位解读：充满可能性的开始，保持好奇心和冒险精神。逆位解读：草率的决定，过于天真。",
    },
    {
      id: 1,
      name: "魔术师",
      meaning: "代表创造力、技能和意志力。正位解读：掌握所需技能，创造性地解决问题。逆位解读：才能未充分发挥，或滥用能力。",
    },
    // Add more cards...
  ],
  minorArcana: {
    wands: [
      {
        id: "wands-1",
        name: "权杖一",
        meaning: "代表新的开始、创意和灵感。正位解读：新的机会，创意迸发。逆位解读：计划延迟，创意受阻。",
      },
      // Add more cards...
    ],
    // Add other suits...
  }
}

export type TarotCard = {
  id: string | number
  name: string
  meaning: string
  isReversed?: boolean
}

