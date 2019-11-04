import React from 'react';
import { shallow , mount} from 'enzyme';
import {MemoryRouter} from 'react-router';
import Routes from './Routes.js';
import Login from './Login.js'

it('the route should exist', () => {
    const component = mount(<MemoryRouter initialEntries={['/login']}> 
    <Routes/>
    </MemoryRouter>
);
    expect(component.find(Login)).toHaveLength(1);
  });
  