import { PartyForm } from "./PartyForm.js"
import { Bookings } from "./Bookings.js"


export const Brain = () => {
    return `
        <h1>Rent A Clown</h1>
        <section class="partyForm">
            ${PartyForm()}
        </section>
        <section class="partyBookings">
            <h2>Event Bookings</h2>
            ${Bookings()}
        </section>
    `
}
