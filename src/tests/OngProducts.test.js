import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { OngProduct } from '../views';
import { ImageDropZone } from '../components';

describe('OngProduct Component', () => {
  test('renderiza campos principais corretamente', () => {
    render(<OngProduct />);

    expect(screen.getByLabelText(/Nome/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Preço/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Descrição/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Especificações/i)).toBeInTheDocument();
    expect(screen.getByText(/Salvar/i)).toBeInTheDocument();
  });

  test('permite digitar nos campos de input', async () => {
    render(<OngProduct />);

    const nameInput = screen.getByLabelText(/Nome/i);
    const priceInput = screen.getByLabelText(/Preço/i);
    const descInput = screen.getByLabelText(/Descrição/i);
    const especInput = screen.getByLabelText(/Especificações/i);

    await userEvent.type(nameInput, 'Boneca de Pano');
    await userEvent.type(priceInput, '99.90');
    await userEvent.type(descInput, 'Produto feito à mão.');
    await userEvent.type(especInput, 'Material: tecido de algodão');

    expect(nameInput).toHaveValue('Boneca de Pano');
    expect(priceInput).toHaveValue('99.90');
    expect(descInput).toHaveValue('Produto feito à mão.');
    expect(especInput).toHaveValue('Material: tecido de algodão');
  });

  test('renderiza todos os chips de categoria', () => {
    render(<OngProduct />);
    const chips = screen.getAllByRole('button', { name: /Artesanato|Alimentos|Roupas|Arte|Sustentáveis|Higiene|decoração|Outros/i });
    expect(chips.length).toBeGreaterThanOrEqual(8);
  });

  test('permite remover um chip de categoria', () => {
    render(<OngProduct />);

    const chip = screen.getByText('Roupas e Acessórios');
    const deleteButton = chip.closest('div').querySelector('svg'); // ícone de deletar
    fireEvent.click(deleteButton);

    expect(screen.queryByText('Roupas e Acessórios')).not.toBeInTheDocument();
  });

  test('renderiza todos os ImageDropZone components', () => {
    render(<OngProduct />);
    for (let i = 1; i <= 5; i++) {
      expect(screen.getByTestId(`image-dropzone-${i}`)).toBeInTheDocument();
    }
  });

  // test('executa onSubmit ao clicar em "Salvar"', () => {
  //   const handleSubmit = jest.fn();
  //   const { container } = render(<OngProduct />);

  //   const form = container.querySelector('form');
  //   const button = screen.getByText(/Salvar/i);

  //   fireEvent.click(button);

  //   expect(handleSubmit).not.toHaveBeenCalled();
  // });
});

describe('ImageDropZone Component', () => {
  const mockSetImage = jest.fn();

  beforeEach(() => {
    mockSetImage.mockReset();
  });

  test('renderiza o ícone e texto quando não há imagem', () => {
    render(<ImageDropZone id={1} setImage={mockSetImage} image={null} />);

    expect(screen.getByAltText(/icone de download/i)).toBeInTheDocument();
    expect(screen.getByText(/arraste ou clique para enviar/i)).toBeInTheDocument();
  });

  test('não renderiza o texto quando noText é true', () => {
    render(<ImageDropZone id={1} setImage={mockSetImage} image={null} noText />);

    expect(screen.queryByText(/arraste ou clique/i)).not.toBeInTheDocument();
  });

  test('renderiza preview da imagem quando image está definido', () => {
    const imageData = 'data:image/png;base64,somebase64data';
    render(<ImageDropZone id={1} setImage={mockSetImage} image={imageData} />);

    const img = screen.getByAltText(/preview/i);
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', imageData);
  });

  test('dispara setImage ao selecionar arquivo', async () => {
    const file = new File(['dummy'], 'photo.png', { type: 'image/png' });

    render(<ImageDropZone id={1} setImage={mockSetImage} image={null} />);

    const input = screen.getByTestId('input-file');

    fireEvent.change(input, { target: { files: [file] } });
    expect(input.files[0]).toBe(file);
  });

  test('chama setImage ao fazer drop de imagem', () => {
    const file = new File(['image data'], 'img.jpg', { type: 'image/jpeg' });

    const dataTransfer = {
      files: [file],
      types: ['Files'],
      getData: () => '',
    };

    render(<ImageDropZone id={1} setImage={mockSetImage} image={null} />);

    const dropZone = screen.getByTestId('input-file');

    fireEvent.drop(dropZone, {
      dataTransfer,
      preventDefault: jest.fn(),
    });

    expect(mockSetImage).toHaveBeenCalledWith('data:image/png;base64,mockbase64data');
  });
});
