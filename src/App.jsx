import { Suspense } from "react";
import "./App.css";
import Banner from "./Components/Banner/Banner";
import SuccessBanner from "./Components/Banner/SuccessBanner";
import Cards from "./Components/Cards/Cards";
import Cart from "./Components/Cart/Cart";
import Footer from "./Components/Footer/Footer";
import NavBar from "./Components/NavBar/NavBar";

const getData = async () => {
  const res = await fetch("/Data.json");
  return res.json();
};
function App() {
  const CardData = getData();
  const []

  return (
    <>
      <NavBar />
      <Banner />
      <SuccessBanner />
      <Cart />
      {/* name of each tab group should be unique */}
      <div className="tabs tabs-box flex justify-center bg-white w-70 mx-auto border border-gray-100 rounded-full py-2 mb-10  ">
        <input
          type="radio"
          name="my_tabs_1"
          className="tab btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] shadow shadow-[#6107EC] rounded-full w-30 text-white"
          aria-label="Products"
          defaultChecked
        />
        <input
          type="radio"
          name="my_tabs_1"
          className="tab btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full w-30  text-white"
          aria-label="Cart"
          
        />
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Cards CardData={CardData} />
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
