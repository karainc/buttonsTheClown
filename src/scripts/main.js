import { Brain } from "./brain.js"
import { fetchBookings, fetchClowns, fetchCompletions } from "./dataAccess.js"


const mainContainer = document.querySelector("#container")

const render = () => {
    fetchBookings()
        .then(() => fetchClowns())
        .then(() => fetchCompletions())
        .then(
            () => {
                mainContainer.innerHTML = Brain()
            }
        )
}

mainContainer.addEventListener(
    "stateChanged",
    customEvent => {
        render()
    }
)

render()