let dashcore = require('@dashevo/dashcore-lib');
const got = require('got');
var sender = 'yRbiY9J6s89C8aWKiJcNPtSby4QhDDHH6q'
var receiver = 'yj1Hdpm7HL6TMumiNYkNT14DuSoS9E6u5Y'
var senderPrivatekey = 'c1ef6b208563ed0211e19544ada36c7ea8b40aca0b59de87224f2ffef89e6f7e'
let token = ''
let url = `https://api.chainrider.io/v1/dash/testnet/addr/${sender}/utxo?token=${token}`
let send_amount = 20000
//  GRADED FUNCTION
//  TASK-1: Write a function that sends {send_amount} of dash from {sender} to {receiver}.
//  Register on ChainRider to get a ChainRider token (instructions provided) and input its value as {token}
//  Create a transaction using the {dashcore} library, and send the transaction using ChainRider
//  Send Raw Transaction API - https://www.chainrider.io/docs/dash/#send-raw-transaction
//  The resulting transaction ID is needed to be supplied through the Assignment on Coursera


