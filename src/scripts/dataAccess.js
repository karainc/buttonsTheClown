const applicationState = {
    clowns: [],
    bookings: [],
    completions: []
}

const mainContainer = document.querySelector("#container")

const API = "http://localhost:8088"

export const fetchBookings = () => {
    return fetch(`${API}/bookings`)
        .then(response => response.json())
        .then(
            (partyBookings) => {
                // Store the external state in application state
                applicationState.bookings = partyBookings
            }
        )
}

export const getBookings = () => {
    return applicationState.bookings.map(booking => ({...booking}))
}


export const sendBooking = (userPartyBooking) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userPartyBooking)
    }


    return fetch(`${API}/bookings`, fetchOptions)
        .then(response => response.json())
        .then(() => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        })
}

export const deleteBookings = (id) => {
    return fetch(`${API}/bookings/${id}`, { method: "DELETE" })
        .then(
            () => {
                mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
            }
        )
}

export const getCompletions = (userPartyCompletion) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userPartyCompletion)
    }
}

export const fetchClowns = () => {
    return fetch(`${API}/clowns`)
        .then(response => response.json())
        .then(
            (data) => {
                applicationState.clowns = data
            }
        )
}

export const getClowns = () => {
    return applicationState.clowns.map(clown => ({...clown}))
}

export const saveCompletion = (completion) => {
    const saveOption = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(completion)
        }

        return fetch(`${API}/completions`, saveOption)
        .then(response => response.json())
        .then(() => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        })
}
  
export const fetchCompletions = () => {
    return fetch(`${API}/completions`)
    .then(response => response.json())
    .then(
        (data) => {
            applicationState.completions = data
        }
    )
}
