import React  from 'react';
import { Link } from "react-router-dom";
import '../styles/Item.css';

export class Item extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            text: '',
            route: ''
        };
    }

    render() {
        let itemId = `menu-link-${this.props.text.toLowerCase()}`;
        return (
            <div className='top-menu-item' id={itemId}>
                <Link to={this.props.route}>{this.props.text}</Link>
            </div>
        )
    }
}

export default Item;
