module.exports = {
    MONGO_IP: process.env.MONGO_IP || 'mongo',
    MONGO_PORT: process.env.MONGO_PORT || 27017,
    MONGO_USER: process.env.MONGO_USER,
    MONGO_PASSWORD: process.env.MONGO_PASSWORD,
    REDIS_URL: process.env.REDIS_URL || '192.168.48.2',
    REDIS_PORT: process.env.REDIS_PORT || 6379,
    SESSION_SCRETE: process.env.SESSION_SCRETE
}