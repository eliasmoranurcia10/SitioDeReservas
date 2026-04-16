import { useState } from 'react';
import TopBar from '../TopBar';
import NavBar from '../NavBar';


const Header = () => {

    const [open, setOpen] = useState(false);

    return (
        <>
        <header className='bg-red-600/60 text-white fixed top-0 right-0 left-0 h-25'>

            <div className='max-w-6xl mx-auto h-full border-b-4 border-white p-1'>
                <div className='flex flex-row h-full'>
                    <div className='basis-1/4 flex justify-center items-center h-full'>
                        <h1 className='font-serif lg:text-3xl'>Viajo por la Patilla</h1>
                    </div>
                    <div className='basis-3/4 flex flex-col justify-between max-md:hidden'>
                        <nav className='flex flex-row justify-end items-center gap-7'>
                            <TopBar />                        
                        </nav>

                        <nav className='flex flex-row justify-end items-center gap-7'>
                            <NavBar />
                        </nav>
                    </div>
                    <div className='md:hidden fixed top-5 right-3 p-auto'>
                        <button onClick={() => setOpen(true)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                                <path d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </header>
        
        <div
            onClick={() => setOpen(false)}
            className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${open ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        />

        <div
            className={`fixed top-0 right-0 h-full w-64 bg-white z-50 transform transition-transform duration-300 
            ${open ? 'translate-x-0' : 'translate-x-full'}`}
        >
            <div className='p-4 flex justify-between bg-red-950 text-white border-b border-white'>
                <h2 className='font-bold'>Menú</h2>
                <button onClick={() => setOpen(false)}>✕</button>
            </div>

            <nav className='flex flex-row content-center items-start gap-3 bg-red-950 text-white text-xs p-4 border-b border-white '>
                <TopBar />
            </nav>

            <nav className='flex flex-col p-4 gap-4 bg-red-950 text-white h-full'>
                <NavBar />
            </nav>
        </div>

        </>
    );
}

export default Header;