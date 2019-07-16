import {sayHello} from './hello'
import test from 'ava'

test('say hello with a name', t => {
    t.is(sayHello('Akash'), 'Hello, Akash!')
})

test('say hello world if no name provided', t => {
    t.is(sayHello(), 'Hello, world!')
})