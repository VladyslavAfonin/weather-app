import './weather.css';

const Weather = (props) => {
    return (
        <div className='infoWeath'>
            {props.city && 
                <div>
                    <p>Location: {props.city}, {props.country}</p>
                    <p>Temperature: {props.temp}</p>
                    <p>Pressure: {props.pressure}</p>
                    <p>Sunset time: {props.sunset}</p>
                </div>
            }
            <p className='error'>{props.error }</p>
        </div>
    )
}

export default Weather;