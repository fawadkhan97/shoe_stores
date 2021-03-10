export default async function FetchData() {
  return fetch(process.env.PUBLIC_URL + "../Shoesdetails.json")
    .then((res) => res.json())

    .then((data) => {
      console.table("data is ", data);
      return data;
    });
}
