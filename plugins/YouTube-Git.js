import _0x4b4388 from'node-fetch';const regex=/(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i;let handler=async(_0x46b43b,{args:_0x2a8fbc,usedPrefix:_0x40c3fa,command:_0x6cf14e})=>{if(!_0x2a8fbc[0x0])throw'*[❗𝐈𝐍𝐅𝐎❗]\x20𝙸𝙽𝙶𝚁𝙴𝚂𝙴\x20𝚄𝙽\x20𝙴𝙽𝙻𝙰𝙲𝙴\x20𝙳𝙴\x20𝙶𝙸𝚃𝙷𝚄𝙱,\x20𝙴𝙹𝙴𝙼𝙿𝙻𝙾:\x20'+(_0x40c3fa+_0x6cf14e)+'\x20https://www.instagram.com/ceogeripium.dzn*';if(!regex['test'](_0x2a8fbc[0x0]))throw'*[❗𝐈𝐍𝐅𝐎❗]\x20ENLACE\x20INCORRECTO!*\x0a\x0a\x0a*[❗𝐈𝐍𝐅𝐎❗]\x20INCORRECT\x20LINK!*';let [_0xe3efe7,_0x2ef803,_0x5ab2ac]=_0x2a8fbc[0x0]['match'](regex)||[];_0x5ab2ac=_0x5ab2ac['replace'](/.git$/,'');let _0x1acfee='https://api.github.com/repos/'+_0x2ef803+'/'+_0x5ab2ac+'/zipball',_0x2da89d=(await _0x4b4388(_0x1acfee,{'method':'HEAD'}))['headers']['get']('content-disposition')['match'](/attachment; filename=(.*)/)[0x1];_0x46b43b['reply']('*[❗𝐈𝐍𝐅𝐎❗]\x20𝙴𝚂𝙿𝙴𝚁𝙴\x20𝚄𝙽\x20𝙼𝙾𝙼𝙴𝙽𝚃𝙾\x20𝙴𝙽\x20𝙻𝙾\x20𝚀𝚄𝙴\x20𝙴𝙽𝚅𝙸𝙾\x20𝚂𝚄\x20𝙰𝚁𝙲𝙷𝙸𝚅𝙾,\x20𝚂𝙸\x20𝙴𝚂𝚃𝙴\x20𝙽𝙾\x20𝙴𝚂\x20𝙴𝙽𝚅𝙸𝙰𝙳𝙾\x20𝙿𝚄𝙴𝙳𝙴\x20𝙳𝙴𝙱𝙴𝚁𝚂𝙴\x20𝙰\x20𝚀𝚄𝙴\x20𝙴𝙻\x20𝚁𝙴𝙿𝙾𝚂𝙸𝚃𝙾𝚁𝙸𝙾\x20𝙴𝚂\x20𝙼𝚄𝚈\x20𝙿𝙴𝚂𝙰𝙳𝙾*\x0a\x0a\x0a*[❗𝐈𝐍𝐅𝐎❗]\x20WAIT\x20A\x20MOMENT\x20WHILE\x20YOUR\x20FILE\x20IS\x20SUBMITTED\x20POSSIBLY\x20SEND\x20THE\x20REPOSITORY\x20IS*'),conn['sendFile'](_0x46b43b['chat'],_0x1acfee,_0x2da89d,null,_0x46b43b);};handler['help']=['gitclone\x20<url>'],handler['tags']=['downloader'],handler['command']=/gitclone/i;export default handler;
