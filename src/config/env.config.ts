export const envConfiguration = () => ({
    mongoDb: process.env.MONGO_DB_URI,
    defaultLimit: +process.env.DEFAULT_LIMIT,
});
