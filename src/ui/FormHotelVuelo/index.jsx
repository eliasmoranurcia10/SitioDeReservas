import { useState } from "react";

const FormHotelVuelo = () => {

    const [openHabitaciones, setOpenHabitaciones] = useState(false);
    const [openResidentes, setOpenResidentes] = useState(false);

    return (
        <div>
            <h2 className='text-2xl font-bold mb-4'>Reserva de Hotel + Vuelo</h2>
            <div className="grid grid-cols-6 gap-5">
                <div className="col-span-4 max-md:col-span-6">
                    <label className="float-left" htmlFor="lblOrigenVuelo">Origen * </label>
                    <input type="text" name="txtOrigenVuelo" id="lblOrigenVuelo" className="bg-white text-red-950 block w-full p-1 border rounded-md"/>
                </div>
                <div className="col-span-2 max-md:col-span-6">
                    <label className="float-left" htmlFor="lblCheckIn">Check-in</label>
                    <input type="date" name="txtCheckIn" id="lblCheckIn" className="bg-white text-red-950 block w-full p-1 border rounded-md"/>
                </div>
                
                <div className="col-span-2 max-md:col-span-6">
                    <label className="float-left" htmlFor="lblCheckOut">Check-out</label>
                    <input type="date" name="txtCheckOut" id="lblCheckOut" className="bg-white text-red-950 block w-full p-1 border rounded-md"/>
                </div>
                <div className="col-span-3 max-md:col-span-6">
                    <label className="float-left" htmlFor="lblCantidadAdultos">Adultos {'(>12)'}</label>
                    <select name="cbxCantidadAdultos" id="lblCantidadAdultos" className="bg-white text-red-950 block w-full p-1 border rounded-md">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
                <div className="col-span-3 max-md:col-span-6">
                    <label className="float-left" htmlFor="lblCantidadNinos">Niños {'(2-11)'}</label>
                    <select name="cbxCantidadNinos" id="lblCantidadNinos" className="bg-white text-red-950 block w-full p-1 border rounded-md">
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                    </select>
                </div>
                <div className="col-span-3 max-md:col-span-6">
                    
                    <div onClick={() => setOpenHabitaciones(!openHabitaciones)} className="flex items-center gap-2 border-b border-white cursor-pointer select-none">
                        <span className={`inline-block transition-transform duration-200 ${openHabitaciones ? 'rotate-90' : ''}`}>
                            ▶
                        </span>
                        <span className="font-medium" htmlFor="lblHabitaciones">
                            Habitaciones
                        </span>
                    </div>

                    <div className={`overflow-hidden transition-all duration-300 ${openHabitaciones ? 'max-h-40 mt-2' : 'max-h-0'}`} >
                        <select name="cbxHabitaciones" id="spnHabitaciones" className="bg-white text-red-950 block w-full p-1 border rounded-md">
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                        </select>
                    </div>
                </div>
                <div className="col-span-3 max-md:col-span-6">
                    
                    <div onClick={() => setOpenResidentes(!openResidentes)} className="flex items-center gap-2 border-b border-white cursor-pointer select-none">
                        <span className={`inline-block transition-transform duration-200 ${openResidentes ? 'rotate-90' : ''}`}>
                            ▶
                        </span>
                        <span className="font-medium" htmlFor="cbxResidentes">
                            Residentes
                        </span>
                    </div>

                    <div className={`overflow-hidden transition-all duration-300 ${openResidentes ? 'max-h-40 mt-2' : 'max-h-0'}`} >
                        <select name="cbxResidentes" id="spnResidentes" className="bg-white text-red-950 block w-full p-1 border rounded-md">
                            <option value="0">-Seleccionar-</option>
                            <option value="1">Residente en Melilla</option>
                            <option value="2">Residente en Ceuta</option>
                            <option value="3">Residente en Canarias</option>
                            <option value="4">Residente en Mallorca</option>
                            <option value="5">Residente en otras Islas</option>
                            <option value="6">Residente en el extranjero</option>
                        </select>
                    </div>
                </div>
                <div className="col-span-6">
                    <button className="bg-red-600 text-white py-2 px-4 rounded-md w-full mt-4">Buscar</button>
                </div>
            </div>
        </div>
    );
}


export default FormHotelVuelo;