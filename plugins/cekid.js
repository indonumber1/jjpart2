import fetch from 'node-fetch'
  import axios from 'axios'
import moment from 'moment-timezone'
const wib2 = moment.tz('Asia/Jakarta').format('HH:mm:ss')
let handler = async(m, { conn, usedPrefix, command, text, }) => {
  let owned = '6289649178812@s.whatsapp.net'
  if(!text) throw `APA?? 
TOP UP? GAS TERUSS`;
  let [id, num] = text.split('|');
  
  function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

console.log(makeid(10));

  conn.getName(m.sender)
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
  m.reply(`*「 DATA AKUN SEDANG DI PROSES 」*`)
  let res = await fetch(`https://v1.apigames.id/merchant/M220511FSMZ8818TO/cek-username/${num}?user_id=${id}&signature=e3f9831901dc76cbc65d24357aafd35e`)
  let json = await res.json()
    if (res.status !== 200) throw await res.text()
    if (!json.status) throw json

  let ptn2023 = ` \n┃
┃> *🎮ID GAME:* ${id}
┃> *💎NAMA:* ${json.data.username}
┃> *🕰️TANGGAL:* ${date}
┃
┃ *TERIMAKASIH TELAH ORDER DI JAVAN SHOP ID*
┗━━━━━━━━━━━━━━━━━━━ꕥ`
  conn.reply(m.chat, `┏━━━ꕥ *「 DETAIL AKUN 」* ꕥ━⬣ ${ptn2023}`,m)
}
handler.help = ['cekidgame']
handler.tags = ['tools']
handler.command = /^(cekid)$/i

export default handler