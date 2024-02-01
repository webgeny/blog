import React from 'react';
import { render } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import i18nForTests from 'shared/config/i18n/i18n-for-tests';

export function renderWithTranslations(Component: React.ReactNode) {
    render(
        <I18nextProvider i18n={i18nForTests}>
            {Component}
        </I18nextProvider>,
    );
}
