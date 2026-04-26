
const Beneficios = () => {
    return (
        <div className='max-w-6xl mx-auto m-10'>
            <div className="flex flex-col md:flex-row justify-center items-center gap-6">
                <div className="bg-white shadow-xl/30 rounded-xl p-6 text-center max-w-sm">
                    <div className="text-4xl mb-4">📞</div>
                    <p className="mb-4">Ofrecemos soporte 24h en destino los 365 dias del año sin coste alguno para nuestros clientes.</p>
                    <button className="bg-red-600 text-white px-4 py-2 rounded">VIAJA SEGURO</button>
                </div>
                <div className="bg-white shadow-xl/30 rounded-xl p-6 text-center max-w-sm">
                    <div className="text-4xl mb-4">👍</div>
                    <p className="mb-4">Encuentra las mejores promociones y reserva tu viaje de forma rápida, segura y sencilla</p>
                    <button className="bg-red-600 text-white px-4 py-2 rounded">CONFIRMACIÓN INMEDIATA</button>
                </div>
                <div className="bg-white shadow-xl/30 rounded-xl p-6 text-center max-w-sm">
                    <div className="text-4xl mb-4">💳</div>
                    <p className="mb-4">Aplaza tus pagos, no tus vacaciones. Financiamos tu compra hasta en 9 cuotas</p>
                    <button className="bg-red-600 text-white px-4 py-2 rounded">BOTON APLAZADO</button>
                </div>
            </div>
        </div>
    );
}

export default Beneficios;