/* @noflow */
import React from 'react';
import {render} from 'enzyme';

import withLoading from '../../hocs/withLoading';

describe('<DescriptionWithLinks />', () => {
    const PassedComponent = ({someProp, otherProp}) => <h3>Passed values: {someProp}, {otherProp}</h3>;
    const Component = withLoading(PassedComponent);

    it('should render the error message when the error flag is true', () => {
        const wrapper = render(<Component error={true} someProp="test" />);
        expect(wrapper.text()).toBe('Error!');
        expect(wrapper).toMatchSnapshot();
    });
    it('should render the loading message when the loading flag is true', () => {
        const wrapper = render(<Component loading={true} someProp="test" />);
        expect(wrapper.text()).toBe('Loading...');
        expect(wrapper).toMatchSnapshot();
    });
    it('should render the passed component when the error & loading flags are not true', () => {
        const wrapper = render(<Component someProp="test" otherProp="test2" />);
        expect(wrapper.text()).toBe('Passed values: test, test2');
        expect(wrapper).toMatchSnapshot();
    });
});
