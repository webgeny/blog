import path from 'path';
import webpack from 'webpack';
import {builWebpackConfig} from './config/build/build-webpack-config';

const paths = {
    entry: path.resolve(__dirname, 'src', 'index.ts'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html')
}

const mode = 'development';
const isDev = mode === 'development';

const config: webpack.Configuration = builWebpackConfig({
    mode: 'development',
    paths,
    isDev
})

export default config;