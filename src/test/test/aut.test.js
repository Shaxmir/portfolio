const webdriverio = require('webdriverio');
const options = require('../wdio.conf');
const client = webdriverio.multiremote(options);

jest.setTimeout(300000);

beforeAll(() => {
    return client.init().url('http://localhost:8080/admin#/aut');
});

test('на странице есть кнопка "Войти"', () => {
    return client
        .isExisting('.button')
        .then(browsers => {
            for (const browserName in browsers) {
                expect(browsers[browserName]).toBe(true);
            }
        })
        
});
