export const Guest = {
  async postGuestDetails(guestDetails) {
    try {
      const res = await fetch('http://localhost:5001/guests', {
        method: 'post',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(guestDetails)
      });
      const jsonRes = await res.json();
      return jsonRes;
    } catch (error) {
      console.error(error);
    }
  },

  async getGuestDetails() {
    try {
      const res = await fetch('http://localhost:5001/guests')
      const jsonRes = await res.json();
      if (!jsonRes) {
        return console.error('No guests found')
        // display error for user
      }
      return jsonRes.map((guest) => {
        return {
          id:guest.id,
          uuid: guest.uuid,
          firstName: guest.firstname,
          lastName: guest.lastname,
          email: guest.email,
          rsvp: guest.rsvp
        };
      })
      
      }
      catch(error) {
        console.error(error);
      }
    }
  }
  // async updateGuestRSVP() {
  //   try {
  //     const res = await fetch(`http://localhost:5001/guests/${guestId}`)
  //   } catch (error) {
  //     console.error(error)
  //   }
  // }
