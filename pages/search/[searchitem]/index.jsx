import { useRouter } from 'next/router'
  
export default function SearchItem(){
   const router = useRouter()
  const searchText  = router.query.searchitem
  return(<>
    <style jsx>{`
    .row > *{
    padding-right: 0;
    padding-left: 0;
  }
  #workerList {
    background-color: rgba(0,0,0,0.05) !important;
    box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
  }
  #profile-image{
    height: calc(10vh + 4vw);
    border-radius: 5px;  
  }
  col {
    padding-right: 0 !important;
  }
  .title {
    font-weight: bold;
    text-align: center;
  }
  label{
    font-size: calc(1.5vh + 0.15vw)
  }
  #item-row{
    background-color: var(--light-type-color) ;
    margin: 0 10px 5px 0px;
    border-radius: 5px;
  }
 #preview-btn{
    float: left;
    margin: 2.5% 2.5%;
    font-size: calc(1.5vh + 0.15vw);
    outline:0;
    border:0;
    padding: 5px;
    border-radius: 5px;
    background-color: var(--sub-theme-color);
    box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
  }
 #preview-btn:hover, #preview-btn:active {
    background-color: var(--main-theme-color);
  }
    `}</style>
    <div className="m"><p>you have search for : {searchText}</p></div>
 <div className="m-auto py-5 container-lg">
    <div id="workerList" className="p-2 mx-auto col-12 col-sm-12 col-md-10 col-xl-6">
      <div className=" row justify-content-center d-flex">
        <div className="col-4 justify-content-center d-flex">
          <div className="mb-auto mx-auto mt-2">
            <img id="profile-image" src="https://dummyimage.com/400x400/9c8c9c/080808&text=profile+pic" />
          </div>
        </div>
        <div className="col-8">
          <div className="row" id="item-row">
            <div className="col"><label className="title">Name</label></div>
            <div className="col"><label className="textvalue">John Miller</label></div>
          </div>
          <div className="row" id="item-row">
            <div className="col"><label className="title">Proffesion</label></div>
            <div className="col"><label className="textvalue">Plumber</label></div>
          </div>
          <div className="row" id="item-row">
            <div className="col"><label className="title">Age</label></div>
            <div className="col"><label className="textvalue">36</label></div>
          </div>
          <div className="row" id="item-row">
            <div className="col"><label className="title">Availability</label></div>
            <div className="col"><label className="textvalue">Yes</label></div>
          </div>
          <div className="row">
          <div className="col">
            <button id="preview-btn" className="text-light">Preview and Book</button>
          </div>
        </div>
      </div>
    </div>
    </div>
   </div>
  </>)
}