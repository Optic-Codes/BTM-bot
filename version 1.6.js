const Discord = require('discord.js')
const client = new Discord.Client
var prefix = '!'
require('dotenv').config();
let defaultactivity = prefix + 'help'
let defaultactivityType = 'STREAMING'


client.once('ready', ()=> {
    console.log("bot is online");
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setActivity(defaultactivity, { type: defaultactivityType});
});

// commands
client.on('message', message=> {
    if(!message.content.startsWith(prefix) || message.author.bot) return;
  
    const args = message.content.slice(prefix.length).split("/ +/");
    const comand = args.shift().toLowerCase();
  
    if(comand === 'test') {
      message.channel.send("it worked!");
      console.log('test comand was used');
      console.log('the test comand worked');
    } else if (comand ==='test.') {
      message.channel.send("it worked.");
      console.log('test comand was used');
      console.log('the test comand worked');
    } else if (comand === 'merch') {
        message.reply('https://www.bonfire.com/start-campaign/preview/d82d4fbf-1ad5-44fb-a686-a496b6f2bc0e/');
    } else if (comand === 'join') {
        message.reply('tryouts are closed at this time.');
        console.log('someone wants to join team BTM');
    } else if (comand === 'prefix') {
        message.reply('the prefix is ' + prefix)
    } else if (comand === 'help'){
        message.react('✅');
        const helpEmbed = new Discord.MessageEmbed()
        .setAuthor('help')
        .setColor('ff0000')
        helpEmbed.addField(prefix + 'join will let you know how to join team BTM')
        helpEmbed.addField(prefix +'commands will let send a list of commands')
        .setDescription(' ');
        message.channel.send(helpEmbed);
    } else if (comand === 'comands') {
        let comandsEmbed = new Discord.MessageEmbed()
        .setColor('ff0000')
        .setAuthor('commands')
        .addField(prefix + 'join')
        .addField(prefix + 'help')
        .addField(`${prefix}av`)
        message.channel.send(comandsEmbed)
    } else if (comand === 'hi') {
        message.channel.send('hello');
    } else if (comand === 'ping me') {
        message.reply(' okay.')
    } else if (comand === 'rules'){
        message.reply('Check the rules channel.')
        message.react('👍')
    }
  })

// prefix questions
client.on('message', message => {
    if (message.content === 'whats the btm bot prefix') {
        message.channel.send('my prefix is' + '`' + prefix + '`');
    } else if (message.content === 'what is the btm bot prefix') {
        message.channel.send('my prefix is' + '`' + prefix + '`');
    } else if (message.content === 'what is the btm bot prefix?') {
        message.channel.send('my prefix is' + '`' + prefix + '`');
    }

}) 


// misc comands

client.on('message', message => {
    let args = message.content.substring(prefix.length).split(' ');
    
    if (message.content.startsWith(`${prefix}av`)) {
        const prefix = require ('./index.js');
        const avitarEmbed = new Discord.MessageEmbed()
        
        if (!message.mentions.users.first()) {
            avitarEmbed.setTitle('Your avitar:')
            avitarEmbed.setColor('ff0000')
            avitarEmbed.setThumbnail(message.author.displayAvatarURL())
            return message.channel.send(avitarEmbed)
        } else if (message.mentions.users.first) {
            const user = message.mentions.users.first()
            avitarEmbed.setTitle(`${user.tag}'s avitar:`)
            avitarEmbed.setThumbnail(user.displayAvatarURL())
            avitarEmbed.setColor('ff0000')
            avitarEmbed.setThumbnail(user.displayAvatarURL())
            return message.channel.send(avitarEmbed)
        }
    } 
})

client.on('message', message => {
    let args = message.content.substring(prefix.length).split(' ');
    
    if (message.content.startsWith(`${prefix}avitar`)) {
        const prefix = require ('./index.js');
        const avitarEmbed = new Discord.MessageEmbed()
        
        if (!message.mentions.users.first()) {
            avitarEmbed.setTitle('Your avitar:')
            avitarEmbed.setColor('ff0000')
            avitarEmbed.setThumbnail(message.author.displayAvatarURL())
            return message.channel.send(avitarEmbed)
        } else if (message.mentions.users.first) {
            const user = message.mentions.users.first()
            avitarEmbed.setTitle(`${user.tag}'s avitar:`)
            avitarEmbed.setThumbnail(user.displayAvatarURL())
            avitarEmbed.setColor('ff0000')
            avitarEmbed.setThumbnail(user.displayAvatarURL())
            return message.channel.send(avitarEmbed)
        }
    } 
})
client.on('message', message =>{
    if (message.content == 'what is my pfp') {
        message.channel.send(message.author.displayAvatarURL())
    } else if (message.content == 'what is my avitar'){
        message.channel.send(message.author.displayAvatarURL())
    } else if (message.content == `what's my pfp`) {
        message.channel.send(message.author.displayAvatarURL())
    } else if (message.content == 'whats my pfp') {
        message.channel.send(message.author.displayAvatarURL())
    } else if (message.content == 'whats my pfp?') {
        message.channel.send(message.author.displayAvatarURL())
    } else if (message.content == 'what is my pfp') {
        message.channel.send(message.author.displayAvatarURL())
    } else if (message.content == 'what is my pfp?') {
        message.channel.send(message.author.displayAvatarURL())
    } else if (message.content == `whats my avitar`){
        message.channel.send(message.author.displayAvatarURL())
    } else if (message.content == `what's my avitar?`) {
        message.channel.send(message.author.displayAvatarURL())
    } else if (message.content == `whats' my avitar`) {
        message.channel.send(message.author.displayAvatarURL())
    }
})


const guildId = '808853454331445309'
// this is the test server.

// slash commands

const getApp = (guildId) => {
    const app = client.api.applications(client.user.id)
    if (guildId) {
        app.guilds(guildId)
    }
    return app;
}

 client.on('ready', async () => {
    const commands = await getApp(guildId).commands
    // console.log(commands);

    await getApp(guildId).commands.post({
        data: {
            name: 'hi',
            description: 'respond with hi',
        }
    })
 })



 client.on('message', async message => {
    // Voice only works in guilds, if the message does not come from a guild,
    // we ignore it
    if (!message.guild) return;
  
    if (message.content === `${prefix}joinvc`) {
      // Only try to join the sender's voice channel if they are in one themselves
      if (message.member.voice.channel) {
        const joinvc = await message.member.voice.channel.join();
      } else {
        message.reply('You need to join a voice channel first!');
      }
    } if (message.content === `${prefix}leavevc`) {
        if (message.member.voice.channel) {
            const leavevc = await message.member.voice.channel.leave();
        }
    }
  });

client.login(process.env.token);
