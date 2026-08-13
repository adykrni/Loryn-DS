import type { Meta, StoryObj } from "@storybook/react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"

const meta: Meta<typeof Carousel> = { title: "UI/Carousel", component: Carousel }
export default meta
type Story = StoryObj<typeof Carousel>

export const Default: Story = {
  render: () => (
    <Carousel className="mx-auto w-full max-w-xs">
      <CarouselContent>
        {[1, 2, 3].map((n) => (
          <CarouselItem key={n}>
            <Card><CardContent className="flex aspect-square items-center justify-center p-6"><span className="text-2xl font-semibold">{n}</span></CardContent></Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious /><CarouselNext />
    </Carousel>
  ),
}
