/* @flow */
import React from 'react';

import withLoading from '../hocs/withLoading';

function Name(props: any) {
    return <h2>{props.data.name}</h2>;
}

export default withLoading(Name);
