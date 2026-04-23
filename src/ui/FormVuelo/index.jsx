
const FormVuelo = () => {
    return (
        <div>
            <h2 className='text-2xl font-bold mb-4'>Reserva de Vuelo</h2>
            <div className="grid grid-cols-6 gap-5">
                <div className="col-span-4">
                    <label className="float-left" htmlFor="lblOrigenVuelo">Origen * </label>
                    <input type="text" name="txtOrigenVuelo" id="lblOrigenVuelo" className="bg-white text-red-950 block w-full p-1 border rounded-md"/>
                </div>
                <div className="col-span-2">
                    <label className="float-left" htmlFor="lblFechaSalida">Fecha de Salida</label>
                    <input type="date" name="txtFechaSalida" id="lblFechaSalida" className="bg-white text-red-950 block w-full p-1 border rounded-md"/>
                </div>
                <div className="col-span-4">
                    <label className="float-left" htmlFor="lblDestinoVuelo">Destino * </label>
                    <input type="text" name="txtDestinoVuelo" id="lblDestinoVuelo" className="bg-white text-red-950 block w-full p-1 border rounded-md"/>
                </div>
                <div className="col-span-2">
                    <label className="float-left" htmlFor="lblFechaRetorno">Fecha Retorno</label>
                    <input type="date" name="txtFechaRetorno" id="lblFechaRetorno" className="bg-white text-red-950 block w-full p-1 border rounded-md"/>
                </div>
                <div className="col-span-2">
                    <label className="float-left" htmlFor="cbxCantidadAdultos">Adultos {'(>12)'}</label>
                    <select name="cbxCantidadAdultos" id="cbxCantidadAdultos" className="bg-white text-red-950 block w-full p-1 border rounded-md">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
                <div className="col-span-2">
                    <label className="float-left" htmlFor="cbxCantidadNinos">Niños {'(2-11)'}</label>
                    <select name="cbxCantidadNinos" id="cbxCantidadNinos" className="bg-white text-red-950 block w-full p-1 border rounded-md">
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                    </select>
                </div>
                <div className="col-span-2">
                    <label className="float-left" htmlFor="cbxBebes">Bebés {'(<2)'}</label>
                    <select name="cbxBebes" id="cbxBebes" className="bg-white text-red-950 block w-full p-1 border rounded-md">
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                    </select>
                </div>
                <div className="max-md:col-span-5">
                    <label className="float-left" htmlFor="cbxNinos">Niños</label>
                    <select name="cbxNinos" id="cbxNinos" className="bg-white text-red-950 block w-full p-1 border rounded-md">
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                    </select>
                </div>
                <div className="col-span-5">
                    <button className="bg-red-600 text-white py-2 px-4 rounded-md w-full mt-4">Buscar</button>
                </div>
            </div>
        </div>
    );
}

export default FormVuelo;