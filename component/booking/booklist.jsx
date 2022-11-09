import Image from "next/image"
import Cancel from "../../public/avatar/cancel.png"
import Avatar from "@mui/material/Avatar";
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
    .image-container{
        margin-left:10px;
        border-radius: 50%;
        margin-left: 2vw;
        width: 56px;
        height: 56px;
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
            <div className="card mb-3">
                <div className="card-body theme-color"> {/* Ongoing */}
                    <div className="image-container">
                        <Avatar src="/avatar/cancel.png" sx={{ width: 56, height: 56 }} style={{"backgroundColor":"var(--light-type-color)"}}/>
                    </div>
                    
                        <div id="status" className="col-12 col-sm-12 col-md-12 col-xl-12 col-xl-12">
                            Status
                        </div>
                  
                    <div className="container row card-body ">
                        <div id="typename" className="col-12 col-sm-6 col-md-4 col-xl-4 col-xl-4">
                            Class
                        </div>
                        <div id="fullname" className="col-12 col-sm-6 col-md-4 col-xl-4 col-xl-4">
                            Name Surname
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 col-xl-4 col-xl-4">
                            
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-3">
                <div className="card-body theme-color"> {/* Upcomming */}
                    <div className="image-container">
                        <Avatar src="/avatar/cancel.png" sx={{ width: 56, height: 56 }} style={{"backgroundColor":"var(--light-type-color)"}}/>
                    </div> 
                </div>
            </div>
            <div className="card mb-3">
                <div className="card-body theme-color"> {/* Previous */}
                    <div className="image-container">
                        <Avatar src="/avatar/cancel.png" sx={{ width: 56, height: 56 }} style={{"backgroundColor":"var(--light-type-color)"}}/>
                    </div> 
                </div>
            </div>
            <div className="card mb-3">
                <div className="card-body theme-color"> {/* Cancelled */}
                    <div className="image-container">
                        <Avatar src="/avatar/cancel.png" sx={{ width: 56, height: 56 }} style={{"backgroundColor":"var(--light-type-color)"}}/>
                    </div> 
                </div>
            </div>
        </div>
        </div>
    </div>
    </>)
}
export default Booklist