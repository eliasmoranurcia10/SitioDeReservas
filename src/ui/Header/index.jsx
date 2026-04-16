import person from '../../assets/person.svg';


const Header = () => {

    return (
        <header className='bg-red-600/60 text-white fixed top-0 right-0 left-0 h-25'>

            <div className='max-w-6xl mx-auto h-full border-b-4 border-white p-1'>
                <div className='flex flex-row h-full'>
                    <div className='basis-1/4 flex justify-center items-center h-full'>
                        <h1 className='font-serif lg:text-3xl'>Viajo por la Patilla</h1>
                    </div>
                    <div className='basis-3/4 flex flex-col justify-between max-md:hidden'>
                        <nav className='flex flex-row justify-end items-center gap-7'>
                            <div>
                                <select className='bg-red-600/60 text-white'>
                                    <option>€ EUR</option>
                                    <option>$ DOLAR</option>
                                    <option>S/. USD</option>
                                </select>
                            </div>
                            <div><p>+51 933212236</p></div>
                            <div>
                                <a href="#">
                                    <img src={person} alt="Person" />
                                </a>
                            </div>
                            <div><a href="#">FAQ</a></div>
                            <div><a href="#">TPV</a></div>
                        </nav>

                        <nav className='flex flex-row justify-end items-center gap-7'>
                            <a href="#">Inicio</a>
                            <a href="#">Vuelos</a>
                            <a href="#">Vuelo+Hotel</a>
                            <a href="#">Hoteles</a>
                            <a href="#">Caribe</a>
                            <a href="#">Coches</a>
                            <a href="#">Ofertas</a>
                            <a href="#">+Productos</a>
                        </nav>
                    </div>
                    <div className='md:hidden fixed top-5 right-3 p-auto'>
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;