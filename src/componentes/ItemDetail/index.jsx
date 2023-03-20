function ItemDetail({product}) {
    return (
        <div className="container">
      <div className="detalle">
        <img className="imagenDeDetalle" src={product.image} />
        <div className="descripcion">
          <h1>{product.name}</h1>
        </div>
        <div>
            <p>{product.detalle}</p>
        </div>
        <div>
            <h3>{product.Precio}</h3>
        </div>
      </div>
    </div>
    )
}




export default ItemDetail;


