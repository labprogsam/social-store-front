import homeBanner from '../../assets/homeBanner/homeBanner.png';


function HomeBanner() {
    return (
        <section
        className='h-80'
        style={{
        backgroundImage: `url(${homeBanner})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    }}
    >
        <div className="ml-8 pt-10 text-3xl text-bl text-[#0B236D]">
            <b>Compre</b> com propósito, <b>transforme</b> vidas.
        </div>

        <div className="ml-8 text-4xl text-bl text-[#0B236D]">
            <b>transforme</b> vidas.
        </div>

        {/* Botão de Saiba Mais */}
        <button className="bg-[#009FE3] text-white px-10 mt-36 ml-10 py-2 rounded-lg hover:bg-[#2382aa] transition duration-300">
            Saiba Mais
        </button>

        </section>
    );
}

export default HomeBanner;
