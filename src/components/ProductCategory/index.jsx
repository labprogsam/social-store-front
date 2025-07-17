import styles_category from './ProductCategory.module.css';
import styles_product from './Product.module.css'
import { useState } from 'react';
import setaAzul from '../../assets/ProductCategory/botão-seta.svg';
import carrinhoIcon from '../../assets/ProductCategory/carrinho-icon.svg';

function ProductCategory({ isCategoryView = false }) {
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
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and ..."
    }

    const [activeImage, setActiveImage] = useState(data.images[0]);
    const [quantity, setQuantity] = useState(1);

    if (!isCategoryView) {
        return (
            <div className={styles_product.infos}>
                <div className={styles_product.imagens}>
                    <img src={activeImage} id={styles_product.imagem_principal} />
                    
                    <div className={styles_product.thumbnail_container}>
                        {data.images.map((image, index) => (
                            <img 
                                key={index} 
                                src={image}
                                className={`${styles_product.thumbnail} ${activeImage === image ? styles_product.active : ''}`}
                                onClick={() => setActiveImage(image)}
                            />
                        ))}
                    </div>
                </div>
                
                <div className={styles_product.infos_direita}>
                    <div className={styles_product.infos_produto}>
                        <div>
                            <h1>{data.title.toUpperCase()}</h1>
                            <h2>R$ {data.price.toFixed(2).replace('.', ',')}</h2>
                        </div>
                        <div>
                            <p className={styles_product.description}>{data.description}</p>
                            <p className={styles_product.gray_text}>
                                Feito carinhosamente por{' '}
                                <a href={`/ongs/${data.ong_id}`} className={styles_product.ong_link}>
                                    {data.ong}
                                </a>
                            </p>
                        </div>
                    </div>
                    
                    <div className={styles_product.buttons}>
                        <button className={styles_product.botão_quantidade}>
                            Quantidade: {quantity}
                            <img 
                                src={setaAzul} 
                                alt="Seta" 
                                className={styles_product.icone_seta}
                            />
                        </button>
                        <button className={styles_product.botão_compra}>Comprar</button>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className={styles_category.infos}>
            <div className={styles_category.imagens}>
                <img src={activeImage} id={styles_category.imagem_principal} />
                
                <div className={styles_category.thumbnail_container}>
                    {data.images.map((image, index) => (
                        <img 
                            key={index} 
                            src={image}
                            className={`${styles_category.thumbnail} ${activeImage === image ? styles_category.active : ''}`}
                            onClick={() => setActiveImage(image)}
                        />
                    ))}
                </div>
            </div>
            
            <div className={styles_category.infos_direita}>
                <div className={styles_category.infos_produto}>
                    <h1>{data.title.toUpperCase()}</h1>
                    <h2>R$ {data.price.toFixed(2).replace('.', ',')}</h2>
                    <p className={styles_category.description}>{data.description}</p>
                    <p className={styles_category.gray_text}>
                        Feito carinhosamente por{' '}
                        <a href={`/ongs/${data.ong_id}`} className={styles_category.ong_link}>
                            {data.ong}
                        </a>
                    </p>
                </div>
                
                <div className={styles_category.purchaseControls}>
                    <button 
                        className={styles_category.quantityMinus} 
                        onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                        disabled={quantity <= 1}
                    >
                        —
                    </button>
                    <button className={styles_category.buyButton}>
                        Comprar {quantity} uni.
                    </button>
                    <button 
                        className={styles_category.quantityPlus} 
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