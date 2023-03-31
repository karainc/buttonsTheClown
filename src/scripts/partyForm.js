import { sendBooking } from "./dataAccess.js"

export const PartyForm = () => {
    let html = `
        <div class="field">
            <label class="label" for="partyParentName"><b>Parent Name</b></label>
            <input type="text" name="partyParentName" class="input" />
        </div>
        <p>
        <div class="field">
            <label class="label" for="partyChildName"><b>Child Name</b></label>
            <input type="text" name="partyChildName" class="input" />
        </div>
        <p>
        <div class="field">
            <label class="label" for="partyNumber"><b>Number of Children</b></label>
            <input type="number" name="partyNumber" class="input" />
        </div>
        <p>
        <div class="field">
            <label class="label" for="partyAddress"><b>Event Address</b></label>
            <input type="text" name="partyAddress" class="input" />
        </div>
        <p>
        <div class="field">
            <label class="label" for="partyDate"><b>Event Date</b></label>
            <input type="date" name="partyDate" class="input" />
        </div>
        <p>
        <div class="field">
            <label class="label" for="partyLength"><b>Hours Booking</b></label>
            <input type="number" name="partyLength" class="input" />
        </div>
        <button class="button" id="submitRequest">Submit Request</button>
    `

    return html
}

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "submitRequest") {
        // Get what the user typed into the form fields
        const userParentName = document.querySelector("input[name='partyParentName']").value
        const userChildName = document.querySelector("input[name='partyChildName']").value
        const userNumber = document.querySelector("input[name='partyNumber']").value
        const userAddress = document.querySelector("input[name='partyAddress']").value
        const userDate = document.querySelector("input[name='partyDate']").value
        const userLength = document.querySelector("input[name='partyLength']").value

        // Make an object out of the user input
        const dataToSendToAPI = {
            parentName: userParentName,
            childName: userChildName,
            number: userNumber,
            address: userAddress,
            date: userDate,
            length: userLength
        }

        // Send the data to the API for permanent storage
        sendBooking(dataToSendToAPI)

        mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
    }
})