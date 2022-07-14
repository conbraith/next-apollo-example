const { ApolloServer, gql } = require('apollo-server')
const Keyv = require("keyv")
const { KeyvAdapter } = require("@apollo/utils.keyvadapter")

const mongoose = require('mongoose')
const { models } = mongoose

const schemas = require("./schemas")
const bootstrapDB = require("./schemas/bootstrap")
bootstrapDB()

const typeDefs = gql`
    enum CacheControlScope {
        PUBLIC
        PRIVATE
    }

    directive @cacheControl (
        maxAge: Int
        scope: CacheControlScope
    ) on FIELD_DEFINITION | OBJECT | INTERFACE

    type Comment {
        id: String
        content: String
        user_id: Int
        created_time: String
        updated_time: String
    }

    input CommentInput {
        content: String
        user_id: Int
        created_time: String
        updated_time: String
    }

    type Post {
        id: String
        content: String
        user_id: Int
        created_time: String
        updated_time: String
        comments: [Comment] 
    }

    input PostInput {
        content: String
        user_id: Int
        created_time: String
        updated_time: String
    }

    type Query {
        getPosts: [Post] @cacheControl(maxAge: 30)
        getComments: [Comment] @cacheControl(maxAge: 30)
    }

    type Mutation {
        addPost(
            post: PostInput
        ): Post
        addComment(
            postId: Int
            comment: CommentInput
        ): Comment
    }
`;

resolvers = {
    Query: {
        getPosts: async (_, {}, { services }) => {
            return await schemas.post.find()
        },
        getComments: async (_, { postId }, { services }) => {
            return await schemas.post.find({ id: postId }).comments
        },
    },
    Mutation: {
        addPost: async (_, { values }, { services }) => {
            return await schemas.post.create(values)
        },
        addComment: async (_, { postId, values }, { services }) => {
            const post = await schemas.post.find({ id: postId })
            const comment = new schemas.comment(values)
            return post.comments.push(comment)
        }
    },
}

const server = new ApolloServer({
    typeDefs,
    resolvers,
    // cache: new KeyvAdapter(new Keyv("redis://user:pass@localhost:6379"),
    cache: new KeyvAdapter(new Keyv(process.env.REDIS_URL)),
})

server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`)
})
