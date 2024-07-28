import Navbar from "../components/Navbar";
import logo from "../assets/MeubelHouse_Logos.png"
import {menu, browseData, product, footer} from "../helpers/data.jsx"
import  "./css/landingpage.css"
import Browse from "../components/Browse.jsx";
import Product from "../components/Product.jsx";
import Footer from "../components/Footer.jsx";

function Home () {
    return (
        <>
        <Navbar menu = {menu} logo = {logo}/>
            <div className="landing-page ">
                <img className="foto-landingpage"
                src="https://images.unsplash.com/photo-1634712282287-14ed57b9cc89?q=80&w=2106&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </div>
            <div className="new-arrival bg-customMixed">
                <div className="p-10">
                    <p className="font-semibold tracking-[.25em] text-base">New Arrival</p>
                    <p className="mt-3 text-primary font-bold text-5xl tracking-wide	">Discover Our <br /> New Collection</p>
                    <p className="mt-3 font-medium tracking-normal text-lg	">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
                    <div className="bg-primary w-2/5 mt-9 p-6 flex justify-center">
                        <p className="text-white justify-center text-2xl">Buy Now</p>
                    </div>
                </div>
            <div> 
            </div>
            </div>
        <Browse browseData = {browseData}/>
        <Product product = {product}/>
        <Footer footer = {footer}/>
        </>
    )
}

export default Home;