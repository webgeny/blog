import { classNames } from 'shared/lib/classnames/classnames';

describe('classnames', () => {
    test('withOneParam', () => {
        expect(classNames('someClass')).toBe('someClass');
    });

    test('additional class', () => {
        const expected = 'someClass class1 class2';
        expect(classNames('someClass', {}, ['class1', 'class2'])).toBe(expected);
    });

    test('additional class', () => {
        const expected = 'someClass class1 class2 hovered scrollable';
        expect(classNames('someClass', {
            hovered: true,
            scrollable: true,
        }, ['class1', 'class2'])).toBe(expected);
    });

    test('woth mods', () => {
        const expected = 'someClass class1 class2 hovered';
        expect(classNames('someClass', {
            hovered: true,
            scrollable: false,
        }, ['class1', 'class2'])).toBe(expected);
    });

    test('undefined', () => {
        const expected = 'someClass class1 class2 hovered';
        expect(classNames('someClass', {
            hovered: true,
            scrollable: undefined,
        }, ['class1', 'class2'])).toBe(expected);
    });
});
