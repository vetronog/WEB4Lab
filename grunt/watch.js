module.exports =
{
    options:
    {
        livereload: true
    },
    scripts:
    {
        files: ['index.html', 'ts/*.ts', 'css/*.css', 'jsx/*.jsx'],
        tasks: ['clean', 'concat', 'tslint', 'ts', 'systemjs', 'react','cssmin', 'hashres']
    }
}