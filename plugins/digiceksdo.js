import fetch from 'node-fetch'
import axios from 'axios'
import md5 from 'md5'
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
conn.getName(m.sender)
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
const waktuSekarang = new Date().toLocaleTimeString('id-ID', { timeZone: 'Asia/Jakarta' });
  let refid = makeid(15)
  let signature = md5(
    viguguDbz6KD+
    7cf50abf-863d-51a2-a24d-1ae030fe9d98+
    id
  
  );
  console.log(signature);
  m.reply(`*「 PESANAN SEDANG DI PROSES 」*`)
  let data = {
    "username": "viguguDbz6KD",
    "amount": id,
    "Bank": "BCA",
    "owner_name": "John Doe",
    "sign": signature
  };

  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'https://api.digiflazz.com/v1/cek-saldo',
    headers: {},
    data: data,
  };

  let response = await axios(config);
  let json = response.data;
  let ptn2023 = ` \n┃
┃> *🎮ID GAME:* ${json[1]}
` 
  conn.reply(m.chat,JSON.stringify(response.data), m);
};

handler.help = ['dc']
handler.owned = true
handler.premium = true
handler.private = false
handler.group = true
handler.command = /^(dc)$/i

export default handler;
