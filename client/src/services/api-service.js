const baseUrl = 'http://localhost:3001/';
const headers = { 'Content-Type': 'application/json' };

export const getLocations = async () => fetch(`${baseUrl}locations`, {
  method: 'GET',
  headers,
})
  .then((res) => res.json())
  .catch((error) => console.log(error));

export const postLocation = async (data) => fetch(`${baseUrl}locations`, {
  method: 'POST',
  headers,
  body: JSON.stringify(data),
})
  .then((res) => res.json())
  .catch((error) => console.log(error));

export const deleteLocation = async (id) => fetch(`${baseUrl}locations/${id}`, {
  method: 'DELETE',
  headers,
})
  .then((res) => res.json())
  .catch((error) => console.log(error));

export const editLocation = async (id, data) => fetch(`${baseUrl}locations/${id}`, {
  method: 'PATCH',
  headers,
  body: JSON.stringify(data),
})
  .then((res) => res.json())
  .catch((error) => console.log(error));

export const registerUser = async (data) => fetch(`${baseUrl}users/register`, {
  method: 'POST',
  headers,
  body: JSON.stringify(data),
})
  .then((res) => res.json())
  .catch((error) => console.log(error));

export const loginUser = async (data) => fetch(`${baseUrl}users/login`, {
  method: 'POST',
  headers,
  body: JSON.stringify(data),
})
  .then((res) => res.json())
  .catch((error) => console.log(error));
