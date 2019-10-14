import dotenv from "dotenv";

// Set the NODE_ENV to 'development' by default
process.env.NODE_ENV = process.env.NODE_ENV || "development";

const env = dotenv.config();

if (!env) {
  throw new Error("Could not find .env. file");
  process.exit(1);
}

const config = {
  // API configs
  api: {
    prefix: "/api"
  },

  // Mongo DB url
  databaseUrl: String(process.env.MONGODB_URI),

  // Node environment
  env: String(process.env.NODE_ENV),

  // JWT secret
  jwtSecret: String(process.env.JWT_SECRET),

  // Log settings (winston)
  logs: {
    level: process.env.LOG_LEVEL || "debug"
  },

  // Port
  port: parseInt(process.env.PORT as string, 10)
};

export default config;
