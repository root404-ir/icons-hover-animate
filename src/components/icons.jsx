import { useRef } from 'react'
import HoverSound from '../assets/bubble-sound-43207.mp3'
const Icons = ({ icon }) => {
    const Hover = useRef(new Audio(HoverSound))
    const liHover = () => {
        const audioHover = Hover.current
        audioHover.currentTime = 0
        audioHover.play().catch(err => {
            console.error('', err)
        })
    }
    return (
        <li onMouseEnter={liHover}>
            <a href="#">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span>
                    {icon}
                </span>
            </a>
        </li>
    )
}
export default Icons

