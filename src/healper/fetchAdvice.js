export const getNewAdvice = async () => {
    const response = await fetch("https://api.adviceslip.com/advice",{cache: 'no-store'})
    return await response.json()
  }