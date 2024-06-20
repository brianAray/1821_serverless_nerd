# Class Components

These were the primary ways to define components in React before the development of hooks.
Hooks have largely replaced class components in modern REact development, but it is still important to understand class components as you may encounter in existing code bases.

## Basic Syntax

```typescript
import React, { Component } from 'react'

export default class MyBasicClassComponent extends Component {
  render() {
    return (
      <div>MyBasicClassComponent</div>
    )
  }
}
```

## State

They have state by default. State is an object that stores data relevant to a component's UI and can change over time. You can initialize state in the constructor, here is how:

