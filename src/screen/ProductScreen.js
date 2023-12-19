
import product from "../data"
import Rating from "../component/Rating"

function ProductScreen(props){
    var productId = props.match.params.id

    var item = product.products.find((x) => x._id == productId)

    console.log(item)

    return(
        <div className="product_data">
           <div className="product_first"><img src={item.image}></img></div>
           <div className="product_second">
            <ul>
                <li> <Rating rating = {item.rating} numReviews={item.numReviews} ></Rating></li>
            </ul>
           </div>
           <div className="product_third">3</div>
        </div>
    )
}

export default ProductScreen