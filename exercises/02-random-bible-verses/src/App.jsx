import { useVerseReference } from "./hooks/useVerseReference.js"
import { useVerseImage } from "./hooks/useVerseImage.js"

function App() {
  const { verse, reference, refreshVerse } = useVerseReference()
  const { randomImage } = useVerseImage({ verse })

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
