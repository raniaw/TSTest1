import { Utils } from '../app/Utils'

describe('Utils test suite', () => {
    test('first test', () => {
        const abc = Utils.toUCase('abc');
        expect(abc).toBe('ABC');
        console.log('first test work!' , abc );
    });
    test('past simple url',() => {
        const parseUrl = Utils.parseUrl('http://localhost:8080/login');
        expect(parseUrl.href).toBe('http://localhost:8080/login');
        expect(parseUrl.port).toBe('8080');
        expect(parseUrl.protocol).toBe('http:');
        expect(parseUrl.query).toEqual({});
        console.log('past simple url');
    });
});