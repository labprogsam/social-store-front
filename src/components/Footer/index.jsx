import logoPrefeitura from '../../assets/footer/logo-prefeitura.svg';
import instagram from '../../assets/footer/Instagram.svg';
import facebook from '../../assets/footer/Facebook.svg';
import twitter from '../../assets/footer/Twitter.svg'; 
import logoCin from '../../assets/footer/logo-cin.svg';
import Home from '../../assets/footer/Home.svg';
import telefone from '../../assets/footer/Telefone.svg';
import email from '../../assets/footer/Email.svg';

function Footer() {
    return (
        <footer className="bg-[#00AEEF] text-white px-6 py-8">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8 max-md:items-center">
                {/* Logo da Prefeitura e redes sociais */}
                <div className="ml-[10%] flex flex-col items-center max-md:m-auto">
                    <img
                        src={logoPrefeitura}
                        alt="Logo Prefeitura do Recife"
                        className="w-[160px] mb-4"
                    />
                    <p className="mb-2">Siga nossas redes</p>
                    <div className="flex space-x-4">
                        <img src={instagram} alt="Instagram" className="w-5 h-5" />
                        <img src={facebook} alt="Facebook" className="w-5 h-5" />
                        <img src={twitter} alt="Twitter" className="w-5 h-5" />
                    </div>
                </div>

                {/* Contato */}
                <div className="mr-[10%] max-md:m-auto">
                    <h3 className="font-bold mb-4 max-md:text-center">Contato</h3>
                    <ul className="space-y-2 text-sm">
                        <li className="flex items-center space-x-2">
                            <img src={email} alt="Email" className="w-4 h-4" />
                            <span>contato@gmail.com</span>
                        </li>
                        <li className="flex items-center space-x-2">
                            <img src={telefone} alt="Telefone" className="w-4 h-4" />
                            <span>(81) 9 9999-9999</span>
                        </li>
                        <li className="flex items-center space-x-2 max-w-[200px]">
                            <img src={Home} alt="Endereço" className="w-4 h-4" />
                            <span>Lorem ipsum dolor sit amet, consectetur adipiscing – 776</span>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Rodapé inferior */}
            <div className="border-t border-white mt-8 pt-4 text-sm flex flex-col md:flex-row justify-between items-center max-w-6xl m-auto">
                <p className='ml-[3%] max-md:text-center'>© 2025 Prefeitura do Recife. Todos os direitos reservados.</p>
                <div className="flex items-center gap-2-al mar">
                    <p>Developed by Centro de Informática UFPE</p>
                    <img
                        src={logoCin}
                        alt="Logo CIn UFPE"
                        className="w-[32.06px] h-[32.06px]"
                    />
                </div>
            </div>
        </footer>
    );
}


export default Footer;
