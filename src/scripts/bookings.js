import { getBookings, deleteBookings, getClowns, sendBooking, saveCompletion } from "./dataAccess.js"

export const Bookings = () => {
    const bookings = getBookings()
    // const sortBooking = booking.sort((a,b) => new Date(a.date) -new Date(b.date))
    const clowns = getClowns()

    let html = `
        <ul>
            ${
                bookings.map((booking) => {
                    return `
                    <select class="clowns" id="clowns">
                        <option value="">Choose</option>
                        ${
                            clowns.map(
                                clown => {
                                    return `<option value="${booking.id}--${clown.id}">${clown.name}</option>`
                                }
                            ).join("")
                        }
                    </select>
                    <li>
                        ${booking.parentName},${booking.childName}
                        ${booking.date}, ${booking.address}, ${booking.length}Hrs.
                        <button class="booking__delete"
                                id="booking--${booking.id}">
                            Deny
                        </button>
                    </li>
                `
                }).join("")
            }
        </ul>
        `
        return html
}

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", click => {
    if (click.target.id.startsWith("booking--")) {
        const [,bookingId] = click.target.id.split("--")
        deleteBookings(parseInt(bookingId))
    }
})

mainContainer.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "clowns") {
            const [bookingId, clownId] = event.target.value.split("--")

            /*
                This object should have 3 properties
                   1. bookingId
                   2. clownId
                   3. date_created
            */
            const completion = {
                bookingId: bookingId,
                clownId: clownId,
                date_created: new Date()
            };

            /*
                Invoke the function that performs the POST request
                to the `completions` resource for your API. Send the
                completion object as a parameter.
             */
            saveCompletion(completion)
            
        }
    }
)
