
const FormCoches = () => {
    return (
        <div>
            <h2 className='text-2xl font-bold mb-4'>Coches</h2>
            <div className="grid grid-cols-6 gap-5">
                <div className="col-span-2 max-md:col-span-6">
                    <label className="float-left" htmlFor="lblLugarRecogida">Elige un lugar de recogida * </label>
                    <input type="text" name="txtLugarRecogida" id="lblLugarRecogida" className="bg-white text-red-950 block w-full p-1 border rounded-md"/>
                </div>
                <div className="col-span-2 max-md:col-span-6">
                    <label className="float-left" htmlFor="lblFechaSalida">Fecha de entrada</label>
                    <input type="date" name="txtFechaSalida" id="lblFechaSalida" className="bg-white text-red-950 block w-full p-1 border rounded-md"/>
                </div>
                <div className="col-span-2 max-md:col-span-6">
                    <label className="float-left" htmlFor="lblHoraRecogida">Hora de recogida</label>
                    <select name="cbxHoraRecogida" id="lblHoraRecogida" className="bg-white text-red-950 block w-full p-1 border rounded-md">
                        <option value="1">8:00 AM</option>
                        <option value="2">9:00 AM</option>
                        <option value="3">10:00 AM</option>
                        <option value="4">11:00 AM</option>
                        <option value="5">12:00 PM</option>
                        <option value="6">1:00 PM</option>
                        <option value="7">2:00 PM</option>
                        <option value="8">3:00 PM</option>
                        <option value="9">4:00 PM</option>
                        <option value="10">5:00 PM</option>
                        <option value="11">6:00 PM</option>
                        <option value="12">7:00 PM</option>
                    </select>
                </div>

                <div className="col-span-2 max-md:col-span-6">
                    <label className="float-left" htmlFor="lblLugarEntrega">Elige un lugar de entrega * </label>
                    <input type="text" name="txtLugarEntrega" id="lblLugarEntrega" className="bg-white text-red-950 block w-full p-1 border rounded-md"/>
                </div>
                <div className="col-span-2 max-md:col-span-6">
                    <label className="float-left" htmlFor="lblFechaEntrega">Fecha de entrega</label>
                    <input type="date" name="txtFechaEntrega" id="lblFechaEntrega" className="bg-white text-red-950 block w-full p-1 border rounded-md"/>
                </div>
                <div className="col-span-2 max-md:col-span-6">
                    <label className="float-left" htmlFor="lblHoraEntrega">Hora de entrega</label>
                    <select name="cbxHoraEntrega" id="lblHoraEntrega" className="bg-white text-red-950 block w-full p-1 border rounded-md">
                        <option value="1">8:00 AM</option>
                        <option value="2">9:00 AM</option>
                        <option value="3">10:00 AM</option>
                        <option value="4">11:00 AM</option>
                        <option value="5">12:00 PM</option>
                        <option value="6">1:00 PM</option>
                        <option value="7">2:00 PM</option>
                        <option value="8">3:00 PM</option>
                        <option value="9">4:00 PM</option>
                        <option value="10">5:00 PM</option>
                        <option value="11">6:00 PM</option>
                        <option value="12">7:00 PM</option>
                    </select>
                </div>

                <div className="col-span-6">
                    <label className="float-left" htmlFor="lblEdadConductor">Edad del conductor</label>
                    <input type="number" name="txtEdadConductor" id="lblEdadConductor" className="bg-white text-red-950 block w-full p-1 border rounded-md"/>
                </div>
            
                
                <div className="col-span-6">
                    <button className="bg-red-600 text-white py-2 px-4 rounded-md w-full mt-4">Buscar</button>
                </div>
            </div>
        </div>
    );
}

export default FormCoches;