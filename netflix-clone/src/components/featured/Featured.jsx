import React from 'react'
import { FaPlay } from 'react-icons/fa'
import { AiOutlineInfoCircle } from 'react-icons/ai'
import "./featured.scss"

export default function Featured() {
    return (
        <div className="featured">
            <img
                src="https://fotografias.antena3.com/clipping/cmsimages01/2021/10/04/81C33363-FB4E-40FF-BACA-8D28784E1AD9/98.jpg?crop=1022,575,x0,y0&width=1900&height=1069&optimize=high&format=webply"
                alt="avatar"
            />
            <div className="featured__info">
                <img
                    src="https://occ-0-2706-2705.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABWJ0vCkjX_jwgR6VCjq9BGDvR7jHTScZaFFeI_GKozEXJLFrfIWwXJBBz-OeQzZyXH-op9Vo61-bIBqCDiD791P4qOdNZMBQAGR0jpHaCrF56FL-nQaGewZJYds-8pmm5yHRAUmxxcz2DoWX-Av2R3D8ouC9-oQupOnIM8R7Fs-1.webp?r=a96"
                    alt="avatar"
                />
                <span className="description"> Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit amet, consectetur adip</span>
                <div className="buttons centered-label">
                    <button className="play">
                        <FaPlay size={15}/>
                        <span> Play </span>
                    </button>
                    <button className="more">
                        <AiOutlineInfoCircle size={25}/>
                        <span> Info</span>
                    </button>
                </div>
            </div>
        </div>
    )
}
