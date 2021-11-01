module.exports =  {
    entry: './src/functions.js',
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname,'public'),
        libraryTarget: "var",
        library: "Odev2"
    },
    devServer: {
        contentBase:'./public',
        injectClient:false
    }
}