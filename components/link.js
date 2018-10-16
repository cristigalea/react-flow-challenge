/* @flow */
import React from 'react';


export default function Link(props: any) {
    return <a href={props.url}>{props.children}</a>;
}
