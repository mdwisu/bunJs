const env = {
  NODE_ENV: process.env.NODE_ENV,
  NODE_VERSION: process.version,
  BUN_VERSION: Bun.version,
  database: {
    host: process.env["DATABASE_HOST"],
    port: process.env["DATABASE_PORT"],
    user: process.env["DATABASE_USER"],
    password: process.env["DATABASE_PASSWORD"],
    name: process.env["DATABASE_NAME"],
  },
};

console.log(env);
