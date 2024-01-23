import { useTheme } from './providers/theme-provider/lib/use-theme';
import { Navbar } from 'widgets/navbar';
import { classNames } from '../shared/lib/classnames/classnames';
import './styles/index.scss';
import AppRouter from './providers/router/ui/app-router';
import { Sidebar } from 'widgets/sidebar';

export const App = () => {
    const { theme } = useTheme()
    return (
      <div className={classNames('app', {}, [theme])}>
          <Navbar />
          <div className='content-page'>
            <Sidebar />
            <AppRouter />
          </div>
      </div>
    )
};