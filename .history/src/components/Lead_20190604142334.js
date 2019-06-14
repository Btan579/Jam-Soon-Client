import React from 'react';

import '../styles/Lead.css';

export class Lead extends React.Component {

    constructor(props) {
        super(props)
        this.text = props.text
    }

    render() {
        return (
            <div className='top-menu-lead'>
                {this.text}
            </div>
        )
    }
}

export default Lead;