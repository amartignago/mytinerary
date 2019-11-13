import React from 'react';
import { shallow , mount} from 'enzyme';
import BrowsingMenu from './components/BrowsingMenu.js';


describe('BrowsingMenu', () => {
  it('should render correctly', () => {
    const component = shallow(<BrowsingMenu/>); 
    expect(component).toMatchSnapshot();
  });
});

