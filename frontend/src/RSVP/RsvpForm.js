import {useState} from 'react'

function useFormFields(initialState) {
  const [fields, setValues] = useState(initialState);

  return [
    fields,
    function(event) {
      const {id, value} = event.target;
      setValues(prevState => ({
        ...prevState, [id]: value
      }));
    }
  ];
}

export function RsvpForm() {
  const [fields, handleFieldChange] = useFormFields({
    firstName: '',
    lastName: '',
    email: ''
  })

  async function handleSubmit(event) {
    event.preventDefault();
    // enter submit logic
  }

  return (
    <>
      <form class="enter-password" onSubmit={handleSubmit}>
        <h2>Enter password to unlock guest details:</h2>
        <input
          placeholder="First Name"
          id="firstName"
          type="text"
          name='fname'
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
        <input
          role="submit-button"
          id="submit"
          type="submit"
          value="submit"
        ></input>
      </form>
    </>
  );
}
