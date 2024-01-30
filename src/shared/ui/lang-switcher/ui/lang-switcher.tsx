import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classnames/classnames';
import { Button, ThemeButton } from 'shared/ui/button/button';

interface LangSwithcerProps {
    className?: string;
}

export const LangSwitcher = ({ className }: LangSwithcerProps) => {
    const { t, i18n } = useTranslation();

    const toggle = async () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <Button
            className={classNames('', {}, [className])}
            theme={ThemeButton.clear}
            onClick={toggle}
        >
            {t('Язык')}
        </Button>
    );
};
