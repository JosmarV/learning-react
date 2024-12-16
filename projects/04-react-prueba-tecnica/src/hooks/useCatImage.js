import { useEffect, useState } from "react"

const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

export function useCatImage ({ fact }) {
    const [imageUrl, setImageUrl] = useState()

    useEffect(() => {
        if (!fact) return 
        
        const threeFirstWord = fact.split(' ', 3).join(' ')

        fetch(`https://cataas.com/cat/says/${threeFirstWord}?fontSize=50&fontColor=red&json=true`)
            .then(res => {
                if (!res.ok) throw new Error('Error fetching img')
                return res.json()
            })
            .then(response => {
                //console.log(response)
                const { _id } = response
                
                if (_id) {
                    const url = `${CAT_PREFIX_IMAGE_URL}/cat/says/${threeFirstWord}?fontSize=50&fontColor=red`
                    console.log(url)
                    setImageUrl(url)
                }
                else {
                    console.error('ID is undefined')
                }
            })

    }, [fact])

    return { imageUrl }
} //  devuelve url de imagen de gato