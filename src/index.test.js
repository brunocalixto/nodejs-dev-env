import { expect } from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';

describe('Our first test', () => {
    it('should pass', () => {
        expect(true).to.equal(true);
    });
});

describe('DOM test', () => {
    it('should return H1 innerHTML', (done) => {
        const file = fs.readFileSync('./src/index.html', 'utf-8');
        jsdom.env(file, (err, window) => {
            const h1 = window.document.getElementsByTagName('h1')[0];
            expect(h1.innerHTML).to.equal('Users');
            done();
            window.close();
        });
    });
});