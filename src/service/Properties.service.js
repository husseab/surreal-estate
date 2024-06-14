import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3000/api/v1/",
  timeout: 1000,
  headers: { "X-Custom-Header": "foobar" },
});

export default function getPropertyListing() {
  instance
    .get("propertylisting")
    .then((response) => response.data)
    .catch((err) => console.log(err));
}

export function createPropertyListing(body) {
  instance
    .post("propertylisting", body)
    .then((response) => response.status)
    .catch((err) => console.log(err));
}
