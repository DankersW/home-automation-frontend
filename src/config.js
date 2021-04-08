var config = {}

//const hostname = "localhost"
const hostname = "192.168.1.140"

const docker_host = "http://" + hostname
const backend = docker_host + ":4000"

config.docker_host = docker_host

config.temp_humi_url = backend + "/api/temp"
config.api_list = backend + "/api/"
config.mongo_express = docker_host + ":8081" 

module.exports = config;

