const btn = document.querySelector('button')
const h1 = document.querySelector('h1')


btn.addEventListener('click', addJoke)


async function addJoke() {
  const { joke } = await fetchJoke()
  h1.textContent = joke
}


async function fetchJoke() {
  const res = await fetch('https://icanhazdadjoke.com/', {
    headers: {
      Accept: "application/json"
    },
  })
  const joke = await res.json()
  return joke
}
