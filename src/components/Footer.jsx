import "./css/stylefooter.css"

const Footer = (props) => {
    const {footer} = props
    return (
        <div>
            <hr className="h-0 mt-5 bg-customGreyFont"/>
            <div className="flex justify-around justify-center mt-5">
                <div>
                    <p className="font-bold	">{footer?.nameCompany}</p>
                    <div className="mt-5">
                        <p className="text-customGreyFont">{footer?.address}</p>
                        <p className="text-customGreyFont">{footer?.country}</p>
                    </div>
                </div>
                <div>
                    <p>Link</p>
                    {footer?.menu.map((item) => (
                        <div className="mt-5">
                            <p>{item}</p>
                        </div>
                    ))}
                </div>
                <div>
                    <p>Help</p>
                    {footer?.listHelp.map((item) => (
                        <div className="mt-5">
                            <p>{item}</p>
                        </div>
                    ))}
                </div>
                <div>
                    <p>Newsletter</p>
                    <div  className="mt-5 flex">
                    <input className="underline underline-offset-2" type="text" placeholder="Enter Your Email Address   " />
                    <p className="p-2">Subscribe</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer