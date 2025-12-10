import Card from "./Card.jsx";

export default function Main({products, deleteArticle}){
    return(
        <main>
            <section className="hero">
                <h3>Trending item</h3>
                <h2>Women's <br />latest fashion sale</h2>
                <h4>starting at <span className="number">20</span>.00 &euro;</h4>
                <button>SHOP NOW</button>
            </section>

            <h2>New Products</h2>
            <section className="product-grid">
                {products.map(product =>
                    <Card key={product.id} deleteArticle={deleteArticle} {...product}/>
                )}
            </section>
        </main>
    )
}