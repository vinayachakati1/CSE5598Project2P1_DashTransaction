let dashcore = require('@dashevo/dashcore-lib');
const got = require('got');
var sender = 'yTYZjnTuepHbVAcoWq4g7f5teXru4KSJMa'
var receiver = 'yNpEzKCvS2Vn3WYhXeG11it5wEWMButDvq'
var senderPrivatekey = 'adb27adb845cf776e49ba7f09e58cf53182fcdfd5c3c1ac919340117b41e1a7b'
let token = '8PGdgeEbzxm7SvMWdM4MBIJU5lvnL2w7'
let url = `https://api.chainrider.io/v1/dash/testnet/addr/${sender}/utxo?token=${token}`
///url1=https://api.chainrider.io/v1/dash/testnet/addr/yTYZjnTuepHbVAcoWq4g7f5teXru4KSJMa/utxo?token=8PGdgeEbzxm7SvMWdM4MBIJU5lvnL2w7
//url2=https://api.chainrider.io/v1/dash/testnet/addr/yNpEzKCvS2Vn3WYhXeG11it5wEWMButDvq/utxo?token=8PGdgeEbzxm7SvMWdM4MBIJU5lvnL2w7
let send_amount = 20000
//  GRADED FUNCTION
//  TASK-1: Write a function that sends {send_amount} of dash from {sender} to {receiver}.
//  Register on ChainRider to get a ChainRider token (instructions provided) and input its value as {token}
//  Create a transaction using the {dashcore} library, and send the transaction using ChainRider
//  Send Raw Transaction API - https://www.chainrider.io/docs/dash/#send-raw-transaction
//  The resulting transaction ID is needed to be supplied through the Assignment on Coursera

/*
Verify which of the following addresses has money use that address as sender and the other address as receiver
{
  pk: 'adb27adb845cf776e49ba7f09e58cf53182fcdfd5c3c1ac919340117b41e1a7b',
  address: 'yTYZjnTuepHbVAcoWq4g7f5teXru4KSJMa'
}

{
  pk: 'ce479af60e74653d9b8f0f09ec00dbd5ec0b60b8e4d0463d392e0dac60cf77f3',
  address: 'yNpEzKCvS2Vn3WYhXeG11it5wEWMButDvq'
}*/

 


