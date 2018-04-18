import * as React from 'react'
import * as ReactDOMServer from 'react-dom/server'
import * as express from 'express'

import { ITLayout, layout } from '../views/layout'

const clientPort: number = 4100
const app: any = express()

app.use(express.static('./dist'))
app.use(express.static('./public'))

app.get('*', (req: any, res: any) => {

  const clientProp: ITLayout = {
    title: 'client',
    content: '',
    __INITSTATE__: {}
  }

  res.send(layout(clientProp))
})

app.listen(clientPort, () => console.log(`start client: http://localhost:${clientPort}`))