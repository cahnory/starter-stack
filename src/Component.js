/* @flow */
import React from 'react'

type PropsType = {
  name: string
}

export const Component = ({name}:PropsType) => <div>Hello {name}!</div>
export default Component

export const foo = <Component name="ok" />