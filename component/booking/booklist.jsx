import Avatar from "@mui/material/Avatar";
import Statusicon from "./statusicon.jsx";
import { getFirestore, collection, getDocs } from 'firebase/firestore';


import { useState,useEffect } from "react";
import { parseCookies } from "nookies";
const Booklist =() =>{
    const [bookings, setBookings] = useState([]);
    const cookies = parseCookies();
    const uId = cookies.id;
useEffect(() => {
  const getBookings = async () => {
    const db = getFirestore();
    const bookingsRef = collection(db, 'booking');
    const snapshot = await getDocs(bookingsRef);
    const bookings = snapshot.docs
      .map((doc) => ({ id: doc.id, ...doc.data() }))
      .filter((booking) => booking.cId === uId);
    return bookings;
  }
  getBookings().then((bookings) => setBookings(bookings));
}, []);
    return(<>
    <style jsx>{`
    a{
        color: grey;
    }
    a:hover, a:active,.active{
        color: var(--text-color);
        font-weight:bold;
    }
    .backgd{
        background-color: var(--back-gd-color); 
    }
    .theme-color{
        background-color: var(--second-bg-color); 
        color: var(--text-color);
    }
    #status{
        position:absolute;
        top:0;
        right:0;
        width:auto;
        padding-right: 2vw;
    }
    
    `}</style>
    <div className="container text-center m-top">
      <h2 id="sub-heading">Your Booking List</h2>
    </div>
    <div className="container">
        <div className="row">
        <div className="mx-auto mb-3 col-12 col-sm-10 col-md-3 col-xl-3 col-lg-3">
            <div className="card">
                
                <div className="card-body theme-color">
                    <div className="row">
                        <a className="active">All</a>
                    </div>
                    <div className="row">
                        <a>Ongoing</a>
                    </div>
                    <div className="row">
                        <a>Upcoming</a>                         
                    </div>
                    <div className="row">
                        <a>Previous</a>
                    </div>
                    <div className="row">
                        <a>Cancelled</a>
                    </div>
                </div>
            </div>
        </div>
        <div className="mx-auto mb-3 col-12 col-sm-10 col-md-8 col-xl-8 col backgd">
        {bookings.map(u=>       
            <div key={u.id} className="mb-3 card">
                <div className="card-body row theme-color"> {/* Ongoing */}
                    
                    <div className="col-3 col-md-2">
                    <div className="image-container">
                        <Avatar src="/avatar/cancel.png" sx={{ width: 56, height: 56 }} style={{"backgroundColor":"var(--light-type-color)"}}/>
                    </div>
                    </div>
                    
                    <div className="col-9 col-md-10 row">
                        <div id="status" className="status ">
                            <Statusicon status={u.status}/>&nbsp;Status
                        </div>
                        <div id="typename" className="col-12 col-sm-6 col-md-12 col-xl-4 col-xl-4 ">
                            <b>Type:</b> {u.wType}
                        </div>
                        <div id="fullname" className="col-12 col-sm-6 col-md-12 col-xl-4 col-xl-4 ">
                            <b>Date:</b> {u.timestamp.toDate().toLocaleDateString('en-GB', {
                            day: 'numeric',
                            month: 'numeric',
                            year: 'numeric',
                            })}
                        </div>
                        <div id="statusupdate" className="col-12 col-sm-6 col-md-12 col-xl-4 col-xl-4 ">
                            <b>{u.statusDescription}</b>
                        </div>
                        <div id="typename" className="col-12 col-sm-6 col-md-12 col-xl-4 col-xl-4 ">
                            <b>Name:</b> {u.wName}
                        </div>
                        <div id="fullname" className="col-12 col-sm-6 col-md-12 col-xl-4 col-xl-4 ">
                            <b>Time:</b> {u.timestamp.toDate().toLocaleTimeString('en-GB', {
                             hour: 'numeric',
                             minute: 'numeric',
                             hour12: true,
                            })}
                        </div>
                        <div id="billamount" className="col-12 col-sm-6 col-md-12 col-xl-4 col-xl-4 ">
                            <b>Bill:</b> Rs {u.bill==null?"--.--":u.bill}
                        </div>
                    </div>  
                </div>
            </div>
        )}
        </div>
        </div>
    </div>
    </>)
}
export default Booklist