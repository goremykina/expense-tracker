import loader from '../../assets/loader.svg'
import './Loader.module.css'

export function Loader() {
    return <img className="loader" src={loader} alt="loader"></img>
}
