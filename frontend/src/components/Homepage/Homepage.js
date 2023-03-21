import { useState } from 'react';

export function Homepage({ navigate }) {
  const [password, setPassword] = useState('');

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if (password === '' || !password.match(/^[a-zA-Z0-9]{4,25}$/)) return;
    if (password === 'test') {navigate('/details')}
  }

  return (
    <>
      <h1>Welcome to Ben & Laura's Wedding</h1>
      <div class="container">
        <form class="enter-password" onSubmit={handleSubmit}>
        <h2>To see details and to RSVP, please enter the password:</h2>
        <input
          placeholder="enter password"
          id="password"
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />{' '}
        <input role="submit-button" id="submit" type='submit' value='submit'></input>
    </form>
      </div>
      <div>
        <img id="keyImage" src={require('./CHATO_EXT_5.jpeg')} alt="Castle" />
      </div>
    </>
  );
}
