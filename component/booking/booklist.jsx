import Avatar from "@mui/material/Avatar";
import Statusicon from "./statusicon.jsx";
const Booklist =() =>{
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
            {
            <div className="mb-3 card">
                <div className="card-body row theme-color"> {/* Ongoing */}
                    
                    <div className="col-3 col-md-2">
                    <div className="image-container">
                        <Avatar src="/avatar/cancel.png" sx={{ width: 56, height: 56 }} style={{"backgroundColor":"var(--light-type-color)"}}/>
                    </div>
                    </div>
                    <div className="col-9 col-md-10 row">
                        <div id="status" className="status ">
                            <Statusicon status={"ongoing"}/>&nbsp;Status
                        </div>
                        <div id="typename" className="col-12 col-sm-6 col-md-12 col-xl-4 col-xl-4 ">
                            <b>Type:</b> Plumber
                        </div>
                        <div id="fullname" className="col-12 col-sm-6 col-md-12 col-xl-4 col-xl-4 ">
                            <b>Date:</b> 11/11/22
                        </div>
                        <div id="statusupdate" className="col-12 col-sm-6 col-md-12 col-xl-4 col-xl-4 ">
                            <b>Ongoing</b>
                        </div>
                        <div id="typename" className="col-12 col-sm-6 col-md-12 col-xl-4 col-xl-4 ">
                            <b>Name:</b> John Milter
                        </div>
                        <div id="fullname" className="col-12 col-sm-6 col-md-12 col-xl-4 col-xl-4 ">
                            <b>Time:</b>10:00AM onwards
                        </div>
                        <div id="billamount" className="col-12 col-sm-6 col-md-12 col-xl-4 col-xl-4 ">
                            <b>Bill:</b>  0.00 Rs
                        </div>
                    </div>  
                </div>
            </div>
            }
        </div>
        </div>
    </div>
    </>)
}
export default Booklist