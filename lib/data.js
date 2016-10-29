/**
 * A serializer for the configuration data in the `package.json` which simply
 * maps the config object to a plain POJO.
 */
module.exports = require( '../package.json' )[ 'config' ]
