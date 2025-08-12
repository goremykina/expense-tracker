import './App.css'
import { DatePicker } from './components/DatePicker'
import { Header } from './components/Header'
import { Icon } from './components/Icon'
import { Input } from './components/Input'
import { InputLabel } from './components/InputLabel'
import { Loader } from './components/Loader'

function App() {
    return (
        <div>
            <Header />
            <Icon iconName="bell" size={15} />
            <Loader />
            <DatePicker />

            <>
                <InputLabel htmlFor='user'/>
                <Input
                    placeholder='Text input'
                    helperText='Caption'
                    id={'user'}
                />
            </>
        </div>
    )
}

export default App
