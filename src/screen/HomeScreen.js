
import product from "../data"
import Product from "../component/Product"
function HomeScreen(){
    return(
        <div>
             <Product product= {product}></Product>
        </div>
    )
}

export default HomeScreen