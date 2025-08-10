import loader from '../../assets/loader.svg'
import './Loader.modules.scss'

export function Loader() {
    return <img className="loader" src={loader} alt="loader"></img>
}
