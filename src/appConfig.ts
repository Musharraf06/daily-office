const env: string = process.env.REACT_APP_ENV || 'development';

const config: any = {
  default: {
    excelFileDir: __dirname,
  },
  development: {
    api: 'http://localhost:5000',
  },
  production: {},
  testing: {},
};

export const appConfig = Object.assign({}, config.default, config[env]);
