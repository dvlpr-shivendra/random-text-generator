let mix = require('laravel-mix');

mix.js('src/app.js', 'dist').setPublicPath('dist').vue({ version: 2 });

mix.sass('src/app.scss', 'dist').setPublicPath('dist');