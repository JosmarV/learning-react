const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'

export const getRandomFact = () => {
  return fetch(CAT_ENDPOINT_RANDOM_FACT)
    .then(res => {
      if (!res.ok) throw new Error('Error fetching fact')
      return res.json()
    })
    .then(data => {
      const { fact } = data
      return fact
    })
}
