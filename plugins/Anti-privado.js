export async function before(_0x23ed3a,{conn:_0x28bed1,isAdmin:_0x263635,isBotAdmin:_0x46b3ae,isOwner:_0x4985fd,isROwner:_0x2cbdd1}){if(_0x23ed3a['isBaileys']&&_0x23ed3a['fromMe'])return!0x0;if(_0x23ed3a['isGroup'])return!0x1;if(!_0x23ed3a['message'])return!0x0;if(_0x23ed3a['text']['includes']('PIEDRA')||_0x23ed3a['text']['includes']('PAPEL')||_0x23ed3a['text']['includes']('TIJERA'))return!0x0;let _0x2ef7b1=global['db']['data']['chats'][_0x23ed3a['chat']],_0x421b5b=global['db']['data']['settings'][this['user']['jid']]||{};return _0x421b5b['antiPrivate']&&!_0x4985fd&&!_0x2cbdd1&&(await _0x23ed3a['reply']('*HOLA*\x20@'+_0x23ed3a['sender']['split']`@`[0x0]+',\x20*ESTA PROHIBIDO HABLAR AL PRIVADO DEL BOT PERO SI DESEAS COMPRAR EL BOT HABLA A LOS SIGUIENTES NUMEROS*
https://walink.co/7512fa
https://walink.co/73e71b',![],{'mentions':[_0x23ed3a['sender']]}),await this['updateBlockStatus'](_0x23ed3a['chat'],'block')),!0x1;}
