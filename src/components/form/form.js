import './form.css';

const Form = (props) => {
    return (
        <form onSubmit={props.weatherData}>
            <input type="text" name="city" placeholder="City" />
            <button>Get weather</button>
        </form>
    )
}

export default Form;