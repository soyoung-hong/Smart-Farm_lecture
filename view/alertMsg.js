module.exports.alertMsg = function(message, url) {
    return `
        <!doctype html>
        <!DOCYYPE html>
        <html lang='ko'>
        <head>
            <title>Alert Message</title>
            <meta charset="utf-8">
        </head>
        <body>
            <script>
                var message = '${message}';
                var returnUrl = '${url}';
                alert(message);
                document.location.href = returnUrl;
            </script>
        </body>
        </html>
    `;
}