function ItemCard (product){

return (
  <div className="container">
            <div className="detalle">
                <img className="imagenDeDetalle" src={product.image} />
                <div className="descripcion">
                    <h1>{product.name}</h1>
                </div>
            </div>
        </div>

)
};

export default ItemCard;