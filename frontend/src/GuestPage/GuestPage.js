import { Guest } from "../util/guestApi";
import { useState, useEffect } from 'react'
// import { GuestComponent } from './Guest'

export function GuestPage() {
  const [guests, setGuests] = useState([])

  useEffect(() => {
    generateGuestList()
  }, [])

  async function generateGuestList() {
    try {
      const guestResults = await Guest.getGuestDetails()
      setGuests(guestResults)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      <h1>All guests</h1>
      <div className="all-guests">
        {guests.length > 0 ? (
          guests.map((guest) => {
            let rsvpStatus;
            switch (guest.rsvp) {
              case true:
                rsvpStatus = "attending";
                break;
              case false:
                rsvpStatus = "not attending";
                break;
              default:
                rsvpStatus = "yet to RSVP";
            }
             return (
              <GuestComponent
              key={guest.uuid}
              firstName={guest.firstName}
              lastName={guest.lastName}
              email={guest.email}
              rsvp={rsvpStatus}
              />
            )
          })
          ): (
            <div>
              <p> No guests found in database </p>
              </div>
          )}
          </div>
          </>
  )
}

function GuestComponent({ firstName, lastName, email, rsvp }) {
  return (
    <>
    <h3>
    Guest: {firstName} {lastName} | Email: {email} | RSVP status: {rsvp}
    </h3>
    </>
  )
}