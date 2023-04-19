import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { db } from "../../../../firebase.js";
import { doc, getDoc, addDoc, collection, serverTimestamp } from "firebase/firestore";
import { parseCookies } from "nookies";

const WorkerDetailsPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [worker, setWorker] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      getDoc(doc(db, "worker", id)).then((docSnap) => {
          if (docSnap.exists()) {
            const docObj = docSnap.data();
            setWorker({ ...docObj });
          }
      })
    };
    if (id) {
      fetchData();
    }
  }, [id]);

  const handleBookNow = async () => {
    const cookies = parseCookies();
    const cId = cookies.id;
    const cName = cookies.displayName;
    const cPhone = cookies.phoneNumber;
    const caltPhone = cookies.altPhoneNumber;
    const cEmail = cookies.email;
    const cAddress = cookies.address;
    const wName = worker.name;
    const wPhone = worker.phone;
    const wEmail = worker.email;
    const wType = worker.profession;
    const Bill = null;
    if (cId && id ) {
      try {
        const bookingRef = collection(db, "booking");
        const booking = {
          cId,cName,cPhone,caltPhone,cEmail,cAddress,
          wId: id,
          wName: wName,
          wEmail: wEmail,
          wPhone: wPhone,
          wType: wType,
          bill: Bill,
          statusDescription: "waiting for response",
          status: "upcoming",
          timestamp: serverTimestamp()
        };
        await addDoc(bookingRef, booking);
        alert("Booking successful");
      } catch (error) {
        console.error(error);
        alert("Error occurred while booking");
      }
    }
  };

  if (!worker) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto my-5 px-4 md:px-0 max-w-screen-md">
       <div className="flex justify-center items-center h-screen">
      <div className="shadow-md rounded-lg bg-white p-5">
      <h2 className="text-3xl font-bold mb-4 text-center">{worker.name}</h2>
        <p className="text-lg font-semibold mb-1">Age: {worker.age}</p>
        <p className="text-lg font-semibold mb-1">
          Profession: {worker.profession}
        </p>
        <p className="text-lg font-semibold mb-1">
          Availability: {worker.availability}
        </p>
        <p className="text-lg font-semibold mb-1">
          Rating and Review: {worker.star}
        </p>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded mt-4"
          onClick={handleBookNow}
        >
          Book Now
        </button>
      </div>
    </div>
    </div>
  );
};

export default WorkerDetailsPage;
