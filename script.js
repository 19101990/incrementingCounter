const counters = document.querySelectorAll('.counter')

counters.forEach(counter => {
    counter.innerText = '0'

    const updateCounter = () => {
        // the plus changes the type to a number so we can increment it
        const target = +counter.getAttribute('data-target')
        const c = +counter.innerText

        const increment = target / 100

        if(c < target) {
            // Math.ceil() is gonna round the number up
            counter.innerText= `${Math.ceil(c + increment)}`
            setTimeout(updateCounter, 1)
        } else {
            counter.innerText = target
        }
    }

    updateCounter()
})