function template(req, res) {

    res.send(`
        <html>
            <head>
                <title>Web components example</title>
            </head>
            <body>
                <h1>Webcomponents example</h1>
                <my-paragraph>
                    Show a styled webcomponent that is not affected by the outside styling.
                </my-paragraph>
                <rick-morty></rick-morty>
            </body>
            <footer>
                Footer
            </footer>
            <script src="/assets/index.js"></script>            
        </html>
    `)

}

module.exports = template;