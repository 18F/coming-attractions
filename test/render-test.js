const t = require( 'tap' )
const render = require( '../lib/render' )

t.test( 'Ensuring render can process Mustache', function ( t ) {

    t.plan( 1 )

    var template = 'Hello, {{key}}'
    var data = { key: 'world' }

    t.equal( 'Hello, world', render( template, data ), 'Our render abstraction can process Mustache!' )

} )
