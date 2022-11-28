const submitData = (name, email) => {
  return fetch(`http://localhost:3000/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      name: name,
      email: email,
    }),
  })
    .then((response) => response.json())
    .then((obj) => {
      let id = document.createElement('p');
      id.textContent = `ID: ${obj.id}`;
      document.body.appendChild(id);
    })
    .catch((err) => {
      let errorMessage = document.createElement('p');
      errorMessage.textContent = err.message;
      document.body.appendChild(errorMessage);
    });
};
