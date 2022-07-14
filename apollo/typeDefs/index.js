const { gql } = require("apollo-server")
const { cache } = require('./cache');
const { post } = require('./post');
const { comment } = require('./comment');

const queries = gql`
    type Query {
        posts: [Post] @cacheControl(maxAge: 30)
    }
`

const mutations = gql`
    type Mutations {
        addPost: [Post]
    }
`

module.exports = [
    cache,
    post,
    comment,
    queries,
    mutations,
]