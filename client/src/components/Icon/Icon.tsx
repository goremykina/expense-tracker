import { icons, type IconName } from "../../assets" 

type IconProps = {
    iconName: IconName
    size?: number,
    color?: string,
}

export function Icon ({ iconName, size = 24, color }: IconProps) {
    const SelectedIcon = icons[iconName];

    if(!SelectedIcon) {
    return null
    }

    return (
        <SelectedIcon width={size} height={size} fill={color} />
    )
}