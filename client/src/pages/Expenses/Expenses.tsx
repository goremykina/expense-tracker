import { Table, type Column } from '../../components/Table/Table.tsx'
import styles from './Expenses.module.css'
import { Icon } from "../../components/Icon";

export function Expenses() {
    type Expense = {
        id: number
        name: string
        category: string
        date: string
        total: string
    }

    const columns: Column<Expense>[] = [
        { header: 'Name', render: expense => (
                <div className={styles["icon-wrapper"]}>
                    <span className={styles["icon-container"]}>
                        <Icon iconName="search" size={19} />
                    </span>
                    {expense.name}
                </div>
            ) },
        { key: 'category', header: 'Category' },
        { key: 'date', header: 'Date' },
        { header: 'Total', render: expense => (<span className={styles['table-total']}>{expense.total}</span>) },
        { header: '', render: _ => (<button className={styles['btn-action']}>&#8942;</button>) },
    ]

    const data: Expense[] = [
        {
            id: 1,
            name: 'Figma',
            category: 'Hobby',
            date: '12 Jan 2024',
            total: '-$7.22',
        },
        {
            id: 2,
            name: 'Groceries',
            category: 'Food',
            date: '13 Jan 2024',
            total: '-$23.45',
        },
    ]

    return (
        <Table
            columns={columns}
            data={data}
            selectable
            onSelectionChange={(rows) => console.log('Selected rows:', rows)}
        />
    )
}
