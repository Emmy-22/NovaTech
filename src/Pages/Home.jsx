import  { useState } from 'react'
import Header from '../Components/Header'
import HeroSection from '../Home/HeroSection'
import Shop from '../Home/Shop'
import FAQ from './FAQ'
import Testimonial from './Testimonial'


const Home = () => {
 const [favourites, setFavourites] = useState([]);
 const [cartItems, setCartItems] = useState([]);

 const toggleFavourite = (title) => {
  setFavourites((prev) =>
    prev.includes(title)
      ? prev.filter((item) => item !== title)
      : [...prev, title]
  );
};
  const addToCart = (product) => {
    setCartItems((prev) => [...prev, product]);
  }

  return (
    <div>
     <Header isFavourite={favourites.length > 0} cartCount={cartItems.length}/>
     <HeroSection />
     <Shop favourites={favourites} toggleFavourite={toggleFavourite}  addToCart={addToCart}/>
     <Testimonial />
    <FAQ />
    </div>
  
  )
}

export default Home
