import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const divinationOptions = [
  { id: 'past-present-future', name: '过去-现在-未来', description: '三张牌阵,分别代表你的过去、现在和未来' },
  { id: 'celtic-cross', name: '凯尔特十字', description: '十张牌阵,全面解读你的处境和未来' },
  { id: 'relationship', name: '关系解读', description: '五张牌阵,专门解读你的人际关系' },
]

export function DivinationSelection({ onSelect }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {divinationOptions.map((option) => (
        <Card key={option.id}>
          <CardHeader>
            <CardTitle>{option.name}</CardTitle>
            <CardDescription>{option.description}</CardDescription>
          </CardHeader>
          <CardFooter>
            <Button onClick={() => onSelect(option)}>选择</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

