module.exports = {
    TOKEN_SECRET: process.env.TOKEN_SECRET || 'A hard to guess string',
    MONGO_URI: process.env.MONGO_URI || 'localhost',
    FACEBOOK_SECRET: process.env.FACEBOOK_SECRET || 'fb',
    GOOGLE_SECRET: process.env.GOOGLE_SECRET || 'google'
};