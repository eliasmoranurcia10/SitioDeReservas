import Fondo from '../../assets/imagen-fondo.jpg';
import CardFormularios from '../CardFormularios';

const Inicio = () => {
    return (
        <>
            <div
            className="h-screen bg-cover bg-center flex flex-col justify-center items-center text-white text-center gap-5"
            style={{ backgroundImage: `url(${Fondo})` }}
            >
                <h1 className='text-6xl font-sans mt-50 font-bold max-md:text-2xl text-shadow-lg/30'>Financia tu hotel y vuelo con Aplázame</h1>
                <h3 className='text-2xl text-shadow-lg/30 font-bold max-md:text-xs'>¡Aplaza el pago, no tus vacaciones! Hotel, vuelo, excursiones, viajes.. Y ahora Brasil a tu alcance!!</h3>
                <button className='bg-red-600 text-white py-2 mt-6 mb-6 px-6 font-bold border-2 border-white hover:bg-white hover:text-red-600'>
                    Ver más
                </button>

                <CardFormularios />
            </div>
            
        </>
    );
}

export default Inicio;