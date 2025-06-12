
function ProductsHightlights() {
    const data = [
        {
            "nome": "Produto 1"
        }
    ]
    return (
        <section>
            <p>-----------------------------</p>
            <h1>Produtos em destaque</h1>
            <div>{data.map((item) => (
                <p>{item.nome}</p>
            ))}</div>
            <p>-----------------------------</p>
        </section>
    )
}

export default ProductsHightlights;
