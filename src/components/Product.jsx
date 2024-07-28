import "./css/styleproduct.css"

const Product = (props) => {
    const {product} = props
    return (
        <>
            <p className="flex justify-center text-fontColor text-4xl font-semibold mt-6">Our Product</p>
            <div className="grid grid-cols-4 gap-6 m-12">
            {product.map((item, index) => (
                    <div className="card grid gap-4 bg-customGrey" >
                        <img className="img" src={item.image} alt="img" />
                        <div className="m-2">
                            <p className= "font-bold"key = {index}>{item.name}</p>
                            <p className="text-customGreyFont text-sm mt-3" key = {index}>{item.detailName}</p>
                            <p className= "font-bold mt-3" key = {index}>Rp. {item.price}</p>
                        </div>
                    </div>
            ))}
            </div>
            <div className="flex justify-center">
                <button className="outline font-semibold text-primary py-1 px-6">Show More</button>
            </div>
        </>
    )
}
// 

export default Product;