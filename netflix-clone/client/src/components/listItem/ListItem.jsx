import React, { useState } from 'react'
import "./listItem.scss"

import { BsPlayFill } from 'react-icons/bs'
import { IoMdAdd } from 'react-icons/io'
import { AiOutlineLike, AiOutlineDislike } from 'react-icons/ai'

export default function ListItem({index}) {
    const [isHovered, setIsHovered] = useState(false);
    const trailer = "https://player.vimeo.com/external/286388481.hd.mp4?s=43ef58fdd2f95dbdf57621f4a398b74713cdfdd9&profile_id=175";
    return (
        <div className="listItem"
            style={{left: isHovered && index * 235 -50 + index * 5}}
            onPointerEnter={() => setIsHovered(true)}
            onPointerLeave={() => setIsHovered(false)}
        >
            <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReeFYMYnxU-S3FvWn9IbH-ugWkrxaAmLS_0Q&usqp=CAU"
            alt="Billion Dollar Code"
            />
            {isHovered && (
            <>
                <video src={trailer} autoPlay={true} type="video/mp4" loop />
                <div className="listItem__info">
                    <div className="listItem__icons">
                        <BsPlayFill className="icon"/>
                        <IoMdAdd className="icon"/>
                        <AiOutlineLike className="icon"/>
                        <AiOutlineDislike className="icon"/>
                    </div>
                    <div className="listItem__details">
                        <span className="age_limit">+12</span>
                        <span>2 hours 30 mins</span>
                        <span>2001</span>
                    </div>
                    <div className="listItem__desc">
                        Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit amet, consectetur adip.
                    </div>
                    <div className="genre">
                        Action
                    </div>
                </div>
            </>
            )}
        </div>
    )
}
