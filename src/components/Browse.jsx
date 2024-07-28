import  "./css/stylebrowsepage.css"
function Browse (props) {
    const {browseData} = props
    return (
        <>
        <div className="mt-10 font-poppins">
            <p className="flex justify-center text-fontColor text-4xl font-semibold">Browse The Range</p>
            <p className="flex justify-center mt-2 text-customBlackThin text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="browse-height mt-5 flex justify-around">
            {browseData.map((item, key) => (
                <div className=""> 
                    <img className = "img rounded-md" src={item.image} alt="" />
                    <p className="flex justify-center mt-3 font-semibold text-lg">{item.name}</p>
                </div>
            ))}
        </div>
        </>
    )
}

export default Browse