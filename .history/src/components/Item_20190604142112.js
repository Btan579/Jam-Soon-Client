import React  from 'react';

import './Item.css';

export class Item extends React.Component {

    constructor(props) {
        super(props)
        this.text = props.text
    }

    render() {
        return (
            <div className='top-menu-item'>
                {this.text}
            </div>
        )
    }
}

export default Item;