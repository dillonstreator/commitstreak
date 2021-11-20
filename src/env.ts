import dotenv from 'dotenv'
dotenv.config()

const env: ENV = {
    PORT: process.env.PORT || "3000",
    IS_DEV: process.env.NODE_ENV !== "production",
    GITHUB_ACCESS_TOKEN: process.env.GITHUB_ACCESS_TOKEN,
    GITHUB_GRAPHQL_API_URL: process.env.GITHUB_GRAPHQL_API_URL || "https://api.github.com/graphql",
}

export default env