export interface AppConfig {
  port: number;
}

export default (): AppConfig => ({
  port: parseInt(process.env.PORT as string, 10) || 3000,
});
