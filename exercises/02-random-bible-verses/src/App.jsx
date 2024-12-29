import { useEffect, useState } from "react"
import { useVerseReference } from "./hooks/useVerseReference.js"

const IMAGE_END_POINT = 'https://picsum.photos/410'

function App() {
  const {verse, reference, refreshVerse} = useVerseReference()
  const [randomImage, setRandomImage] = useState()

  useEffect(() => {
    setRandomImage(IMAGE_END_POINT)
  }, [verse])

  const handleClick = () => {
    refreshVerse()
  }

  return (
    <main>
      <h1>Versos biblicos</h1>
      <button onClick={handleClick}>Cambiar versiculo</button>
      {verse && <p>{verse}</p>}
      <p>{reference}</p>
      <img src={randomImage} alt="image random" />
    </main>
  )
}

export default App
