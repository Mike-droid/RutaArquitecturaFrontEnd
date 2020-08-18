module.exports = {
    plugins: [
        require('postcss-import')({
            plugins:[
                require('stylelint')
            ]
        }),
        require('postcss-font-magician'),
        require('postcss-custom-selectors'),
        require('postcss-apply'),
        require('postcss-color-function'),
        require('postcss-color-hwb'),
        require('postcss-custom-media')({
            preserve: false,
        }),
        require('postcss-preset-env')({
            autoprefixer: {
                grid:true
            },
            browsers: [
                'last 1 version',
                '> 1%',
                'not dead'
            ],
            stage: 1,
            features: {
                'nesting-rules': true
            },
            preserve:false,
            calc:false,
        })
    ]
}