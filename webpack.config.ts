import path from 'path';
import webpack from 'webpack';
import {builWebpackConfig} from './config/build/build-webpack-config';
import {BuileEnv} from './config/build/types/config';

export default (env: BuileEnv) => {

    const paths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        build: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html')
    }

    const mode = env?.mode || 'development';    
    const isDev = mode === 'development';
    const port = env.port || 3000;

    const config: webpack.Configuration = builWebpackConfig({
        mode: 'development',
        paths,
        isDev,
        port
    });

    return config;
}