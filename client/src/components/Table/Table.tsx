import React, { useState } from 'react'
import styles from './Table.module.css'

type ColumnBase = {
    header: string
}

export type Column<T> =
    | (ColumnBase & {
        key: keyof T
        render?: never
    })
    | (ColumnBase & {
        key?: never
        render: (row: T) => React.ReactNode
    })

type TableProps<T> = {
    columns: Column<T>[]
    data: T[]
    selectable?: boolean
    onSelectionChange?: (selected: T[]) => void
}

export function Table<T extends { id: number | string }>({
    columns,
    data,
    selectable = false,
    onSelectionChange,
}: TableProps<T>) {
    const [selectedIds, setSelectedIds] = useState<(string | number)[]>([])

    const toggleSelectAll = () => {
        if (selectedIds.length === data.length) {
            setSelectedIds([])
            onSelectionChange?.([])
        } else {
            const allIds = data.map((row) => row.id)
            setSelectedIds(allIds)
            onSelectionChange?.(data)
        }
    }

    const toggleSelectRow = (id: string | number) => {
        let updated
        if (selectedIds.includes(id)) {
            updated = selectedIds.filter((sid) => sid !== id)
        } else {
            updated = [...selectedIds, id]
        }
        setSelectedIds(updated)
        onSelectionChange?.(data.filter((row) => updated.includes(row.id)))
    }

    return (
        <div className={styles["table-wrapper"]}>
            <table className={styles["custom-table"]}>
                <thead>
                    <tr>
                        {selectable && (
                            <th className={styles["checkbox-cell"]}>
                                <input
                                    type="checkbox"
                                    checked={
                                        selectedIds.length === data.length &&
                                        data.length > 0
                                    }
                                    onChange={toggleSelectAll}
                                />
                            </th>
                        )}
                        {columns.map((col) => (
                            <th key={col.key as string}>{col.header}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((row) => (
                        <tr key={row.id}>
                            {selectable && (
                                <td className={styles["checkbox-cell"]}>
                                    <input
                                        type="checkbox"
                                        checked={selectedIds.includes(row.id)}
                                        onChange={() => toggleSelectRow(row.id)}
                                    />
                                </td>
                            )}

                            {columns.map((col) => (
                                <td key={col.key as string} className={styles['row']}>
                                    {col.render
                                        ? col.render(row)
                                        : (row[ col.key as keyof T ] as React.ReactNode)}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
