import styles from './styles.module.css';
import { useState } from 'react';

function ProductCategory() {
    const data = {
        "id": 12312,
        "title": "Boneca de Pano",
        "price": 85.00,
        "images": [
            "https://www.artesdaceci.com.br/Fotos/Media/Artes_da_Ceci_70-1445799758.jpg",
            "https://images.tcdn.com.br/img/img_prod/1162865/boneca_de_pano_jardim_encantado_rosa_p_15cm_1129_1_c06b727a251128e4bc5a7b21789f5b63.jpg",
            "https://images.tcdn.com.br/img/img_prod/655423/boneca_de_pano_roxa_violeta_19574_1_2b745fa8c0ce4d471688b01126f58aa4.jpg",
            "https://mooui.com.br/cdn/shop/files/boneco-encantada-mooui-min.jpg?v=1734458437"
        ],
        "ong": "Instituto Dia Melhor",
        "description": "Atirei o pau no gato Mas o gato não morreu Dona Chica admirou-se Do berro, do berro que o gato deu Miau!"
    }

    const [activeImage, setActiveImage] = useState(data.images[0]);
    const [quantity, setQuantity] = useState(1);

    return (
        <div className={styles.infos}>
            <div className={styles.imagens}>
                <img src={activeImage} id={styles.imagem_principal} />
                
                <div className={styles.thumbnail_container}>
                    {data.images.map((image, index) => (
                        <img 
                            key={index} 
                            src={image}
                            className={`${styles.thumbnail} ${activeImage === image ? styles.active : ''}`}
                            onClick={() => setActiveImage(image)}
                        />
                    ))}
                </div>
            </div>
            <div className={styles.infos_direita}>
                <div className={styles.infos_produto}>
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
                    <p className={styles.gray_text}>
                        Feito carinhosamente por{' '}
                        <a href={`/ongs/${data.ong_id}`} className={styles.ong_link}>
                            {data.ong}
                        </a>
                    </p>
                </div>
                <div className={styles.purchaseControls}>
                    <button 
                        className={styles.quantityMinus} 
                        onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                        disabled={quantity <= 1}
                    >
                        -
                    </button>
                    <button className={styles.buyButton}>
                        Comprar {quantity} uni.
                    </button>
                    <button 
                        className={styles.quantityPlus} 
                        onClick={() => setQuantity(quantity + 1)}
                    >
                        +
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProductCategory;