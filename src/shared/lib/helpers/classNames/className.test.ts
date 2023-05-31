import { classNames } from './classNames';

describe('classNames test', () => {
    test('test', () => {
        expect(classNames('a')).toBe('a');
    });

    test('test with additional', () => {
        const expected = 'a someClass1 someClass2';
        expect(classNames('a', {}, ['someClass1', 'someClass2'])).toBe(expected);
    });

    test('test with additional and mods', () => {
        const expected = 'a someClass1 someClass2 hovered';
        expect(classNames(
            'a',
            { hovered: true, red: false, some: undefined },
            ['someClass1', 'someClass2'],
        ))
            .toBe(expected);
    });
});
