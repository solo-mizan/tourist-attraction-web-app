'use client'

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import burj from "../../public/burj-khalifa-1.jpg"
import helsinki from "../../public/helsinki-1.jpg"
import kashmir from "../../public/kashmir-1.jpg"
import saudi from "../../public/saudia-arabia-1.jpg"
import statue from "../../public/statue-of-liberty-1.jpg"

const picArray = [burj, helsinki, kashmir, saudi, statue];

export function CarouselPlugin() {
    const plugin = React.useRef(
        Autoplay({ delay: 2500, stopOnInteraction: true })
    )

    return (
        <div className="flex justify-center">
            <Carousel
                plugins={[plugin.current]}
                className="w-full max-w-xs"
            // onMouseEnter={plugin.current.stop}
            // onMouseLeave={plugin.current.reset}
            >
                <CarouselContent>
                    {Array.from({ length: 5 }).map((_, index) => (
                        <CarouselItem key={index}>
                            <div className="p-1">
                                <Card>
                                    <CardContent className="flex aspect-square items-center justify-center p-6">
                                        <img src={picArray[index].src} alt={`carousel-item-${index}`} className="object-cover w-full h-full" />
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    )
}
