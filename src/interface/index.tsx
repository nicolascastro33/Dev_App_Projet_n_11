export interface FlatsProps {
  id: string
  title: string
  cover: string
  pictures: string[]
  description: string
  host: {
    name: string
    picture: string
  }
  rating: string
  location: string
  equipments: string[]
  tags: string[]
}

export interface CarouselProps {
  pictures: string[]
}

export interface CardProps {
    title: string
    image: string
    id: string
  }