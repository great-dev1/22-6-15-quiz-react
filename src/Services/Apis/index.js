export const fetchQuestions = async () => {
  const res = await fetch('https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean')
  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`)
  }
  return await res.json()
}
