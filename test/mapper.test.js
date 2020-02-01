// IMPORT MODULES under test here:
import { mapArray } from '../app.js';

const test = QUnit.test;

test('time to test a function', function (assert) {
    //Arrange
    // Set up your parameters and expectations
    const input = [ // array of array of strings
        ['tony', 'dog'], // { name: 'tony', type: 'dog' },
        ['felix', 'cat'],

    ];

    const expectedOutput = [
        { name: 'tony', type: 'dog' },
        { name: 'felix', type: 'cat' }
    ];

    //Act 
    // Call the function you're testing and set the result to a const

    const actualOutput = mapArray(input);

    //Assert
    // Make assertions about what is expected valid result
    assert(true, false);
});

test('time to test a function', function (assert) {
    const input = null;
    assert.throws(() => mapArray(input));
});

test('should not throw an error if correct input', function (assert) {
    const input = [ // array of array of strings
        ['tony', 'dog'], // { name: 'tony', type: 'dog' },
        ['felix', 'cat'],

    ];
    assert.throws(() => mapArray(input));
});
