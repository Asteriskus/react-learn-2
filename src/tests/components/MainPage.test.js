import React from 'react';
import { shallow } from 'enzyme';
import MainPage from '../../components/MainPage';

test('Should render MainPage', () => {
        const wrapper = shallow(<MainPage/>);
        expect(wrapper).toMatchSnapshot();
    }
);