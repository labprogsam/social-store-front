import styles from './styles.module.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

function ProductCategory({ data }) {
  const [activeImage, setActiveImage] = useState(data.images[0]);
  const [quantity, setQuantity] = useState(1);
  const [ongName, setOngName] = useState('...'); // Estado para o nome da ONG

  useEffect(() => {
    const fetchOngName = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/api/ongs/${data.ongId}`);
        setOngName(response.data.name); // Assume que a API retorna um objeto com a propriedade 'name'
      } catch (error) {
        console.error('Erro ao buscar nome da ONG:', error);
        setOngName('ONG não encontrada');
      }
    };

    fetchOngName();
  }, [data.ongId]); // O useEffect roda novamente se o ongId mudar

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
            <a href={`/app/ongs/${data.ongId}`} data-testid="link-ong" className={styles.ong_link}>
              {ongName}
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
          <a href={`https://wa.me/${data.phone}?text=${encodeURIComponent(`Olá, me interessei pelo produto ${data.title} e gostaria de comprar ${quantity} uni. Como podemos prosseguir?`)}`} target='_blank' data-testid="buy-button" className={styles.buyButton}>
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
  );
}

export default ProductCategory;