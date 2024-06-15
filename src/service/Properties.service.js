import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3000/api/v1/",
  timeout: 1000,
  headers: { "X-Custom-Header": "foobar" },
});

export default async function getPropertyListing() {
  return await instance
    .get("propertylisting")
    .then((response) => response.data)
    .catch((err) => console.log(err));
}

export async function createPropertyListing(body) {
  return await instance
    .post("propertylisting", body)
    .then((response) => {
      console.log(response.status);
      return response.status;
    })
    .catch((err) => console.log(err));
}
