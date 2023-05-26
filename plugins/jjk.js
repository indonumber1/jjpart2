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
    '92b49f13e5d556ce5c2738a8d7163f4f699052c5859f8f3f833531a32acaca19' +
      'M220511FSMZ8818TO' +
      refid +
      num +
      id
  );
  console.log(signature);
  m.reply(`*「 PESANAN SEDANG DI PROSES 」*`)
  let data = {
    ref_id: refid,
    merchant_id: 'M220511FSMZ8818TO',
    produk: num,
    tujuan: id,
    signature: signature,
  };

  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'https://v1.apigames.id/transaksi',
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

handler.help = ['kk']
handler.owned = true
handler.premium = true
handler.private = false
handler.group = true
handler.command = /^(kk)$/i

export default handler;
