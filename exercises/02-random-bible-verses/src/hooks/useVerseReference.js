import { useEffect, useState } from "react"
import { getRandomVerse } from "../services/verseReference.js"

export function useVerseReference () {
    const [verse, setVerse] = useState('')
    const [reference, setReference] = useState('')


    const refreshVerse = () => {
      getRandomVerse()
      .then(({ text, reference }) => {
        setVerse(text)
        setReference(reference)
      })
      .catch(error => {
        console.log('Error fetching verse: ', error)
      })
    }

    useEffect(refreshVerse, [])

    return { verse, reference, refreshVerse }
  }