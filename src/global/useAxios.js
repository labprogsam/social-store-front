import axios from 'axios';
import { useCallback } from 'react';
// import { parse as parseCookie } from "cookie";

// ================ variables ================ //

const mainUrl = process.env.REACT_APP_MAIN_URL;

const api = axios.create({
  baseURL: mainUrl,
});

// ================ functions ================ //

const getOptions = () => {
  let headers = {
    'Access-Control-Allow-Origin': '*',
  };
  return {
    headers,
  };
};

function useAxios(...methods) {
    if (methods.length === 0)
      throw new TypeError(
        'Methods array is empty, add a method to `useAxios` parameters',
      );
  
    const functions = methods.map((method) => {
      if (!['get', 'post', 'put', 'delete', 'patch'].includes(method)) {
        throw new TypeError(`Invalid method (${method})`);
      }
  
      const httpRequest = async ({
        url: relativeUrl = '/',
        body = {},
        success = () => {},
        error = () => {},
        config = {},
      }) => {
        try {
          const headers = getOptions().headers;
  
          const methodsArguments = {
            get: [{ headers, ...config }],
            post: [body, { headers, ...config }],
            put: [body, { headers, ...config }],
            patch: [body, { headers, ...config }],
            delete: [{ headers, data: body, ...config }],
          };
          const res = await api[method](relativeUrl, ...methodsArguments[method]);
  
          await success(res, body);
          return res;
        } catch (err) {
          console.log(err.response);
          await error(err);
  
          return err;
        }
      };
  
      return httpRequest;
    });
  
    const first = useCallback(functions[0], []);
    const second = useCallback(functions[1], []);
    const third = useCallback(functions[2], []);
    const fourth = useCallback(functions[3], []);
    const fifth = useCallback(functions[4], []);
  
    return [
      ...(first ? [first] : []),
      ...(second ? [second] : []),
      ...(third ? [third] : []),
      ...(fourth ? [fourth] : []),
      ...(fifth ? [fifth] : []),
    ];
}

export { useAxios };