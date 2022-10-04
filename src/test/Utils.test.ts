import { Utils } from '../app/Utils'

describe.skip('Utils test suite', () => {
    beforeAll(() => {
        console.log('Bevore All');
    })
    beforeEach(() => {
        console.log('Before Each');
    })
    test('first test', () => {
        const abc = Utils.toUCase('abc');
        expect(abc).toBe('ABC');
        console.log('first test work!' , abc );
    });
    test.only('past simple url',() => {
        const parseUrl = Utils.parseUrl('http://localhost:8080/login');
        expect(parseUrl.href).toBe('http://localhost:8080/login');
        expect(parseUrl.port).toBe('8080');
        expect(parseUrl.protocol).toBe('http:');
        expect(parseUrl.query).toEqual({});
        console.log('past simple url');
    });
    test('past simple url with query',() => {
        const parseUrl = Utils.parseUrl('http://localhost:8080/login?user=user1&password=pass');
        const expectedEquery={
            user: 'user1',
            password:'pass'
        }
        expect(parseUrl.query).toEqual(expectedEquery);
        expect(expectedEquery).toBe(expectedEquery);
        console.log('past simple url');
    });
});