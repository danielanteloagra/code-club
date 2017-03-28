import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import App from '../src/App';

describe('App', () => {
  it('mounts', () => {
    const wrapper = shallow(<App/>);
    expect(wrapper.text()).equal('Beer!');
  });
});
