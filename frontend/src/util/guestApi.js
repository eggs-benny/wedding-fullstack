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
  // async updateGuestRSVP() {
  //   try {
  //     const res = await fetch(`http://localhost:5001/guests/${guestId}`)
  //   } catch (error) {
  //     console.error(error)
  //   }
  // }
};
