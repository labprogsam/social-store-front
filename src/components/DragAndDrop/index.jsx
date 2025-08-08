import { useCallback } from 'react';
import FileUpload from '../../assets/OngProducts/upload-icon.svg'
import {
  StyledDragAndDrop,
  StyledImg,
  StyledInput
} from './styles.js';

function ImageDropZone({ noText, name, image, setImage, id }) {

  const handleDrop = useCallback((e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = () => setImage(reader.result);
      reader.readAsDataURL(file);
    }
  }, []);

  const handleDragOver = (e) => {
    e.preventDefault(); // Permite o drop
  };

  return (
    <StyledDragAndDrop
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      className={name}
      htmlFor={`fileInput-${id}`}
      data-testid={`image-dropzone-${id}`}
    >
      {image ? (
        <></>
      ) : (
        <img className='downloader' src={FileUpload} alt="icone de download" />
      )}
      {image ? (
        <StyledImg src={image} alt="Preview" />
      ) : (
        !noText && <p>Arraste ou clique para enviar a imagem principal!</p>
      )}
      <StyledInput
        type="file"
        data-testid="input-file"
        accept="image/*"
        onChange={(e) => {
          const file = e.target.files[0];
          if (file) {
            const reader = new FileReader();
            reader.onload = () => setImage(reader.result);
            reader.readAsDataURL(file);
          }
        }}
        id={`fileInput-${id}`}
      />
    </StyledDragAndDrop>
  );
}

export default ImageDropZone;
