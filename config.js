module.exports = {
    TOKEN_SECRET: process.env.TOKEN_SECRET || 'A hard to guess string',
    MONGO_URI: process.env.ZINGY_MONGO_URI,
    FACEBOOK_SECRET: process.env.ZINGY_FACEBOOK_SECRET,
    GOOGLE_SECRET: process.env.ZINGY_GOOGLE_SECRET,
    AWS_ACCESS_KEY: process.env.AWS_ACCESS_KEY,
    AWS_SECRET_KEY: process.env.AWS_SECRET_KEY,
    AWS_BUCKET : process.env.AWS_BUCKET
};