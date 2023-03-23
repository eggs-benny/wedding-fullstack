export function RsvpQuestions() {
  function handleButtonClick(answer) {
    if (answer === 'yes') {
      console.log('yes');
    } else if (answer === 'no') {
      console.log('no');
    }
  }

  return (
    <>
      <h3>Will you be able to join us at our wedding?</h3>
      <button
        className="Rsvp"
        onClick={() => handleButtonClick('yes')}
      >
        Yes, I'll be there!
      </button>
      <button className="Rsvp" onClick={() => handleButtonClick('no')}>
        No, sadly I can't make it
      </button>
      <button
        className="Rsvp"
        onClick={() => console.log('confirm')}
      >
        Confirm
      </button>
    </>
  );
}
