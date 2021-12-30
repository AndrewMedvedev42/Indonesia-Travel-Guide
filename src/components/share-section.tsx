import { useState } from "react";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

export const ShareSection:React.FC = () => {
    const [iconSize, setIconSize] = useState(37)
    return (
        <article>
                <span></span>
                <div>
                    <BsFacebook size={iconSize} className="social-icon"/>
                    <BsTwitter size={iconSize} className="social-icon"/>
                    <BsInstagram size={iconSize} className="social-icon"/>
                </div>
        </article>
    )
}