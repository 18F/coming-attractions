const fs = require( 'fs' )
const Mustache = require( 'mustache' ) 

module.exports = function renderMustacheTemplate ( template, data ) {
   return Mustache.render( template, data ) 
}
