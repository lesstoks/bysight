export interface DbConfig {
  name: string;
  user: string;
  password: string;
  host: string;
  port: number;
  driver: string;
}

export default (): DbConfig => ({
  name: process.env.BYS_DB_NAME as string,
  user: process.env.BYS_DB_USER as string,
  password: process.env.BYS_DB_PASSWORD as string,
  host: process.env.BYS_DB_HOST as string,
  port: parseInt(process.env.BYS_DB_PORT as string, 10) || 5432,
  driver: 'postgresql',
});
