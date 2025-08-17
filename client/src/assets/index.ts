import arrow from './arrow.svg?react'
import cross from './cross.svg?react'
import bell from './bell.svg?react'
import bigHouse from './big-house.svg?react'
import calendar from './calendar.svg?react'
import mail from './mail.svg?react'
import search from './search.svg?react'
import settings from './settings.svg?react'
import hidePass from './hide-pass.svg?react'
import showPass from './show-pass.svg?react'


export const icons = {
    arrow,
    cross,
    bell,
    bigHouse,
    calendar,
    mail,
    search,
    settings,
    hidePass,
    showPass
} as const

export type IconName = keyof typeof icons
