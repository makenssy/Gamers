// Calling the package
var Discord = require('discord.js');
var bot = new Discord.Client();

// Listener Event: Message Received
bot.on('message', message => {

// Variables
  var sender = message.author; // The person who sent the message
  var msg = message.content.toUpperCase(); // Takes the message, and makes it all uppercase
  var prefix = '>' // The text before commands, you can set this to what ever you want

  
// Ping / Pong
  if (message.content.startsWith(prefix + "ping")) {
            const embed = new Discord.RichEmbed()
                .setColor('0x000000')
                .setDescription(`:ping_pong: Pong! \`\n${Math.round(bot.ping)}ms\`\ `)
            message.channel.send({ embed })};
  
});

// Bot Launched
bot.on('ready', () => {
    console.log('Liftoff...') //

    bot.user.setStatus('Idle')


});

// User joining.
bot.on('guildMemberAdd', member => {

    console.log('User ' + member.user.username + ' has joined the server!')
    console.log(member)

    var role = member.guild.roles.find('name', '🎮Gamer');
    member.addRole(role)

    const embed = new Discord.RichEmbed()
              .setDescription(`:ballot_box_with_check:  Welcome to **Gamers!** ${member.user}!!`)
              .setColor('0x00FF66')

    member.guild.channels.get('375618547373703168').send({embed});


});

// User Leaving
bot.on('guildMemberRemove', member => {

  const embed = new Discord.RichEmbed()
            .setDescription(`${member.user} left`)


  member.guild.channels.get('375618547373703168').send({embed});


});

bot.login(process.env.BOT_TOKEN);
