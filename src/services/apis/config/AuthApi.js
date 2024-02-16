import instance from "./AxiosInstance";

/**
 *
 * @param {Object} param0
 * @param {Object} param0.data
 * @param {Object} param0.headers
 * @param {String} param0.url
 * @param {String} param0.params
 * @returns {Object}
 *
 * This function takes four arguments where `data` and `url` is mandetory
 * where `headers` and `params` are optional parameter.
 */
const LoginAPI = async ({ data, url, headers, params = undefined }) => {
  const response = await instance({
    method: "POST",
    url,
    data,
    headers,
    params,
  });

  if (response.status === 200) {
    return { response: response.data, error: null };
  } else return { error: response.data, response: undefined };
};
const Auth = {
  Login: LoginAPI,
};

export default Auth;
