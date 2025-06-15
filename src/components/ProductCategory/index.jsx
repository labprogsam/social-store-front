import styles from './styles.module.css';

function ProductCategory() {
    const data = {
        "id": 12312,
        "title": "Boneca de Pano",
        "price": 85.00,
        "images": [
            "https://www.artesdaceci.com.br/Fotos/Media/Artes_da_Ceci_70-1445799758.jpg",
            "https://image2.com",
            "https://image3.com"
        ],
        "ong": "Instituto Dia Melhor",
        "description": "Atirei o pau no gato Mas o gato não morreu Dona Chica admirou-se Do berro, do berro que o gato deu Miau! Atirei o pau no gato Mas o gato não morreu Dona Chica admirou-se Do berro, do berro que o gato deu Miau! Miau miau miau Miau miau miau Miau miau miau Miau miau miau Miau miau miau Miau miau miau Miau miau miau"
    }

    return (
        <div className={styles.infos_esquerda}>

            <img src = {data.images[0]}/>

            <div className = {styles.infos_verticais}>

                <h1>

                    <strong>

                        {data.title} 

                    </strong>

                </h1>

                <h2>

                    <strong>

                        R$ {data.price},00

                    </strong>

                </h2>

                <p className={styles.description}>

                    {data.description}
                    
                </p>

            </div>
            
        </div>
    )
}

export default ProductCategory;
