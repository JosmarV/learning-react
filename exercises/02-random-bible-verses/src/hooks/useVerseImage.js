import { useEffect, useState } from 'react'
import { createClient } from 'pexels'

const client = createClient(
  'KPQQYmC6Gmbg7nC6elb3t0soM6kzJt7kB8ReAUhobilUdtT7Azuuj1Ob'
)

export function useVerseImage({ verse }) {
  const [randomImage, setRandomImage] = useState(null)

  const query = verse.split(' ', 5).join(' ')
  console.log(query)

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await client.photos.search({ query, per_page: 1 })
        if (response && response.photos && response.photos.length > 0) {
          const photo = response.photos[0] // Get the first photo
          const { src } = photo
          setRandomImage(src.medium) // or any other resolution you need
        } else {
          console.error('No image found')
        }
      } catch (error) {
        console.error('Error fetching image:', error)
      }
    }

    fetchImage()
  }, [verse])

  return { randomImage }
}
