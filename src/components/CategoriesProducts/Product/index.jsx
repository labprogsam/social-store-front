import styles from './styles.module.css';
import { useState } from 'react';

function ProductCategory({data}) {
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
          <div>
            <h1 className={styles.titulo_produto}>{data.title.toUpperCase()}</h1>
            <h2 className={styles.preco_produto}>R$ {data.price.toFixed(2).replace('.', ',')}</h2>
          </div>
          <p className={styles.description}>{data.description}</p>
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
            —
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