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

            <div className={'app-container'}>
                <Icon iconName="bell" size={15} />
                <Loader />
                <DatePicker />

                <Button
                    text={'Sign in'}
                    disabled={false}
                    onClick={(e) => e.preventDefault()}
                />

                <>
                    <InputLabel htmlFor='user'/>
                    <Input
                        placeholder='Text input'
                        helperText='Caption'
                        id={'user'}
                        leftIcon={'search'}
                        rightIcon={'arrow'}
                    />
                </>


            </div>

        </div>


    )
}

export default App
