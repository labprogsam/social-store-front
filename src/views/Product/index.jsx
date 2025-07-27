// src/views/Product/index.jsx

import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProductById } from '../../services/products'; // Nosso novo serviço
import styles from './styles.module.css'; // Nosso novo CSS

const ProductView = () => {
    // useParams pega os parâmetros da URL, no nosso caso, o `productId`
    const { productId } = useParams();

    const [product, setProduct] = useState(null);
    const [activeImage, setActiveImage] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [loading, setLoading] = useState(true);

    // useEffect será executado quando o componente for montado ou quando o productId mudar
    useEffect(() => {
        setLoading(true);
        const data = getProductById(productId);
        if (data) {
            setProduct(data);
            setActiveImage(data.images[0]);
        }
        setLoading(false);
    }, [productId]);

    // Exibindo uma mensagem de carregamento
    if (loading) {
        return <div className={styles.product_view_container}>Carregando...</div>;
    }

    // Exibindo uma mensagem caso o produto não seja encontrado
    if (!product) {
        return <div className={styles.product_view_container}><h1>Produto não encontrado!</h1></div>;
    }

    // Se o produto foi encontrado, renderizamos a página
    return (
        <div className={styles.product_view_container}>
            <div className={styles.infos}>
                {/* Lado Esquerdo: Imagens */}
                <div className={styles.imagens}>
                    <img src={activeImage} alt={product.title} id={styles.imagem_principal} />
                    <div className={styles.thumbnail_container}>
                        {product.images.map((image, index) => (
                            <img
                                key={index}
                                src={image}
                                alt={`Thumbnail ${index + 1} do produto ${product.title}`}
                                className={`${styles.thumbnail} ${activeImage === image ? styles.active : ''}`}
                                onClick={() => setActiveImage(image)}
                            />
                        ))}
                    </div>
                </div>

                {/* Lado Direito: Informações e Compra */}
                <div className={styles.infos_direita}>
                    <div className={styles.infos_produto}>
                        <div>
                            <h1 className={styles.titulo_produto}>{product.title}</h1>
                            <h2 className={styles.preco_produto}>R$ {product.price.toFixed(2).replace('.', ',')}</h2>
                            <p className={styles.description}>{product.description}</p>
                            <p className={styles.gray_text}>
                                Feito carinhosamente por{' '}
                                <Link to={`/ongs/${product.ong_id}`} className={styles.ong_link}>
                                    {product.ong}
                                </Link>
                            </p>
                        </div>
                    </div>

                    <div className={styles.purchaseControls}>
                        <button
                            className={styles.quantityMinus}
                            onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                            disabled={quantity <= 1}
                        >
                            —
                        </button>
                        <a
                            href={`https://wa.me/${product.phone}?text=${encodeURIComponent(`Olá, me interessei pelo produto ${product.title} e gostaria de comprar ${quantity} uni. Como podemos prosseguir?`)}`}
                            target='_blank'
                            rel="noopener noreferrer"
                            className={styles.buyButton}
                        >
                            Comprar {quantity} uni.
                        </a>
                        <button
                            className={styles.quantityPlus}
                            onClick={() => setQuantity(quantity + 1)}
                        >
                            +
                        </button>
                    </div>
                </div>
            </div>

            {/* Seção de Especificações e Categorias */}
            <div className={styles.specifications_section}>
                <h3 className={styles.specifications_title}>Especificações</h3>
                <div className={styles.specifications_content}>
                    <div className={styles.specifications_block}>
                        <h4>Dimensões:</h4>
                        <ul>
                            {product.specifications.dimensions.map((dim, i) => <li key={i}>- {dim}</li>)}
                        </ul>
                    </div>
                    <div className={styles.specifications_block}>
                        <h4>Materiais:</h4>
                        <ul>
                            {product.specifications.materials.map((mat, i) => <li key={i}>- {mat}</li>)}
                        </ul>
                    </div>
                </div>
                <div className={styles.categories_tags}>
                    <h4>Categorias:</h4>
                    {product.categories.map((cat, i) => <span key={i} className={styles.category_chip}>{cat}</span>)}
                </div>
            </div>
        </div>
    );
}

export default ProductView;