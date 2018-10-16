/* @noflow */
import React from 'react';
import {shallow, render} from 'enzyme';

import DescriptionWithLinks from '../descriptionWithLinks';

describe('<DescriptionWithLinks />', () => {
    const defaultDescription = 'I often visit https://www.bbc.co.uk, especially the https://www.bbc.co.uk/weather section';
    const defaultLink1 = {url: 'https://www.bbc.co.uk', text: 'the BBC website'};
    const defaultLink2 = {url: 'https://www.bbc.co.uk/weather', text: 'weather'};

    it('should display a description with no links', () => {
        const wrapper = shallow(<DescriptionWithLinks description="My test description" links={[]} />);
        expect(wrapper.text()).toEqual('My test description');
    });
    it('should display a description with links from the same domain', () => {
        const wrapper = render(<DescriptionWithLinks description={defaultDescription} links={[defaultLink1, defaultLink2]} />);
        expect(wrapper.text()).toEqual('I often visit the BBC website, especially the weather section');
    });
    it('should display a description with only the matched links changed', () => {
        const wrapper = render(<DescriptionWithLinks description={defaultDescription} links={[defaultLink2]} />);
        expect(wrapper.text()).toEqual('I often visit https://www.bbc.co.uk, especially the weather section');
    });
    it('should display a description with links apearing multiple times', () => {
        const description = `
            I often visit https://www.bbc.co.uk, especially the https://www.bbc.co.uk/weather section.
            I also visit https://www.bbc.co.uk for entertainment.
        `;
        const wrapper = render(<DescriptionWithLinks description={description} links={[defaultLink1, defaultLink2]} />);
        expect(wrapper.text()).toEqual(`
            I often visit the BBC website, especially the weather section.
            I also visit the BBC website for entertainment.
        `);
    });
    it('should match the snapshot', () => {
        const wrapper = render(<DescriptionWithLinks description={defaultDescription} links={[defaultLink1, defaultLink2]} />);
        expect(wrapper).toMatchSnapshot();
    });
});
