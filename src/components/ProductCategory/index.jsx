
function ProductCategory() {
    const data = {
        "id": 12312,
        "title": "Boneca de Pano",
        "price": 85.00,
        "images": [
            "https://image1.com",
            "https://image2.com",
            "https://image3.com"
        ],
        "ong": "Instituto Dia Melhor",
        "description": "dask oaskd oaksod akso dkaso dkaso kda"
    }

    return (
        <div>
            <h2>{data.title}</h2>
            <p>{data.description}</p>
            <p>Feito cariosamente por {data.ong}</p>
        </div>
    )
}

export default ProductCategory;
