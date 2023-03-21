import Styles from '../styles/Home.module.css'
import Categories from '../component/homecomponent/categories.jsx'
import Features from '../component/homecomponent/features.jsx'
import Offers from '../component/homecomponent/offers.jsx'
import Hometemplate from "../component/template/hometemplate.jsx"
import Description from "../pages/description.jsx"

function Home() {
  
  return (
    <>
      <Hometemplate>
      
      <Offers/>
      
      <Categories/>
      <Features/>
      <Description/>
      </Hometemplate>
    </>
  )

}

export default Home