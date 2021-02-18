module.exports = {
    future: {
        // removeDeprecatedGapUtilities: true,
        // purgeLayersByDefault: true,
    },
    purge: ['./src/**/*.html', './src/**/*.js'],
    theme: {
        fontFamily: {
            rubik: ['rubik', 'helvetica', 'sans-serif'],
            raleway: ['raleway', 'sans-serif'],
        },
    },
    variants: {
        animation: ['responsive', 'hover'],
        borderStyle: ['responsive', 'hover'],
        borderWidth: ['responsive', 'hover'],
    },
    plugins: [],
};
