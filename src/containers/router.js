import React, { Component} from 'react';
import { string } from 'prop-types';

class Router extends Component {
    static propTypes = {
        default: string.isRequired,
    }
    state = {
        route: undefined
    }
    componentDidMount(){
        const default = this.props.default;
        this.setState({route: default})

    }
    
    render() {

    }
}