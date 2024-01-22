import {render} from 'react-dom';
import cls from './index.module.scss';

render(
    <div className={cls.app}>App</div>,
    document.getElementById('root')
)