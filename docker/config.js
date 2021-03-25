var config = {}

const backend = "http://" + window.location.hostname + ":4000"

config.tempHumiUrl= backend + "/api/temp"

module.exports = config;
