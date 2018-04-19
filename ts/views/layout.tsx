export interface ITLayout {
  title: string
  content: string
  __INITSTATE__: any
}

export const layout = (props:ITLayout): string => `
  <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
      <title>${props.title}</title>
      <link rel="stylesheet" href="https://cdn.bootcss.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
      <style>
        ul,li {
          margin: 0;
          padding: 0;
          list-style: none;
        }
        .itemlist{
          margin-top: 20px
        }
        .itemlist li {
          float: left;
          width: 1%;
          line-height: 2;
          text-align: center;
          cursor: pointer;
        }
      </style>
    </head>
    <body>
      <div id="root">${props.content || ''}</div>
      <script src="/manifest.js"></script>
      <script src="/vendor.js"></script>
      <script src="/index.js"></script>
      <script>
        window.__INITSTATE__ = ${JSON.stringify(props.__INITSTATE__ || {})}
      </script>
    </body>
  </html>
`