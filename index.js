//Instala el npm: npm i -s miau-api
const miau = require('miau-api')
//Con el método async
let img = await miau.gato()

console.log(img)

//Para discord:
//Necesitas obviamente el package de discord.js
const miau require('miau-api')
//En donde empiezas el evento message necesitas poner async: client.on('message', async message => {
    //                                                                            ^^^^^
const img = await miau.gato()

//Mediante un mensaje normal:
message.channel.send(img)
//Mediante un embed:
const embed = new Discord.MessageEmbed()
.setImage(img)

messge.channel.send(embed)
