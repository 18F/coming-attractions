const t = require( 'tap' )
const data = require( '../lib/data' )

t.test( 'Ensuring data model', function ( t ) {

  t.plan( 2 )

  t.ok( data, 'Expecting data to exist' )

  t.ok( data.message, 'The data should contain a message' )

} )
