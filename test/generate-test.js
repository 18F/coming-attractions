const t = require( 'tap' )
const fs = require( 'fs' )
const generate = require( '../lib/generate' )

t.test( 'Ensuring files are generated where they should be', function ( t ) {

  t.plan( 3 )

  t.ok( fs.existsSync( generate.manifest ), 'Expecting manifest to exist' )
  t.ok( fs.existsSync( generate.html ), 'Expecting html to exist' )
  t.ok( fs.existsSync( generate.nginx ), 'Expecting nginx to exist' )

} )
