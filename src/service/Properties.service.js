import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3000/api/v1/",
  timeout: 1000,
});

export async function getPropertyListing() {
  return await instance
    .get("propertylisting")
    .then((response) => response.data)
    .catch((err) => console.log(err));
}

export async function getPropertyCount() {
  return await instance
    .get("propertylisting/count")
    .then((response) => response.data)
    .catch((err) => console.log(err));
}

export async function createPropertyListing(body) {
  return await instance
    .post("propertylisting", body)
    .then((response) => {
      return response.status;
    })
    .catch((err) => console.log(err));
}

// export async function getImage(count) {
//   const instance2 = axios.create({
//     headers: {
//       "X-Api-Key": process.env.REACT_APP_API_KEY,
//       accept: "image/jpg",
//     },
//     responseType: "blob",
//   });

//   const requests = [];

//   // Prepare count number of Axios requests for images
//   for (let i = 0; i < count; i += 1) {
//     requests.push(
//       instance2.get("https://api.api-ninjas.com/v1/randomimage?category=city", {
//         responseType: "blob", // Ensure we get the image as a blob
//       })
//     );
//   }

//   return await Promise.all(requests)
//     .then((responses) => {
//       const urls = responses.map((response) => {
//         // Convert each response into a Blob URL
//         const imageBlob = new Blob([response.data], { type: "image/jpeg" });
//         return URL.createObjectURL(imageBlob);
//       });

//       return urls;
//     })
//     .catch((error) => {
//       console.error("Error fetching the images:", error);
//     });
// }
