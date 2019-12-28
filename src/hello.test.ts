import {sayHello} from './hello'

test('say hello with a name', () => {
    expect(sayHello('Akash')).toEqual('Hello, Akash!')
})

test('say hello world if no name provided', () => {
    expect(sayHello()).toEqual('Hello, world!')
})