const fs = require( 'fs' )
const path = require( 'path' )
const sourcePath = path.join( path.dirname( __dirname ), 'source' )
const publicPath = path.join( path.dirname( __dirname ), 'public' )
const data = require( './data' )
const render = require( './render' )

var filePaths = {
  manifest: path.join( path.dirname( __dirname ), 'manifest.yml' ),
  html: path.join( publicPath, 'index.html' ),
  nginx: path.join( publicPath, 'nginx.conf' ),
}

if ( ! fs.existsSync( publicPath ) ) {
  // Set up the public directory
  fs.mkdirSync( publicPath )
}

// Copy over the nginx file
fs.writeFileSync(
  filePaths.nginx,
  fs.readFileSync( path.join( sourcePath, 'nginx', 'nginx.conf' ) )
)

// Generate the index file
var htmlTemplate = fs.readFileSync( path.join( sourcePath, 'template', 'layout.html.mo' )).toString()
fs.writeFileSync(
  filePaths.html,
  render( htmlTemplate, data )
)

// Generate the manifest
var manifestTemplate = fs.readFileSync( path.join( sourcePath, 'cf', 'manifest.yml.mo' ) ).toString()
fs.writeFileSync(
  filePaths.manifest, 
  render( manifestTemplate, data)
)

module.exports = filePaths
