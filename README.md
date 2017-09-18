![logo](https://user-images.githubusercontent.com/4819738/30342556-e4df6752-97bf-11e7-9605-32de0b92912d.png)

[![Build Status](https://travis-ci.org/caseybaggz/horcrux.svg)](https://travis-ci.org/caseybaggz/horcrux) [![npm](https://img.shields.io/npm/dm/horcrux.svg)](https://npmjs.com/package/react-horcrux) [![Issue Stats](https://img.shields.io/issuestats/i/github/caseybaggz/horcrux.svg)](http://github.com/caseybaggz/horcrux/issues) [![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

Perfect for Buttons, Inputs, or any other UI related component you want to add into your React app. Easy to extend, style, and integrate into your project (React-Native compatability coming soon!).

## Contents
* [User Guide (summoning very soon)]()
* [Docs (summoning very soon)]()

## Installation
yarn:
```
yarn add react-horcrux
```

npm
```
npm install react-horcrux
```

## Components (spells)
We've tried to make usage as easy as possible, so most all (non-advanced) components are used the exact way you would use its default version in React. For example, the `Button` takes an `onClick` prop and the `Input` takes any prop you would normally add to an `input` component.

Example:
```
import { Button, Input } from 'react-horcrux';

export default YourComponent function() {
  return(
    <div>
      <form>
        <Input
          placeholder="harry potter"
          maxLength="222"
          type="text"
          required
          value={someBoundValue}
        />

        <Button onClick={doSomething}>do it</Button>
      </form>
    </div>
  );
}
```

## Customizing (potions)
We realize not all of our spells will tickle your fancy, so we've decided to allow you to cook up some potions to enhance our spells. For now, we've built all of our non-advanced components using [styled-components](https://github.com/styled-components/styled-components) which will give you a large spectrum of additions you can use to make any updates necessary. To take advantage of this you will need to install `styled-components` into your app.

Example (updating some colors):
```
import styled from 'styled-components';
import { Button } from 'react-horcrux';

const NewButton = Button.extend`
  background-color: tomato;

  &:hover {
    background-color: black;
  }
`;

export default NewButton function({...props}) {
  return <NewButton {...props}>this is your new button</NewButton>;
}
```

## Upcoming Spells
We are in the official beginning stages of this library, but to give you a sneak peak on what is to come, here are our list of TODO's to incorporate ASAP:

* Checkbox
* Dropdown
* Datepicker
* Modal
* Tabview (headers with an animating bar that switches content to be displayed)
* Toggle
* Selectbox
* Textarea

If there is anything else you would like added, feel free to let us know or submit a PR!

Thanks for all the support and keep staying "up to no good".
