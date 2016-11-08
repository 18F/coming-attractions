/**
 * A serializer for the configuration data in the `package.json` which simply
 * maps the config object to a plain POJO.
 */

const fs = require( 'fs' )
const path = require( 'path' )
const marky = require( 'marky-markdown' )
const sourcePath = path.join( path.dirname( __dirname ), 'source' )
const message = fs.readFileSync( path.join( sourcePath, 'content', 'message.md' ) )

module.exports = ( function () {
  var config = require( '../package.json' )[ 'config' ]
  config.message = marky( message.toString() ).html()
  return config;
} )()
