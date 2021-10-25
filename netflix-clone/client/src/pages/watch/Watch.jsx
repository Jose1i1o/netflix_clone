import React from 'react';
import "./watch.scss"
import { FiArrowLeft } from 'react-icons/fi';

export default function Watch() {
    return (
        <div className="watch">
            <div className="back">
                <FiArrowLeft />
                Home
            </div>
            <video className="video" type="video/mp4" autoplay progress controls
            src="https://player.vimeo.com/external/286388481.hd.mp4?s=43ef58fdd2f95dbdf57621f4a398b74713cdfdd9&profile_id=175"
            />
        </div>
    )
};

