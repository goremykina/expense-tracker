import styles from './DatePicker.module.css'
import { useState } from 'react'

export const DatePicker = () => {
    const [selectedDate, setSelectedDate] = useState<string>('2023-10-01')

    return (
        <input
            type="date"
            value={selectedDate}
            className={styles['datePicker-input']}
            onChange={(e) => setSelectedDate(e.target.value)}
        />
    )
}
