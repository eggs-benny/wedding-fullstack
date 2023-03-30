import { useState } from 'react';
import { RsvpQuestions } from './RsvpQuestions';
import { Guest } from '../util/guestApi';

function useFormFields(initialState) {
  const [fields, setValues] = useState(initialState);

  function handleFieldChange(event) {
    const { id, value } = event.target;
    setValues((prevState) => ({
      ...prevState,
      [id]: value
    }));
  }

  return [fields, handleFieldChange];
}

export function GuestDetailsForm() {
  const [fields, handleFieldChange] = useFormFields({
    firstName: '',
    lastName: '',
    email: '',
    rsvp: '-'
  });

  async function handleSubmitDetails(event) {
    event.preventDefault();
    if (
      fields.email === '' ||
      fields.firstName === '' ||
      fields.lastName === '' ||
      !fields.email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/) ||
      !fields.firstName.match(/^[a-z ,.'-]*$/i) ||
      !fields.lastName.match(/^[a-z ,.'-]*$/i) ||
      fields.rsvp === '-'
    )
      return;

    try {
      const results = await Guest.postGuestDetails({
        firstname: fields.firstName,
        lastname: fields.lastName,
        email: fields.email,
        rsvp: fields.rsvp
      });
      const jsonRes = await results;
      return jsonRes;
    } catch (error) {
      console.error(error);
    }
  }
  // RSVPQuestions could be separated into its own component
  // function RsvpQuestions() {
  //   return (
  //     <div className="rsvp-questions">
  //       <h3>Can you join us for our wedding?</h3>
  //       <select id="rsvp" value={fields.rsvp} onChange={handleFieldChange}>
  //         <option value="yes">Yes</option>
  //         <option value="no">No</option>
  //       </select>
  //     </div>
  //   );
  // }

  return (
    <>
      <form className="guest-details" onSubmit={handleSubmitDetails}>
        <h3>Enter your name & email.</h3>
        <input
          placeholder="First Name"
          id="firstName"
          type="text"
          value={fields.firstName}
          onChange={handleFieldChange}
        />
        <input
          placeholder="Last Name"
          id="lastName"
          type="text"
          value={fields.lastName}
          onChange={handleFieldChange}
        />
        <input
          placeholder="Email"
          id="email"
          type="email"
          value={fields.email}
          onChange={handleFieldChange}
        />

        <h3>Can you join us for our wedding?</h3>
        <select id="rsvp" value={fields.rsvp} onChange={handleFieldChange}>
          <option value="-">-</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
<br></br>
        <input id="submit" type="submit" value="submit"></input>
        {/* <input type="reset" value="reset"></input> */}
      </form>
    </>
  );
}
