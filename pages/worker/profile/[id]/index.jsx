import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { db } from "../../../../firebase.js";
import { doc, getDoc, addDoc, collection, serverTimestamp } from "firebase/firestore";
import { parseCookies } from "nookies";

const WorkerDetailsPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [worker, setWorker] = useState(null);
  const [star,setStar] = useState([]);
  useEffect(() => {
  const starlist=[];
    for(let i = 1;i<=5;i++){
      starlist.push(i);
    }
    console.log(starlist);
    setStar(starlist);
  },[])
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

  return (<><style jsx>{`
  hr,h2,p{
    color:var(--text-color);
  }
  #maincontainer{
    margin-top:70px;
    background-color:transparent;
  }
  #detailscontainer{
    border: 1px solid var(--main-theme-color);
    border-radius: 8px;
  }
  .btnbook{
    padding:10px 20px;
    border-radius:8px;
    border: 4px solid transparent;
    outline:none;
    color:white;
    background-color: var(--main-theme-color);
  }
  .btnbook:hover{
    border:4px solid var(--sub-theme-color);
  }
  .btnbook:active{
    background-color: var(--sub-theme-color);
  }
  #ratingStar{
  background: -webkit-linear-gradient(0deg, yellow , orange);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  }
  
  `}</style>
    <div id="maincontainer" className="container mx-auto px-4 md:px-0 max-w-screen-md">
       <div className="flex justify-center items-center h-screen">
      <div id="detailscontainer" className="shadow-md rounded-lg p-5">
      <h2 className="text-3xl font-bold mb-4 text-center">{worker.name}</h2>
        <p className="text-lg font-semibold mb-1">Age: {worker.age}</p>
        <hr/>
        <p className="text-lg font-semibold mb-1">
          Profession: {worker.profession}
        </p><hr/>
        <p className="text-lg font-semibold mb-1">
          Availability: {worker.availability}
        </p><hr/>
        <p className="text-lg font-semibold mb-1">
          Rating and Review: {worker.star}
        </p>
        {star.map(e=>{
          return(
            <i key={e} id="ratingStar" className="bi bi-star-fill"></i>
          )
        })}
        <hr/>
        <button
          className="btnbook"
          onClick={handleBookNow}
        >
          Book Now
        </button>
        
      </div>
    </div>
    </div>
    </>);
};

export default WorkerDetailsPage;
