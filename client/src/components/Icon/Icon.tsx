import { icons, type IconName } from '../../assets'
import styles from './Icon.module.css'

type IconProps = {
    iconName: IconName
    size?: number
    color?: 'primary' | 'danger' | 'secondary' | 'neutral'
}

export function Icon({ iconName, size = 24, color }: IconProps) {
    const SelectedIcon = icons[iconName]

    const getColorClassName = () => {
        switch (color) {
            case 'primary':
                return styles.primary
            case 'danger':
                return styles.danger
            case 'neutral':
                return styles.neutral
            default:
                return styles.secondary
        }
    }

    if (!SelectedIcon) {
        return null
    }

    return <SelectedIcon className={getColorClassName()} width={size} height={size} />
}
