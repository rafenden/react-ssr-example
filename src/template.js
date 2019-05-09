// html skeleton provider
function template(title, initialState = {}, content = '') {
  // Dynamically ship scripts based on render type
  const scripts = `
    <script>
      window.__STATE__ = ${JSON.stringify(initialState)}
    </script>
    <script src="assets/client.js"></script>
  `

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="utf-8">
      <title> ${title} </title>
      <link href="assets/style.css" rel="stylesheet">
    </head>
    <body>
      <div id="app" class="wrap-inner">
        <!--- magic happens here -->  ${content}
      </div>
    
      ${scripts}
    </body>
  `
}

module.exports = template
