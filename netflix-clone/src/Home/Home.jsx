import React from 'react'
import "./home.scss";

// import {AcUnit} from '@material-ui/icons';
import Navbar from '../components/Navbar/Navbar';
import Featured from '../components/featured/Featured';

const Home = () => {
    return (
        <div className="home">
            <Navbar />
            <Featured />
        </div>
    )
}

export default Home

