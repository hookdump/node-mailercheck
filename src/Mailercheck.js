const axios = require("axios");

let headers = {
  "X-Version": "2022-10-01", // lock to a specific version of the API
  "X-Requested-With": "XMLHttpRequest",
  Content_type: "application/json",
};

module.exports = class Mailercheck {
  constructor(config) {
    this.api_key = config.api_key;
    this.basePath = "https://app.mailercheck.com/api/v1";
    headers.Authorization = `Bearer ${this.api_key}`;
  }

  async checkEmail({ email }) {
    const response = await axios.post(
      this.basePath + "/check/single",
      { email },
      { headers }
    );
    const data = response.data;
    const statusCode = response.status;

    if (response.status !== 200) {
      throw "Oops something went wrong, please try again later or contact support here: https://www.mailercheck.com/support";
    } else {
      return { message: data.status, status: statusCode };
    }
  }

  async createList({ emails }) {
    const response = await axios.post(
      this.basePath + "/lists",
      { emails },
      { headers }
    );
    const data = response.data;
    const statusCode = response.status;

    if (response.status !== 200) {
      throw "Oops something went wrong, please try again later or contact support here: https://www.mailercheck.com/support";
    } else {
      return { message: data.status, status: statusCode };
    }
  }

  async verifyList({ id }) {
    const response = await axios.post(
      this.basePath + "/lists/" + id + "/verify",
      {},
      { headers }
    );
    const data = response.data;
    const statusCode = response.status;

    if (response.status !== 200) {
      if (response.status === 402) {
        throw "Not enough credits. Credits required: " + data.creditsRequired;
      } else {
        throw data.error;
      }
    } else {
      return { message: data.status, status: statusCode };
    }
  }

  async getListResults({ id, page, result }) {
    let params = {};
    if (page) {
      params.page = page;
    }
    if (result) {
      params.result = result;
    }
    const response = await axios.get(
      this.basePath + "/lists/" + id + "/results",
      { headers, params }
    );
    const data = response.data;
    const statusCode = response.status;

    if (response.status !== 200) {
      throw "Oops something went wrong, please try again later or contact support here: https://www.mailercheck.com/support";
    } else {
      return { message: data.status, status: statusCode };
    }
  }
};
