function SearchField({ city, setCity, handleKeyPress, getWeather }) {
    return (
        <div className='flex justify-between flex-row items-center mt-5'>
            <input type='text' onChange={(e) => setCity(e.target.value)} onKeyDown={handleKeyPress} value={city} placeholder='Enter a City' className='placeholder-black p-2 m-1 rounded-l-2xl bg-gray-400/[0.5] backdrop-blur-md text-stone-950'></input>
            <button className='p-2 m-1 bg-blue-500 rounded-r-2xl' onClick={getWeather}>Search</button>
        </div>
    );
}

export default SearchField;