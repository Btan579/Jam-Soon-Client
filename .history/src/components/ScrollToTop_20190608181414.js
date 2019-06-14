// import React from 'react';
// import { withRouter } from 'react-router-dom';

// export class ScrollToTop extends Component {
//     componentDidUpdate(prevProps) {
//         if (this.props.location.pathname !== prevProps.location.pathname) {
//             window.scrollTo(0, 0);
//         }
//     }

//     render() {
//         return this.props.children;
//     }
// }

// export default withRouter(ScrollToTop);


import React from 'react'
import { withRouter } from 'react-router-dom'

@withRouter
export default class ScrollToTop extends Component {
    componentDidUpdate(prevProps) {
        if (this.props.location !== prevProps.location) {
            window.scrollTo(0, 0)
        }
    }

    render() {
        return this.props.children
    }
}