const axios = require('axios');

class CoinbaseAPI {
  constructor() {
    this.apiKey = process.env.API_KEY;
    this.api = axios.create({
      baseURL: `https://api.coinbase.com/v2/ `,
    });
    this.customApi = axios.create({
      baseURL: ``,
    });
  }