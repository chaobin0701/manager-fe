/*
    环境配置封装
*/
const env = import.meta.env.MODE || "prod";
const EnvConfig = {
development: {
    baseApi: "/api",
    mockApi:'https://www.fastmock.site/mock/2fcc40d650412bfba15b527723b9fdfb/api'
  },
  test: {
    baseApi: "",
    mockApi:'https://www.fastmock.site/mock/2fcc40d650412bfba15b527723b9fdfb/api'
  },
  prod: {
    baseApi: "/",
    mockApi:'https://www.fastmock.site/mock/2fcc40d650412bfba15b527723b9fdfb/api'
  },
};
export default {
  env,
  namespace:'manager',
  mock: true,
  ...EnvConfig[env]
};
