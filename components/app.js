/* @flow */
import React from 'react';
import DescriptionWithLinks from './descriptionWithLinks';
import Name from '../containers/name';
import City from '../containers/city';


export default class App extends React.Component {
    render() {
        return (
            <div>
                <Name />
                <City />
                <DescriptionWithLinks
                    description="I often visit https://www.bbc.co.uk, especially the https://www.bbc.co.uk/weather section"
                    links={[
                        {url: 'https://www.bbc.co.uk', text: 'the BBC website'},
                        {url: 'https://www.bbc.co.uk/weather', text: 'weather'}
                    ]}
                />
            </div>
        );
    }
}
