import { Guest } from '../util/guestApi';
import './GuestPage.css';
import './Guest.css'
import { useState, useEffect } from 'react';

export function GuestPage() {
  const [guests, setGuests] = useState([]);

  useEffect(() => {
    generateGuestList();
  }, []);

  async function generateGuestList() {
    try {
      const guestResults = await Guest.getGuestDetails();
      setGuests(guestResults);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <h1>All guests</h1>
      <div className="all-guests">
        {guests.length > 0 ? (
          guests.map((guest) => {
            let rsvpStatus;
            let className;
            switch (guest.rsvp) {
              case true:
                rsvpStatus = 'attending';
                className = 'green';
                break;
              case false:
                rsvpStatus = 'not attending';
                className = 'red';
                break;
              default:
                rsvpStatus = 'yet to RSVP';
                className = 'black';
            }
            return (
              <GuestComponent
                key={guest.uuid}
                firstName={guest.firstName}
                lastName={guest.lastName}
                email={guest.email}
                rsvp={rsvpStatus}
                className={className}
              />
            );
          })
        ) : (
          <div>
            <p> No guests found in database </p>
          </div>
        )}
      </div>
    </>
  );
}

function GuestComponent({ firstName, lastName, email, rsvp, className }) {
  return (
    <div className="Guest">
      <h3 className={className}>
        <b>
          {firstName} {lastName}
        </b>
      </h3>
      <h4>{email}</h4>
      <h4>{rsvp}</h4>
    </div>
  );
}
