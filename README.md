# Socket Test

## Description

Front-end UI displaying various Internet of Things (IoT) sensors based
on data provided through a Web Socket endpoint.

## Requirements

Node JS v19.7.0 (npm 9.5.0)

## How to use

add REACT_APP_URL variable in the .env file (REACT_APP_URL=ws://localhost:5000)

```bash
npm install && npm start
```

## Stack

- Language - Typescript
- UI lib - React
- Architectural methodology - FSD (https://feature-sliced.design)
- Styles - Emotion CSS (https://emotion.sh/docs/introduction)
- Tests - jest (https://jestjs.io/docs/en/getting-started)

## Codestyle

I use Props type instead of React.FC (https://github.com/facebook/create-react-app/pull/8177)

## Features

+ Show the sensors with their current state and the end-user
+ Connect and disconnect the sensors.
+ Toggle whether to see all sensors or only the connected sensors.

## Questions

### What aspect of this exercise did you find most interesting?

It is fascinating to work with sockets, create UI elements, and handle errors.

### What did you find most cumbersome to do?

Boilerplate code.

### How can we further improve the user experience?

There is always room for improvement in our applications.
Here, I can definitely enhance the accessibility of the interface.
Additionally, I can improve the display of connection states and errors.
