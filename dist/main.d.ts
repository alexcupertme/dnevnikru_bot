import "./config";
declare global {
    namespace NodeJS {
        interface ProcessEnv {
            MONGO_USER: string;
            MONGO_PWD: string;
            MONGO_HOST: string;
            REDIS_PWD: string;
            REDIS_HOST: string;
            REDIS_PORT: string;
            REDIS_LEGACY_PWD: string;
            REDIS_LEGACY_HOST: string;
            REDIS_LEGACY_PORT: string;
            TELEGRAM_TOKEN: string;
        }
    }
}
