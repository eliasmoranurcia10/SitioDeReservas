

const FormOfertas = () => {
    return (
        <div>
            <h2 className='text-2xl font-bold mb-4'>Ofertas ♥</h2>
            <div className="grid grid-cols-6 gap-5">
                <div className="col-span-3 max-md:col-span-6">
                    <label className="float-left" htmlFor="lblProductos">Productos</label>
                    <select name="cbxProductos" id="lblProductos" className="bg-white text-red-950 block w-full p-1 border rounded-md">
                        <option value="0">Todos</option>
                        <option value="1">Circuito</option>
                        <option value="2">Paquete</option>
                    </select>
                </div>

                <div className="col-span-3 max-md:col-span-6">
                    <label className="float-left" htmlFor="lblOfertasDestino">Destinos</label>
                    <select name="cbxOfertasDestino" id="lblOfertasDestino" className="bg-white text-red-950 block w-full p-1 border rounded-md">
                        <option value="0">Todos los destinos</option>
                        <option value="1">Cancun</option>
                        <option value="2">Playa del Carmen</option>
                        <option value="3">Cozumel</option>
                        <option value="4">Tulum</option>
                    </select>
                </div>

                <div className="col-span-6">
                    <label className="float-left" htmlFor="lblProximoDestino">¿Tu próximo destino? </label>
                    <input type="text" name="txtProximoDestino" id="lblProximoDestino" className="bg-white text-red-950 block w-full p-1 border rounded-md"/>
                </div>
                
                <div className="col-span-6">
                    <button className="bg-red-600 text-white py-2 px-4 rounded-md w-full mt-4">Buscar</button>
                </div>
            </div>
        </div>
    );
}

export default FormOfertas;