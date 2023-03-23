export const Wedding = {
  async postGuest() {
    try {
      const res = await fetch('http://localhost:5001/guests', {
        method: 'post',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({
          firstname: fields.firstName,
          lastname: fields.lastName,
          email: fields.email
        })
      });
      const jsonRes = await res.json();
      return jsonRes;
    } catch (error) {
      console.error(error);
    }
  }
};
