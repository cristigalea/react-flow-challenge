/* @flow */
import React from 'react';
import Name from '../components/name';


export default class NameContainer extends React.Component {
    state: {
        loading: boolean,
        error: ?Error,
        data: ?Object
    } = {
        loading: true,
        error: null,
        data: null
    };

    componentDidMount() {
        setTimeout(() => {
            this.setState({loading: false, data: {name: 'John Doe'}});
        }, 2500);
    }

    render() {
        return <Name {...this.state} />;
    }
}
