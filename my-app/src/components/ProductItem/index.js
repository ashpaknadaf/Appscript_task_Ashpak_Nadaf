import { LiaDollarSignSolid } from "react-icons/lia";
import { useState } from "react";
import { GoHeart } from "react-icons/go";
import "./index.css"

const ProductItem = props => {
    const { data } = props 
    const {title, price, description,  image} = data
    const [isLike, setLike ] = useState(false)
    
    const likeBtnClasname = isLike ? "liked" : "dislike"
    const onClickLike = () => {
        setLike(!isLike)
    }
    return (
        <div className="product-item-container">
             <img 
                src ={image}
                className="product-image"
                alt="product-image"
                />            
            <div>
              <div>
                <h1 className="product-name">{title}</h1>
                <p className="product-description">{description}</p>
                <div className="price-like-container">
                    <div className="price-container">
                    <LiaDollarSignSolid className="dollar-icon"/>
                    <p className="product-price">{price}</p>
                    </div>
                    <GoHeart className= {likeBtnClasname} onClick={onClickLike} />
                </div>
              </div>
              
            </div>

        </div>
    )
}

export default ProductItemfirst