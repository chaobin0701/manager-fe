/*
    环境配置封装
*/
const env = import.meta.env.MODE || "prod";
const EnvConfig = {
development: {
    baseApi: "/",
    mockApi:'https://www.fastmock.site/mock/742bce7ab07ba33fab74e4213b31639c/login'
  },
  test: {
    baseApi: "",
    mockApi:'https://www.fastmock.site/mock/742bce7ab07ba33fab74e4213b31639c/login'
  },
  prod: {
    baseApi: "/",
    mockApi:'https://www.fastmock.site/mock/742bce7ab07ba33fab74e4213b31639c/login'
  },
};
export default {
  env,
  namespace:'store',
  mock: true,
  ...EnvConfig[env]
};
