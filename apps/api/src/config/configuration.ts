export default () => ({
  database: {
    host: process.env.BSG_DB_HOST,
    port: parseInt(process.env.BSG_DB_PORT as string, 10) || 5432,
    user: process.env.BSG_DB_USER,
    password: process.env.BSG_DB_PASSWORD,
    name: process.env.BSG_DB_NAME,
  },
})
