
function ProductCategory({data}) {
    return (
        <div style={{minWidth: '100%', minHeight: '300px', backgroundColor: 'red', marginBottom: '50px'}}>
            <h2>{data.title}</h2>
            <p>{data.description}</p>
            <p>Feito cariosamente por {data.ong}</p>
        </div>
    )
}

export default ProductCategory;
