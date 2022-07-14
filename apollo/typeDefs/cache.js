const { gql } = require("apollo-server")

const cache = gql`
    enum CacheControlScope {
        PUBLIC
        PRIVATE
    }

    directive @cacheControl (
        maxAge: Int
        scope: CacheControlScope
    ) on FIELD_DEFINITION | OBJECT | INTERFACE
`

module.exports = { cache }