

const FormHotel = () => {
    return (
        <div>
            <h2 className='text-2xl font-bold mb-4'>Reserva de Hotel</h2>
            <div className="grid grid-cols-5 gap-5">
                <div className="col-span-5">
                    <label className="float-left" htmlFor="lblDestinoHotel">Destino / Hotel * </label>
                    <input type="text" name="txtDestinoHotel" id="lblDestinoHotel" className="bg-white text-red-950 block w-full p-1 border rounded-md"/>
                </div>
                <div className="max-md:col-span-5">
                    <label className="float-left" htmlFor="lblCheckIn">Check-in</label>
                    <input type="date" name="txtCheckIn" id="lblCheckIn" className="bg-white text-red-950 block w-full p-1 border rounded-md"/>
                </div>
                <div className="max-md:col-span-5">
                    <label className="float-left" htmlFor="lblCheckOut">Check-out</label>
                    <input type="date" name="txtCheckOut" id="lblCheckOut" className="bg-white text-red-950 block w-full p-1 border rounded-md"/>
                </div>
                <div className="max-md:col-span-5">
                    <label className="float-left" htmlFor="cbxHabitaciones">Habitaciones</label>
                    <select name="cbxHabitaciones" id="cbxHabitaciones" className="bg-white text-red-950 block w-full p-1 border rounded-md">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
                <div className="max-md:col-span-5">
                    <label className="float-left" htmlFor="cbxAdultos">Adultos</label>
                    <select name="cbxAdultos" id="cbxAdultos" className="bg-white text-red-950 block w-full p-1 border rounded-md">
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

export default FormHotel;