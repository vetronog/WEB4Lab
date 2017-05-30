module.exports =
{
    build:{
        options:
        {
            module: 'system',
            target: 'es5',
            noImplicitAny: true,
            noEmitOnError: true,
            sourceMap: false
        },
        src: 'ts/*.ts',
        out: '.build/js/Main.js'
    }
}