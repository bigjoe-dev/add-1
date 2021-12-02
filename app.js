let store = {
    numbers: [],
}

// Adding markup to page
const root = document.getElementById('root')

const updateStore = (oldState, newState) => {
    oldState = Object.assign(oldState, newState)
    render(root, store)
}

const render = async (root, state) => {
    root.innerHTML = App(state)
}

// Template for content
const App = (state) => {
    return `
        <h1>Welcome to Add-1</h1>
        <main>
            ${Cards(state)}
        </main>
        
    `
}

// Components
const Cards = (state) => {
    const { numbers } = state
    return numbers.reduce((p, c) => p += `<p>${ c }</p>`, '')
}

window.addEventListener('load', () => {
    getNumbers(4, [], store)
})

// Functions
const getNumbers = (num, prevNums, state) => {
    if (num != 0) {
        const numbers = prevNums.concat(randomFourDigit())
        return getNumbers(num - 1, numbers, state)
    }
    else {
        return updateStore(state, { numbers: prevNums })
    }
}

const randomFourDigit = () => Math.floor(1000 + Math.random() * 9000);