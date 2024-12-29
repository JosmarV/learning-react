const VERSE_END_POINT = 'https://bible-api.com/?random=verse'

export const getRandomVerse = () => {
 return fetch(VERSE_END_POINT)
    .then(res => {
      if (!res.ok) throw new Error('Error fetching fact')
      return res.json()
    })
    .then(data => {
        console.log(data)
        const { text, reference } = data
        return { text, reference}
    })
}