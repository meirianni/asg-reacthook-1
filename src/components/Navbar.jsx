
import gambar from "../assets/MeubelHouse_Logos.png";
import user from "../assets/mdi_account-alert-outline.png";
import search from "../assets/akar-icons_search.png";
import heart from "../assets/akar-icons_heart.png";
import cart from "../assets/ant-design_shopping-cart-outlined.png"
import  "./css/stylenav.css"

function Navbar(props) {
    const {menu, logo} = props
    return (
    <div className="">
        <div className = "nav flex justify-around justify-center items-center	p-2	">
            <div className = "logo flex justify-center">
                <img src={logo} alt="logo" />
                <p className="font-logo font-semibold text-fontColor">FurPro</p>
            </div>
            <div className="font-menu flex justify-center gap-10 content-center text-fontColor	">
                {menu.map((item) => (
                    <p>{item}</p>
                ))}
            </div>
            <div className="ikon flex gap-6">
                <img src={user} alt="mu"  className="min-h-0"/>
                <img src={search} alt="" className="min-h-0"/>
                <img src={heart} alt=""className="min-h-0" />
                <img src={cart} alt="" className="min-h-0" />
            </div>
        </div>
    </div>

    )
}
export default Navbar