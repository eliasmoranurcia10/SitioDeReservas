import Fondo from '../../assets/imagen-fondo.jpg';

const Main = () => {
    return (
        <>
            <div
            className="h-screen bg-cover bg-center"
            style={{ backgroundImage: `url(${Fondo})` }}
            ></div>
            
        </>
    );
}

export default Main;