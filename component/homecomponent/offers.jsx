import Image from "next/image"

export default function Offers(){
  const imageUrl = require('./json/offerUrl.js');
  return(<>
   <style jsx>{`
@media only screen and (max-width: 992px){
  .container-image{
    margin: 0 0 20px 0;
  }
}
.container-image {
  position: relative;
  width: 100%;
  max-width:300px;
}

.image {
  position:relative;
  margin:auto;
  width:calc(13vw + 12vh);
  height:calc(6vw + 10vh);
}

.overlay {
  position: absolute; 
  bottom: 0; 
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
  color: #f1f1f1; 
  width: 100%;
  border-top-left-radius: 180px 180px;
  border-top-right-radius: 180px 180px;
  transition: 0.5s ease-in-out;
  opacity:0;
  color: white;
  font-size: 18px;
  text-align: center;
}
.code{
  font-family: "Lucida Console", "Courier New", monospace;
  animation: glow 0.2s ease-in-out infinite alternate;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 var(--main-theme-color), -1px 1px 0 var(--main-theme-color), 1px 1px 0 var(--main-theme-color);
  
}
@keyframes glow {
  from {
    color: white;
  }
  
  to {
    color: var(--light-type-color);
  }
}
.container-link:hover .overlay, .container-link:active .overlay, .container-link:active .overlay {
  opacity: 1;
}


    `}</style>
     <div className="container-fluid mt-3">
    <h1 className="text-center" id="sub-heading">Offers</h1>
    <div className="row d-flex justify-content-center">
      {imageUrl.map((item) => (
          
        <div key={item.key} className="col-sm-6 col-xl-3 col-md-6 col-6 d-flex justify-content-center " id="imgHolder">
          <div className="container-image">
            <a className="container-link">
            <div className="image shadow">
              <Image 
                src={item.url} 
                alt={item.key}
                fill
                sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw"
                />
            </div>
            <div className="overlay">Use Code:&nbsp;<p className="code">{item.code}</p></div>
            </a>        
          </div>  
      </div>
      ))}
    </div>
  </div>
  </>)
  
 }