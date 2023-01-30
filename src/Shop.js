function Shop({itemsForSale}) {
    return(
        <div className="products">
            {itemsForSale.map((element=>{
                const {id, name, searchTerm, price, image}=element;
                return <div className="product-card" key={id}>
                    <img src={image} width="400px" height='500px' alt="clothes"/>
                    <div className="product-info">
                    <p>{name}</p>
                    <p>${price}</p>
                    <p>{searchTerm}</p>
                    
                    </div>
                </div>
            }))}
        </div>
    )
}

export default Shop;