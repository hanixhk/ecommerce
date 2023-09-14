import Image from "next/image"
import { FC } from "react"
import { Preloader } from "../assests"

const LoadingComp: FC<{ size: string }> = ({ size }) => {
    return (
        <div className={`${size}`}>
            <Image src={Preloader} alt="Pre loader" />
        </div>
    )
}

export default LoadingComp