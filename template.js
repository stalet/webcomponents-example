function between(min, max) {  
    return Math.floor(
        Math.random() * (max - min) + min
    )
}
  
function template(req, res) {

    res.send(`
        <html>
            <head>
                <title>Web components example</title>
            </head>
            <body>
                <h1>Webcomponents example</h1>
                <my-paragraph>
                    Show a styled webcomponent that is not affected by the outside styling. <br/>
                    Se the source on <a href="https://github.com/stalet/webcomponents-example">GitHub</a><br/>
                    <a href="/">Reload</a> to see more Rick and Morty characters.

                </my-paragraph>
                <p>
                <rick-morty data-id="${between(1,827)}"></rick-morty>
                <rick-morty data-id="${between(1,827)}"></rick-morty>
                <rick-morty data-id="${between(1,827)}"></rick-morty>
                <rick-morty data-id="${between(1,827)}"></rick-morty>
                <rick-morty data-id="${between(1,827)}"></rick-morty>
            </body>
            <script src="/assets/index.js"></script>            
        </html>
    `)

}

module.exports = template;