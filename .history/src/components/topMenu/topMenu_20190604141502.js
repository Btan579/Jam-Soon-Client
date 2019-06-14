import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/fontawesome-free-solid-svg-icons';

import Item from './item/Item';
import Lead from './lead/Lead';
import './topMenu.css';

export class TopMenu extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            menu_class: '',
        };
    }

    setToggleTopMenuClass() {
        if (this.state.menu_class === '') {
            this.setState({
                menu_class: 'toggled',
            });
        } else {
            this.setState({
                menu_class: '',
            });
        }
    }


    render () {
        let top_menu_class = `top-menu ${this.state.menu_class}`;

        return (
            <div>
                <div className={top_menu_class} >
                    <Lead text="This Is Your Title!" />
                    <div className='left'>
                        <Item text='Left1'/>
                        <Item text='Left2'/>
                    </div>
                    <div className='right'>
                        <Item text='Right1' />
                        <Item text='Right2' />
                    </div>
                    <FontAwesomeIcon icon={faBars} className='top-menu-icon' onClick={this.setToggleTopMenuClass}/>
                    <div className='clear-fix' />
                </div>
            </div>
        )
    }
}

export default TopMenu;