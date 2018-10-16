/* @flow */
import * as React from 'react';

type Props = {
    loading?: boolean,
    error?: ?Error
};

const withLoading = (Component: any) => ({loading, error, ...props}: Props) => {
    if (loading) {
        return <div>Loading...</div>;
    }
    if (error) {
        return <div>Error!</div>;
    }
    return <Component {...props} />;
};

export default withLoading;
