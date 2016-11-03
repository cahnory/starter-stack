/* eslint-env node, jest */
import React from 'react'
import {shallow} from 'enzyme'
import Component from '../Component'

test('Component prints the given name', () => {
  const component = shallow(<Component name="starter-stack" />)

  expect(component.text()).toBe('Hello starter-stack!')
})