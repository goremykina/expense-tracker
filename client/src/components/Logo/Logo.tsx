import LogoIcon from '../../assets/logo.svg?react'
import LargeIcon from '../../assets/large-logo.svg?react'

interface LogoProps {
    size?: "small" | "large"
}

export function Logo({ size }: LogoProps) {
    switch (size) {
        case "small":
            return (<LogoIcon/>)
        case "large":
            return (<LargeIcon/>)
    }
}
