export function GuestComponent({ firstName, lastName, email, rsvp }) {
  return (
    <>
    <h3>
    Guest: {firstName} {lastName} | Email: {email} | RSVP status: {rsvp}
    </h3>
    </>
  )
}
