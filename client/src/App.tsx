import './App.css'
import { DatePicker } from './components/DatePicker'
import { Header } from './components/Header'
import { Icon } from './components/Icon'
import { Input } from './components/Input'
import { InputLabel } from './components/InputLabel'
import { Loader } from './components/Loader'
import { Button } from "./components/Button";

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
                    value={'123123'}
                    leftIcon={'search'}
                    rightIcon={'arrow'}
                />
            </>

            <Button
                text={'Sign in'}
                disabled={false}
                width={'full-width'}
                onClick={(e) => e.preventDefault()}
            />
        </div>
    )
}

export default App
