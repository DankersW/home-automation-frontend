var config = {}

const docker_host = "http://" + window.location.hostname
const backend = docker_host + ":4000"

config.docker_host = docker_host
config.temp_humi_url= backend + "/api/temp"
config.mongo_express = docker_host + ":8081" 

module.exports = config;
