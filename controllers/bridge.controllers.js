const Web3 = require("web3");
const web3 = new Web3('https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161');
// const ETHSCAN_API_KEY = process.env.ETHSCAN_API_KEY;
const ETHSCAN_API_KEY = "7IXX3N8IES6A82693PYFWHGNKNB9RU5DJN";
const axios = require('axios');
const uniswap_address_v3 = "0xE592427A0AEce92De3Edee1F18E0157C05861564"
const uniswap_address_v2 = "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D";
const puppeteer = require("puppeteer");
const constants = require("../config/constants");
const constantHP = require("../config/constantHP");

var History = require('../models/history.js');

exports.suggestedFees = async (req, res, next) => {
  // https://api.bondbridge.org/suggested-fees?token=0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2&destinationChainId=42161&originChainId=1&amount=1000000000000000000&skipAmountLimit=true
  const url = `https://across.to/api/suggested-fees?token=${req.query.token}&destinationChainId=${req.query.destinationChainId}&originChainId=${req.query.originChainId}&amount=${req.query.amount}&skipAmountLimit=${req.query.skipAmountLimit}`
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  try {
    await axios.get(url)
    .then(response => {
      res.send(response.data);
      return;
    })
    .catch(error => {
      next(error);
    });
  } catch (err) {
    next(err);
  }
}

exports.getLimits = async (req, res, next) => {
  // https://api.bondbridge.org/limits?token=0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2&originChainId=1&destinationChainId=42161
  const url = `https://across.to/api/limits?token=${req.query.token}&destinationChainId=${req.query.destinationChainId}&originChainId=${req.query.originChainId}`
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  try {
    await axios.get(url)
    .then(response => {
      res.send(response.data);
      return;
    })
    .catch(error => {
      next(error);
    });
  } catch (err) {
    next(err);
  }
}

exports.getCoingecko = async (req, res, next) => {
  // https://api.bondbridge.org/coingecko?l1Token=0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2&baseCurrency=usd
  const url = `https://across.to/api/coingecko?l1Token=${req.query.l1Token}&baseCurrency=${req.query.baseCurrency}`
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  try {
    await axios.get(url)
    .then(response => {
      res.send(response.data);
      return;
    })
    .catch(error => {
      next(error);
    });
  } catch (err) {
    next(err);
  }
}

exports.getPools = async (req, res, next) => {
  // https://api.bondbridge.org/pools?token=0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2
  const url = `https://across.to/api/pools?token=${req.query.token}`
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  try {
    await axios.get(url)
    .then(response => {
      res.send(response.data);
      return;
    })
    .catch(error => {
      next(error);
    });
  } catch (err) {
    next(err);
  }
}