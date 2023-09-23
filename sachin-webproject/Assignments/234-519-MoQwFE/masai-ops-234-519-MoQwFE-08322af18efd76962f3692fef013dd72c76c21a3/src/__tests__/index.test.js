

import {add, greet, interpolate, nuller, objectFactory} from '../index';
global.score = 1


describe('add', function(){
  test('add two numbers', function(){
    expect(add(1,2)).toBe(3)
  })
})

describe('greet', function(){
  test('greet returns interpolated string', function(){
    expect(greet()).toBe(`Will Smith's age is 54.`)
  })
})

describe('interpolate', function(){
  test('inputs are interpolated', function(){
    expect(interpolate(2,3)).toBe(`2 + 3 = 5`);
    expect(interpolate(5,2)).toBe(`5 + 2 = 7`);
  })
})

describe('nuller', function(){
  test('nuller returns null', function(){
    expect(nuller()).toBe(null);
  })
})

describe('objectFactory', function(){
  test('objectFactory', function(){
    expect(objectFactory('Raj', 26)).toMatchObject({Raj: 26});
    expect(objectFactory('Vijay', 24)).toMatchObject({Vijay: 24});
  })
})
afterAll(() => {
  console.log("Final Score is", global.score);
});
