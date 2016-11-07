const t = require( 'tap' )
const data = require( '../lib/data' )
const pkg = require( '../package.json' )

t.test( 'Ensuring data model', function ( t ) {

  t.plan( 1 )

  t.same( data, pkg.config, 'Expecting data wrapper to be equal to package.json' )

} )
