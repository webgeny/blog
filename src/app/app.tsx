import { useTheme } from './providers/theme-provider/lib/use-theme';
import { Navbar } from 'widgets/navbar';
import { classNames } from '../shared/lib/classnames/classnames';
import './styles/index.scss';
import AppRouter from './providers/router/ui/app-router';

export const App = () => {
    const { theme } = useTheme()
    return (
      <div className={classNames(`app`, {}, [theme])}>
          <Navbar />
          <AppRouter />
      </div>
    )
};