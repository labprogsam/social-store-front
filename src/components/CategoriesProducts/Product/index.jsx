import styles from './styles.module.css';
import { useEffect, useState } from 'react';

function ProductCategory({ data }) {
  const [activeImage, setActiveImage] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (data?.images) {
      setActiveImage(data?.images[0])
    }
  }, [data]);

  return (
    <div className={styles.infos}>
      <div className={styles.imagens}>
        <img src={activeImage} id={styles.imagem_principal} />

        <div className={styles.thumbnail_container}>
          {data?.images?.map((image, index) => (
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
            <h1 className={styles.titulo_produto}>{data?.title?.toUpperCase()}</h1>
            <h2 className={styles.preco_produto}>R$ {data?.price?.toFixed(2).replace('.', ',')}</h2>
          </div>
          <p className={styles.description}>{data?.description}</p>
          <p className={styles.gray_text}>
            Feito carinhosamente por{' '}
            <a href={`/app/ongs/${data?.ong?.id}`} data-testid="link-ong" className={styles.ong_link}>
              {data?.ong?.name}
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
          <a href={`https://wa.me/${data?.ong?.whatsapp}?text=${encodeURIComponent(`Olá, me interessei pelo produto ${data?.title} e gostaria de comprar ${quantity} uni. Como podemos prosseguir?`)}`} target='_blank' data-testid="buy-button" className={styles.buyButton}>
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
  )
}

export default ProductCategory;