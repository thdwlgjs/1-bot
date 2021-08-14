const Discord = require('discord.js');
const got = require('got');

client.on('ready', () => {
  console.log(`${client.user.tag}로그인하였습니다!`);
});

client.on('message', msg => {
  if (msg.content === '야봇') {
    msg.reply('왜 불만 있냐 여물어');
  }
});

client.on('message', msg => {
  if (msg.content === '봇아 뭐함?') {
    msg.reply('롤한다 아놔 너땜에 승급전 졌잖아');
  }
});

client.on('message', msg => {
  if (msg.content === '=메세지 삭제') {
    msg.reply('난 그딴거 안한다');
  }
});

client.on('message', msg => {
  if (msg.content === '어쩌라고') {
    msg.reply('ㅇㅉㄹㄱ');
  }
});

client.on('message', msg => {
  if (msg.content === '=팬텀') {
    msg.reply('팬텀 여물어');
  }
});

client.on('message', msg => {
  if (msg.content === '=봇이다 온') {
    msg.reply('응 온 안할꺼야 여물어');
  }
});

client.on('message', msg => {
  if (msg.content === '=봇이다 오프') {
    msg.reply('아 드뎌 퇴근 하네');
  }
});

client.run('ODc2MDM3MTAwNjM2NjE0NzE4.YRePIA.pQ2C0Dtv8bUnZ0DhkTZJcgDHfFE');
