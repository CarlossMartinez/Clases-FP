import {FaStar} from "react-icons/fa6";

import {calculateDiscountPrice} from "../utils/discount.js";

export default function Card({deleteArticle,id,name,description,price,stars,image,discount}){
    let arrayStars = [];
    for(let i=0; i<5; i++){
        arrayStars.push(<FaStar key={i} className={i<stars?"fa-star":"grey-star"}/>)
    }

    return(
        <article className="card">
            {discount>=50 && <div className="offer">{discount} %</div>}
            <div className="info-1">
                <img src={"./assets/images/products/"+image} alt={name}/>
                <h3>{name}</h3>
                <h4>{description}</h4>
            </div>
            <div className="info2">
                <div className="showcase-rating">
                    {arrayStars}
                </div>
                <div className="price-box">
                {discount?<p className="price">{price.toFixed(2)} &euro; <del>{calculateDiscountPrice(price,discount,2)} &euro;</del> </p>:
                    <p className="price">{price.toFixed(2)} &euro;</p>}
                <button>Add</button>&nbsp;
                <button onClick={() => deleteArticle(id)}>Delete</button>
                </div>
            </div>
        </article>
    )
}


