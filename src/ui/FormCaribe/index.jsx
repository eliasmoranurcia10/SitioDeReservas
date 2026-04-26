
const FormCaribe = () => {
    return (
        <div>
            <h2 className='text-2xl font-bold mb-4'>Caribe</h2>
            <div className="grid grid-cols-6 gap-5">
                <div className="col-span-6">
                    <label className="float-left" htmlFor="lblDestino">Destino</label>
                    <select name="cbxDestino" id="lblDestino" className="bg-white text-red-950 block w-full p-1 border rounded-md">
                        <option value="0">Todos los destinos</option>
                        <option value="1">Cancun</option>
                        <option value="2">Playa del Carmen</option>
                        <option value="3">Cozumel</option>
                        <option value="4">Tulum</option>
                    </select>
                </div>

                <div className="col-span-3 max-md:col-span-6">
                    <label className="float-left" htmlFor="lblMes">Mes</label>
                    <select name="cbxMes" id="lblMes" className="bg-white text-red-950 block w-full p-1 border rounded-md">
                        <option value="0">Todos los meses</option>
                        <option value="1">Abril 2026</option>
                        <option value="2">Mayo 2026</option>
                        <option value="3">Junio 2026</option>
                        <option value="4">Julio 2026</option>
                    </select>
                </div>

                <div className="col-span-3 max-md:col-span-6">
                    <label className="float-left" htmlFor="lblDuracion">Duración</label>
                    <select name="cbxDuracion" id="lblDuracion" className="bg-white text-red-950 block w-full p-1 border rounded-md">
                        <option value="0">7-8 días</option>
                        <option value="1">9-10 días</option>
                        <option value="2">11-12 días</option>
                        <option value="3">13-14 días</option>
                        <option value="4">15+ días</option>
                    </select>
                </div>
                
                <div className="col-span-6">
                    <button className="bg-red-600 text-white py-2 px-4 rounded-md w-full mt-4">Buscar</button>
                </div>
            </div>
        </div>
    );
}

export default FormCaribe;