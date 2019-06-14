import React  from 'react';
import { Link } from "react-router-dom";
import '../styles/Item.css';

export class Item extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            text: '',
            to: ''
        };
    }

    render() {
        
        return (
            <div className='top-menu-item'>
                <button>
                <Link to={this.props.to} id="menu-link">{this.props.text}</Link>
                </button>
            </div>
        )
    }
}

export default Item;
