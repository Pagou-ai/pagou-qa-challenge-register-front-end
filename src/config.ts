const dev = {
  api_url: import.meta.env.VITE_DEV_URL,
  sdk_token: import.meta.env.VITE_SDK_TOKEN
}

const prod = {
  api_url: import.meta.env.VITE_PROD_URL,
  sdk_token: import.meta.env.VITE_SDK_TOKEN
}

const config = import.meta.env.VITE_STAGE === 'production' ? prod : dev;

export default config;
