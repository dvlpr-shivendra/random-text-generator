let mix = require('laravel-mix');
require('laravel-mix-purgecss');

mix.js('src/app.js', 'dist').setPublicPath('dist').vue({ version: 2 });

mix.sass('src/app.scss', 'dist')
    .purgeCss({
        content: [
            "dist/**/*.html",
            "src/components/**/*.vue",
        ]
    })