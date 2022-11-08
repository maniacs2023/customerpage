import Styles from '../styles/Home.module.css'
import Categories from '../component/homecomponent/categories.jsx'
import Features from '../component/homecomponent/features.jsx'
import Offers from '../component/homecomponent/offers.jsx'
import Hometemplate from "../component/template/hometemplate.jsx"


function Home() {
  
  return (
    <>
      <Hometemplate>
      
      <Offers/>
      
      <Categories/>
      <Features/>
      </Hometemplate>
    </>
  )

}

export default Home