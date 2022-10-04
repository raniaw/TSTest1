import { Utils } from '../app/Utils'

describe('Utils test suite', () => {
    test('first test', () => {
        const abc = Utils.toUCase('abc');
        expect(abc).toBe('ABC');
        console.log('first test work!' , abc );
    });
});