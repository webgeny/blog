import { Suspense } from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import { AboutPage } from 'pages/about-page';
import { MainPage } from 'pages/main-page';
import { useTheme } from './providers/theme-provider/lib/use-theme';
import { classNames } from '../shared/lib/classnames/classnames';
import './styles/index.scss';

export const App = () => {
    const { theme, toggleTheme } = useTheme()
    return (
      <div className={classNames(`app`, {}, [theme])}>
        <button onClick={toggleTheme}>Toggle</button>
          <Link to='/'>Главная</Link>
          <Link to='/about'>О сайте</Link>
          <Suspense fallback={<div>loading...</div>}>
            <Routes>
                <Route path='/about' element={<AboutPage />}  />
                <Route path='/' element={<MainPage />}  />
            </Routes>
          </Suspense>
      </div>
    )
};