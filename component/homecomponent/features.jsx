export default function Features(){
  return(<>
    <style jsx>{`
      @media only screen and (max-width: 992px){
  #feature-card{
    width:300px;
  }
}
      #feature-card{
  border-style: solid;
  border-width: 20px 0;
  border-color: rgba(127, 127, 127,0.5);
  border-radius: 0px 0px 25px 25px;
  background-color: var(--second-bg-color);
}
.feature-icon{
  background-color: var(--main-theme-color);
  position: relative;
  text-align: center;
  vertical-align: middle;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  box-shadow: 0 .5rem 0.5rem rgba(0,0,0,.2) !important;
  left:50%;
  transform: translate(-50%,0);
}
.feature-text h3{
  font-family: Montserrat,sans-serif;
  font-size: calc(0.5vw + 2vh);
  font-weight: bold;
  line-height: 1.2;
  margin-top: calc(0.5vw + 2vh);
  margin-bottom: calc(0.5vw + 2vh);
  text-transform: uppercase;
  letter-spacing: 2px;
  color:var(--text-color);
}
.feature-text p{
  margin: 10%;
  line-height: 2;
  font-size: calc(0.5vw + 1.5vh);
  color:var(--text-color);
}
.feature-icon i{
  font-size:36px;
  color:var(--text-color);
}
    `}</style>
  <div className="container mt-5">
    <h1 className="text-center" id="sub-heading">Features</h1>
    <div className="row d-flex justify-content-center">
    <div className="col-12 col-sm-6 col-md-6 col-xl-4 d-flex justify-content-center mb-5"> 
      <div id="feature-card">
          <div className="feature-icon mt-3" id="feature-icon">
            <i className="bi bi-archive-fill"></i>
          </div>
          <div className="feature-text text-center mt-3">
            <h3>Research user needs</h3>
            <p>Discover pain points and understand user behaviour</p>
          </div>
    </div>
    </div>
      <div className="col-12 col-sm-6 col-md-6 col-xl-4 d-flex justify-content-center mb-5"> 
      <div id="feature-card">
        <div className="feature-icon mt-3" id="feature-icon">
      <i className="bi bi-award"></i>
        </div>
        <div className="feature-text text-center mt-3">
            <h3>Prototype an idea</h3>
            <p>Validate ideas with an interactive prototype of your vision</p>
          </div>
    </div>
    </div>
      <div className="col-12 col-sm-6 col-md-6 col-xl-4 d-flex justify-content-center mb-5"> 
      <div id="feature-card">
        <div className="feature-icon mt-3" id="feature-icon">
          <i className="bi bi-briefcase"></i>
        </div>
        <div className="feature-text text-center mt-3">
            <h3>Design a new product</h3>
            <p>Launch an MVP with a best in class user experience</p>
          </div>
    </div>
    </div>
  </div>
  </div>
  </>)
}