import React from 'react'
import "./list.scss"

import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import ListItem from '../listItem/ListItem'

export default function List() {
    return (
        <div className="list">
            <span className="listTitle">Continue to watch</span>
            <div className="wrapper">
               <IoIosArrowBack />
               <div className="container">
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
               </div>
               <IoIosArrowForward />
            </div>
        </div>
    )
}
