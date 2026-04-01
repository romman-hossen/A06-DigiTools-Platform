import { Suspense, useState } from "react";
import "./App.css";
import Banner from "./Components/Banner/Banner";
import SuccessBanner from "./Components/Banner/SuccessBanner";
import Cards from "./Components/Cards/Cards";
import Cart from "./Components/Cart/Cart";
import Footer from "./Components/Footer/Footer";
import NavBar from "./Components/NavBar/NavBar";
import Premium from "./Components/Premium/Premium";
import Steps from "./Components/Steps/Steps";
import Pricing from "./Components/Pricing/Pricing";
import Tansform from "./Components/Tansfrom/Tansform";

const getData = async () => {
  const res = await fetch("/Data.json");
  return res.json();
};
const CardData = getData();
function App() {
  const [activeTab, setActiveTab] = useState("products");
  const [cartItems, setCartItems] = useState([]);
  // console.log(cartItems);

  return (
    <>
      <NavBar cartItems ={cartItems}/>
      <Banner />
      <SuccessBanner />
      <Premium />
      {/* name of each tab group should be unique */}
      <div className="tabs tabs-box flex gap-1 justify-center bg-white w-70 mx-auto border border-gray-100 rounded-full py-2 mb-10  ">
        <input
          type="radio"
          name="my_tabs_1"
          className={`tab btn ${activeTab === "products" ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] shadow shadow-[#6107EC] text-white" : "bg-white shadow text-black "} rounded-full w-30 `}
          aria-label="Products"
          onClick={() => setActiveTab("products")}
          defaultChecked
        />
        <input
          type="radio"
          name="my_tabs_1"
          className={`tab btn ${activeTab === "cart" ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] shadow shadow-[#6107EC] text-white" : "bg-white shadow text-black "} rounded-full w-30 `}
          aria-label={`Cart (${cartItems.length})`}
          onClick={() => setActiveTab("cart")}
        />
      </div>
      {/* {activeTab === "cart" ? (
        <Cart cartItems={cartItems} />
      ) : (
        <Suspense fallback={<div>Loading...</div>}>
          <Cards CardData={CardData} cartItems ={cartItems} setCartItems={setCartItems} />
        </Suspense>
      )} */}
      
      {/* <Cart /> */}
      <Suspense fallback={<span className="loading loading-bars loading-lg flex text-center mx-auto items-center h-10"></span>}>
      {activeTab === "products" &&
        <Cards CardData={CardData} cartItems ={cartItems} setCartItems={setCartItems} />
      }
      </Suspense>
      {activeTab === "cart" && <Cart cartItems={cartItems} setCartItems={setCartItems}/>}
      <Steps />
      <Pricing />
      <Tansform />
      <Footer />
    </>
  );
}

export default App;
