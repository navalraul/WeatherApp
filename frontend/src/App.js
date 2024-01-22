// import logo from './logo.svg';
import './App.css';
import Forecast from './components/Forecast';
import Inputs from './components/Inputs';
import Temperature from './components/Temperature';
import TimeandLocation from './components/TimeandLocation';
import TopButtons from './components/TopButtons';
import getFormattedWeatherData from './services/weatherService';
// import UilReact from '@iconscout/react-unicons/icons/uil-react'

function App() {

  const fetchWeather = async () => {
    const data = await getFormattedWeatherData({q: "london"});
    console.log(data)
  };

  fetchWeather();



  return (
    <div className='mx-auto max-w-screen-md mt-4 py-0.5 px32 bg-gradient-to-br
     from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400'>
      <TopButtons />
      <Inputs />

      <TimeandLocation />
      <Temperature />
      <Forecast title= "hourly forecast" />
      <Forecast title= "daily forecast" />

    </div>
  );
}

export default App;
