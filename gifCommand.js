const { EmbedBuilder } = require('discord.js');
const fetch = require("node-fetch")

module.exports = {
    name: 'gif',
    aliases: [],
    category: 'scrapers',
    utilisation: 'gif',
    desc: "Sends a random gif",
async execute(bot, messageCreate, args) {
	//res => response, req => request
const key = process.env.tenorkey //put your tenor key in an .env file and name the variable tenorkey
const env = require('dotenv').config()
	try
    {
        //you can put mutliple urls in a list and pick one randomly
        //here is an example
        //const urls = [`https://g.tenor.com/v1/search?q=cat&key=${key}&limit=20`,`https://g.tenor.com/v1/search?q=cute%20cat&key=${key}&limit=20`,`https://g.tenor.com/v1/search?q=stray%20cat&key=${key}&limit=20`]
        //const url = urls[Math.floor(Math.random(urls))]

        let url = `https://g.tenor.com/v1/search?q=cute%20cats&key=${key}&limit=8` //change the search query e.g. search?q=sword%20%20art%20online
        let response = await fetch(url); //request
        let json = await response.json()//response
        const index = Math.floor(Math.random() * 8);
        const embed =  new EmbedBuilder()
		embed.setImage(json.results[index].media[0].mediumgif.url)
        embed.setColor('Blue');
		messageCreate.channel.send({embeds:[embed]});

	}
	catch(e){
        console.log(e)
        return messageCreate.channel.send("An error has occured, run the command again!")
    };
}}
