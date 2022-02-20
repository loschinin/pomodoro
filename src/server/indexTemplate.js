export const indexTemplate = (content, token) => `
    <!doctype html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport"
              content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Reddit</title>
        <script src="/static/client.js" type="application/javascript"></script>
        <script>
            window.__token__ = '${token}'
        </script>
    </head>
    <body>
        <div id="modal_root" style="display: flex; justify-content: center;"></div>
        <div id="drop_down_root"></div>
        <div id="react_root">${content}</div>
        
    </body>
    </html>
`