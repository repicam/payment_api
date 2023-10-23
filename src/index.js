import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import path from 'path'

const app = express()

app.use( express.json() )
app.use( cors() )
app.use( morgan( 'dev' ) )

app.use( express.static( path.resolve( './src/public' ) ) )

app.listen( 8080, () => {
  console.log( `Server on port 8080` )
} )