import Rating from "./Rating"
import { Link} from "react-router-dom"

function Product(props){
    const {product} = props
    return(
        <div>
            <ul className = "row center">
        {product.products.map((product) => (
          <li>
             <div href="product.html">
               <a href= {"/product/" + product._id}>
                <img className="medium" src={product.image} alt="product"/>
               </a>
               <div className="card-body">
                <a href="product.html">
                    <h2>
                        Nike Slim Shirt
                    </h2>
                </a>
                <div className="rating"> 
                <Rating rating = {product.rating} numReviews={product.numReviews} ></Rating>
                </div>
                <div className="price">
                    ${product.price}
                </div>
               </div>
            </div>
          </li>
        ))}
    </ul>
        </div>
    )
}

export default Product