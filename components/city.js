/* @flow */
import React from 'react';

import withLoading from '../hocs/withLoading';

function City(props: any) {
    return <h3>{props.data.city}</h3>;
}

export default withLoading(City);
