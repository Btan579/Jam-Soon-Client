import React  from 'react';
import { Link } from "react-router-dom";
import '../styles/Item.css';

export class Item extends React.Component {

    constructor(props) {
        super(props)
        this.text = props.text
    }

    render() {
        return (
            <div className='top-menu-item'>
                <Link to="/login" id="menu-link">{this.text}</Link>
            </div>
        )
    }
}

export default Item;
