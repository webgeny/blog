import { render, screen } from '@testing-library/react';
import { Button, ThemeButton } from './button';

describe('button', () => {
    test('to be in document', () => {
        render(<Button>TEST</Button>);
        expect(screen.getByText('TEST')).toBeInTheDocument();
    });
    test('test attribute class', () => {
        render(<Button theme={ThemeButton.clear}>TEST</Button>);
        expect(screen.getByText('TEST')).toBeInTheDocument();
        expect(screen.getByText('TEST')).toHaveClass('clear');
        screen.debug();
    });
});
