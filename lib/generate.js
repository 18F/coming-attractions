const fs = require( 'fs' )
const Mustache = require( 'mustache' )
const marky = require( 'marky-markdown' )
const path = require( 'path' )
const sourcePath = path.join( path.dirname( __dirname ), 'source' )
const publicPath = path.join( path.dirname( __dirname ), 'public' )
const message = fs.readFileSync( path.join( sourcePath, 'content', 'message.md' ) )
const data = require( './data' )
const render = require( './render' )

data.message = marky( message.toString() ).html()

if ( ! fs.existsSync( publicPath ) ) {
  // Set up the public directory
  fs.mkdirSync( publicPath )
}

// Copy over the ngnix file
fs.writeFileSync(
  path.join( publicPath, 'nginx.conf' ),
  fs.readFileSync( path.join( sourcePath, 'nginx', 'nginx.conf' ) )
)

// Generate the index file
var htmlTemplate = fs.readFileSync( path.join( sourcePath, 'template', 'layout.html.mo' )).toString()
fs.writeFileSync(
  path.join( publicPath, 'index.html' ),
  render( htmlTemplate, data )
)

// Generate the manifest
var manifestTemplate = fs.readFileSync( path.join( sourcePath, 'cf', 'manifest.yml.mo' ) ).toString()
fs.writeFileSync(
  path.join( path.dirname( __dirname ), 'manifest.yml' ),
  render( manifestTemplate, data)
)
