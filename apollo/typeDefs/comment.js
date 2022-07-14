const { gql } = require("apollo-server")

const comment = gql`

    type Comment {
        id: Int
        content: String
        user_id: Int
        created_time: String
        updated_time: String
    }

    type Post {
        id: Int
        content: String
        user_id: Int
        created_time: String
        updated_time: String
        comments: [Comment] 
    }

    type Query {
        posts: [Post] @cacheControl(maxAge: 30)
    }

    type Mutations {
        addPost: [Post]
    }
`

module.exports = { comment }