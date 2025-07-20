function ForecastBox({ weather }) {
    const getWeekday = (dateStr) => {
        const date = new Date(dateStr);
        return date.toLocaleDateString('en-US', { weekday: 'long' });
    };

    return (
        <div className='flex justify-evenly flex-col w-[317px] h-[240px] bg-white/[0.2] backdrop-blur-md rounded-[36px]'>
            <div className='p-2 m-4 bg-[#3f6294] rounded-full h-1/2 outline outline-[1.5px] 
            outline-white/20 bg-gradient-to-tr from-pink-300/90 to-cyan-300/80 
            backdrop-blur-2xl flex flex-row justify-between text-center items-center'>
                <p className="ml-2 text-white">Today</p>
                <p className="mr-2 text-white">{weather.current.temp_c}°C</p>
            </div>
            <div className='p-2 m-4 bg-[#3f6294] rounded-full h-1/2 outline outline-[1.5px] 
            outline-white/20 bg-gradient-to-tr from-pink-300/90 to-cyan-300/80 
            backdrop-blur-2xl flex flex-row justify-between text-center items-center'>
                <p className="ml-2 text-white">{getWeekday(weather.forecast.forecastday[1].date)}</p>
                <p className="mr-2 text-white">{weather.forecast.forecastday[1].day.avgtemp_c}°C</p>
            </div>
            <div className='p-2 m-4 bg-[#3f6294] rounded-full h-1/2 outline outline-[1.5px] 
            outline-white/20 bg-gradient-to-tr from-pink-300/90 to-cyan-300/80 
            backdrop-blur-2xl flex flex-row justify-between text-center items-center'>
                <p className="ml-2 text-white">{getWeekday(weather.forecast.forecastday[2].date)}</p>
                <p className="mr-2 text-white">{weather.forecast.forecastday[2].day.avgtemp_c}°C</p>
            </div>
        </div>
    );
}

export default ForecastBox;

