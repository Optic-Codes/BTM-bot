const Discord = require('discord.js')
const client = new Discord.Client
client.commands = new Discord.Collection();
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
        message.channel.send('https://www.bonfire.com/start-campaign/preview/d82d4fbf-1ad5-44fb-a686-a496b6f2bc0e/');
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
    } else if (comand === 'av') {
        
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


// slash commands
// comeing soon

// misc comands

// avitar comand

client.on('message', message => {
    let args = message.content.substring(prefix.length).split(' ');
    const av = 'av'
    
    if (message.content.startsWith(`${prefix}${av}`)) {
        const prefix = require ('./index.js');
        const avitarEmbed = new Discord.MessageEmbed()
        
        if (!message.mentions.users.first()) {
            avitarEmbed.setTitle('Your avitar:')
            avitarEmbed.setColor('ff0000')
            avitarEmbed.setThumbnail(message.author.displayAvatarURL())
            avitarEmbed.setDescription('This is your avitar.')
            return message.channel.send(avitarEmbed)
        } else {
            const user = message.mentions.first()
            avitarEmbed.setTitle(`${user.tag}'s avitar:`)
            avitarEmbed.setThumbnail(user.displayAvatarURL())
        }
    }
})

client.login(process.env.token);

