/* @flow */
import React from 'react';
import City from '../components/city';


export default class CityContainer extends React.Component {
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
            this.setState({loading: false, data: {city: 'Manchester, UK'}});
        }, 2000);
    }

    render() {
        return <City {...this.state} />;
    }
}
