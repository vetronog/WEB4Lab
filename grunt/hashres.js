module.exports =
{
    options:
{
    fileNameFormat: '${name}.[${hash}].${ext}'
},
    build:
    {
        src: ['.build/js/*.js', '.build/css/*.css'],
        dest: '.build/index.html'
    }
}