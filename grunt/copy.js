module.exports =
{
    html:
    {
        expand: true,
        src: 'index.html',
        dest: '.build'
    },
    css:
    {
        expand: true,
        src: 'css/bootstrap.min.css',
        dest: '.build'
    },
    systemjs:
    {
        expand: true,
        cwd: 'node_modules/systemjs/dist/',
        src: 'system.js',
        dest: '.build/js'
    },
    reactjs:
    {
        expand: true,
        cwd: 'node_modules/react/dist/',
        src: 'react.min.js',
        dest: '.build/js'
    },
    reactdom:
    {
        expand: true,
        cwd: 'node_modules/react-dom/dist/',
        src: 'react-dom.min.js',
        dest: '.build/js'
    }
}