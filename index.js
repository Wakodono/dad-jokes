const jokes = [
    'Did you hear they arrested the devil? Yeah, they got him on possesion',
    'What did one DNA molecule say to the other? Do these genes make me look fat?',
    'What do you call a hippies wife? Mississippi',
    'Just got my brand new fake legs off of Amazon'
]

const generateRandomJoke = () => {
    const randomIndex = Math.floor(Math.random() * jokes.length)
    return jokes[randomIndex]
}

const button = document.getElementById('random-joke-button')

button.addEventListener('click', () => {
    const joke = generateRandomJoke()

    document.getElementById('joke-display-section').innerHTML = joke
})