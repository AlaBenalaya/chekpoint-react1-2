import './App.css'
import Header from './Component/Header'
import Navbar from './Component/Navbar'
import Login from './Component/Login'
import Carousel from './Component/Carousel'
import Produit from './Component/Produit'
import Footer from './Component/Footer'


function App() {

  return (
    <div className="App">
      {/*Header application*/}
            <Header />
            <Login />
      {/* Navbar part */}
      <Navbar />
      <Carousel />
<Produit />
<Footer />
    </div>
  );
}

export default App;
