// import { useQuery } from "@tanstack/react-query";
// import axios from "axios";
// // import { toast } from "react-toastify";

// const fetchBookedEvents = async ({ queryKey }) => {
//   const { _id } = queryKey;
//   let response = await axios.post(
//     `http://localhost:3000/api/v1/user/bookEvent`,
//     {
//       userId: "6819d556d94ff85153da8c88",
//       eventId: _id,
//     },
//     { headers: { "Content-Type": "application/json" } }
//   );

//   return response;
// };
// const useBookEvent = (eventId) => {
//   return useQuery({
//     queryKey: ["events", eventId],
//     queryFn: fetchBookedEvents,
//   });
// };

// export default useBookEvent;

// // import { useQuery } from "@tanstack/react-query";
// // const fetchPet = async ({ queryKey }) => {
// //   const [, id] = queryKey;
// //   const res = await fetch(`https://pets-v2.dev-apis.com/pets?id=${id}`);
// //   return res.json();
// // };
// // // useQuery -> handle useEffect and carry all information about this fetching for data
// // const usePet = (petId) => {
// //   return useQuery({
// //     queryKey: ["pet", petId],
// //     queryFn: fetchPet,
// //   });
// // };

// // export default usePet;
