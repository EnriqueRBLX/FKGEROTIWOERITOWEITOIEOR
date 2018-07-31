const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('ready', () => {
	console.log('Bot connected.')
  bot.user.setPresence({ game: { name: 'HOTEL HOTEL HOTEL HOTEL HOTEL HOTEL HOTEL', type: "playing"}});
})

bot.on('message', (message) => {

	if (message.author.id == '455407534183022592') {
		return;
	}

 if (message.content.startsWith("ping")){ // when message is !bot
		message.reply('pong');
	}


	if(message.content == 'hotel') {
		message.channel.sendMessage('https://web.roblox.com/games/1458214729/UPDATE-HOTEL-HOTEL-HOTEL-HOTEL-HOTEL-HOTEL');
	}

	if(message.content == 'hotel') {
		message.channel.sendMessage('https://web.roblox.com/games/1458214729/UPDATE-HOTEL-HOTEL-HOTEL-HOTEL-HOTEL-HOTEL');
	}

	if(message.content == 'group') {
		message.reply('https://web.roblox.com/groups/group.aspx?gid=3912348');
	}

 if (message.content.startsWith("job")){ // when message is !bot
		message.reply("Join the group of the hotel and visit application center, if you don't know who is the group say group https://web.roblox.com/games/1465530360/Application-Center ");
	}

	if (message.content === 'what is my avatar') {
    // Send the user's avatar URL
    message.reply(message.author.avatarURL);
  }


  if (message.content === 'avatar') {
    // Send the user's avatar URL
    message.reply(message.author.avatarURL);
  }



  if (message.content === 'created') {
    // Send the user's avatar URL
    message.reply('Your discord account was created in: ' + message.author.createdAt);
  }


	 if (message.content.startsWith("robloxavatar")){ // when message is !bot
        var argument = message.content.substr("robloxavatar ".length);
        message.channel.sendMessage('http://www.roblox.com/Thumbs/Avatar.ashx?x=150&y=150&Format=Png&username=' + argument); // send argument into message's channel
    }

	if (message.content.startsWith("veri")){ // when message is !bot
        message.reply('Is !verify'); // send argument into message's channel
    }

	if (message.content.startsWith("very")){ // when message is !bot
        message.reply('Is !verify'); // send argument into message's channel
    }

	if (message.content.startsWith("!getroles")){ // when message is !bot
        message.reply('Is !verify'); // send argument into message's channel
    }


	if (message.content.startsWith("when hotel was created")){ // when message is !bot
        message.reply("25 Of February Of 2018"); // send argument into message's channel
    }

  if (message.content === 'id') {
    // Send the user's avatar URL
    message.reply(message.author.id);
  }


	if(message.content.includes('nova')) {
	 message.delete()
	}

	if(message.content.includes('Nova')) {
	 message.delete()
	}

	if(message.content.includes('NOVA')) {
	 message.delete()
	}

	if(message.content.includes('N0VA')) {
	 message.delete()
	}

	if(message.content.includes('4110955')) {
	 message.delete()
	}

	if(message.content.includes('1747801249')) {
	 message.delete()
	}

	if(message.content.includes('1747896292')) {
	 message.delete()
	}

	if(message.content.includes('1758503708')) {
	 message.delete()
	}

	if(message.content.includes('1759870495')) {
	 message.delete()
	}

	if(message.content.includes('1764838660')) {
	 message.delete()
	}

	if(message.content.includes('1767906689')) {
	 message.delete()
	}

	if(message.content.includes('1979797737')) {
	 message.delete()
	}

	if(message.content.includes('3173379')) {
	 message.delete()
	}

	if(message.content.includes('716420144')) {
	 message.delete()
	}

	if(message.content.includes('1556749855')) {
	 message.delete()
	}

	if(message.content.includes('1654173732')) {
	 message.delete()
	}

	if(message.content.includes('836209028')) {
	 message.delete()
	}

	if(message.content.includes('1806283199')) {
	 message.delete()
	}

	if(message.content.includes('2044667149')) {
	 message.delete()
	}

	if(message.content.includes('1693235253')) {
	 message.delete()
	}

	if(message.content.includes('4263498')) {
	 message.delete()
	}

	if(message.content.includes('2051098818')) {
	 message.delete()
	}

	if(message.content.includes('2051682813')) {
	 message.delete()
	}

	if(message.content.includes('3342547')) {
	 message.delete()
	}

	if(message.content.includes('916231572')) {
	 message.delete()
	}

	if(message.content.includes('916235814')) {
	 message.delete()
	}

	if(message.content.includes('4220766')) {
	 message.delete()
	}

	if(message.content.includes('1976356241')) {
	 message.delete()
	}

	if(message.content.includes('1976713691')) {
	 message.delete()
	}

	if(message.content.includes('1976622020')) {
	 message.delete()
	}

	if(message.content.includes('1976672117')) {
	 message.delete()
	}

	if(message.content.includes('4012939')) {
	 message.delete()
	}

	if(message.content.includes('1575074572')) {
	 message.delete()
	}

	if(message.content.includes('1725223182')) {
	 message.delete()
	}

	if(message.content.includes('2047826767')) {
	 message.delete()
	}

	if(message.content.includes('2788849')) {
	 message.delete()
	}

	if(message.content.includes('414300524')) {
	 message.delete()
	}

	if(message.content.includes('441509307')) {
	 message.delete()
	}

	if(message.content.includes('444414479')) {
	 message.delete()
	}

	if(message.content.includes('436273059')) {
	 message.delete()
	}






  if(message.content.includes('discord.gg')) {
	   message.reply("Advertising is not allowed in this discord server.")
	   message.delete()
  }

	if(message.content.includes('discord.me')) {
		 message.reply("Advertising is not allowed in this discord server.")
		 message.delete()
	}

	if(message.content.includes('discord(.)me')) {
		 message.reply("Advertising is not allowed in this discord server.")
		 message.delete()
	}

  if(message.content.includes('discord(.)gg')) {
	   message.reply("Advertising is not allowed in this discord server.")
	   message.delete()
  }

  if(message.content == 'merch green') {
		message.channel.sendMessage('https://web.roblox.com/catalog/1691899464/HOTEL-HOTEL-HOTEL-Merch-Green');
	}

	if(message.content == 'merch red') {
		message.channel.sendMessage('https://web.roblox.com/catalog/1691901319/HOTEL-HOTEL-HOTEL-Merch-Red');
	}

	if(message.content == 'merch yellow') {
		message.channel.sendMessage('https://web.roblox.com/catalog/1691901756/HOTEL-HOTEL-HOTEL-Merch-Yellow');
	}

	if(message.content == 'merch pink') {
		message.channel.sendMessage('https://web.roblox.com/catalog/1691901756/HOTEL-HOTEL-HOTEL-Merch-Yellow');
	}

	if(message.content == 'merch blue') {
		message.channel.sendMessage('https://web.roblox.com/catalog/1673850576/HOTEL-HOTEL-HOTEL-Merch-Blue');
	}

	if(message.content == 'merch gray') {
		message.channel.sendMessage('https://web.roblox.com/catalog/1691899907/HOTEL-HOTEL-HOTEL-Merch-Gray');
	}

	if(message.content == 'merch rainbow') {
		message.channel.sendMessage('https://web.roblox.com/catalog/1757076570/HOTEL-HOTEL-HOTEL-Merch-Rainbow');
	}

	if(message.content == 'merch orange') {
		message.channel.sendMessage('https://web.roblox.com/catalog/1691900412/HOTEL-HOTEL-HOTEL-Merch-Orange');
	}

	if(message.content == 'hotel uniform') {
		message.channel.sendMessage('https://web.roblox.com/catalog/1518825764/THE-HOTEL-HOTEL-HOTEL-UNIFORM');
	}

	if(message.content == 'interview center') {
		message.channel.sendMessage('https://web.roblox.com/games/1458212529/HOTEL-HOTEL-HOTEL-INTERVIEW-CENTER');
	}

	if(message.content == 'hello') {
		message.channel.sendMessage('Hello!');
	}

	if(message.content == 'how are you') {
		message.channel.sendMessage('Good, Thanks!');
	}

	if(message.content == 'How are you') {
		message.channel.sendMessage('Good, Thanks!');
	}

	if(message.content == 'how are you?') {
		message.channel.sendMessage('Good, Thanks!');
	}

	if(message.content == 'How are you?') {
		message.channel.sendMessage('Good, Thanks!');
	}

	if(message.content == 'how are u?') {
		message.channel.sendMessage('Good, Thanks!');
	}

	if(message.content == 'how are u') {
		message.channel.sendMessage('Good, Thanks!');
	}

	if(message.content == 'Hello') {
		message.channel.sendMessage('Hello!');
	}

	if(message.content == 'Hola') {
		message.channel.sendMessage('Hola');
	}

	if(message.content == 'hola') {
		message.channel.sendMessage('Hola');
	}

	if(message.content == 'HOLA') {
		message.channel.sendMessage('Hola');
	}

	if(message.content == 'application center') {
		message.channel.sendMessage('https://web.roblox.com/games/1465530360/Application-Center');
	}

	if(message.content == 'meeting center') {
		message.channel.sendMessage('https://web.roblox.com/games/1831584512/Meeting-Center');
	}


	if(message.content == 'verify') {
		message.channel.sendMessage('Is !verify');
	}

	if(message.content == 'Verify') {
		message.channel.sendMessage('Is !verify');
	}

	if(message.content == '!verifly') {
		message.channel.sendMessage('Is !verify');
	}

	if(message.content == '!veryfi') {
		message.channel.sendMessage('Is !verify');
	}

	if(message.content == '!vefify') {
		message.channel.sendMessage('Is !verify');
	}

	if(message.content == 'veryfi') {
		message.channel.sendMessage('Is !verify');
	}

	if(message.content == 'invite') {
		message.channel.sendMessage('Use this link for invite your friend! https://discord.gg/uuFBS7V Server code: uuFBS7V');
	}

	if(message.content == 'Invite') {
		message.channel.sendMessage('Use this link for invite your friend! https://discord.gg/uuFBS7V Server code: uuFBS7V');
	}

	if (message.content.startsWith("serverinfo")){ // when message is !bot
				let sicon = message.guild.displayAvatarURL;
				let serverembed = new Discord.RichEmbed()
				.setDescription("Server Information")
				.setColor("#15f153")
				.setThumbnail(sicon)
				.addField("Server Name", message.guild.name)
				.addField("Created On", message.guild.createdAt)
				.addField("You Joined", message.member.joinedAt)
				.addField("Total Members", message.guild.memberCount)

				return message.channel.send(serverembed);
		}


});

bot.login(process.env.B0T_TOKEN);
