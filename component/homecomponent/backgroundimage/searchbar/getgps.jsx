const GetGPS = function({setgpslocation}){
  const getGPSLocation = () =>{
    if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    alert("turn on GPS")
  }
  }
function showPosition(position) {
  var inputGPS = document.getElementById("locationinput")
    inputGPS.value = "Latitude: " + position.coords.latitude +
  "<br>Longitude: " + position.coords.longitude;
}
  return(
    <>
      <style jsx>{`
      
.display-location{
  position:absolute;
  left:50%;
  transform: translate(-50%,1%);
  border: 4px solid var(--sub-theme-color);
  border-radius: 25px;
  padding: 20px 10px;
  width: 350px;
  z-index:6;
}
#autoGPS{
  line-height: 80px;
}
.div-overlay{
    width: 100%;
    height: 150%;
    position: fixed;
    left:0;
    top:0;
    z-index: 6;
    background-color: rgba(0,0,0, 0.6);
}
.loactioninput{
  border: 3px solid var(--main-theme-color);
  padding: 10px 5px 10px 5px;
  outline:none;
  border-radius: 12.5px;
}
.loactioninput:focus{
  background-color: var(--light-type-color);
}

    `}</style>
    <div className="container-fluid" id="GPS-div">
        <div className="div-overlay" id="div-overlay" onClick={event => setgpslocation(false)}></div>
        <div className="container">
        <div className="display-location text-center bg-light" id="display-location">
            <input type="text" className="loactioninput" id="locationinput"  placeholder="Enter manually"/><br/>
            <a id="autoGPS" onClick={getGPSLocation}><i className="bi bi-geo-alt"></i>&nbsp;Use GPS to locate me</a>
        </div>
        </div>
        </div>
        
    </>
  )
}
export default GetGPS