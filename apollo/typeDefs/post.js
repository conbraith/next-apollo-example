const { gql } = require("apollo-server")

const comment = gql`
    type Post {
        id: Int
        content: String
        user_id: Int
        created_time: String
        updated_time: String
        comments: [Comment] 
    }
`

module.exports = { comment }