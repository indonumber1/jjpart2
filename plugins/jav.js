import fetch from 'node-fetch'
  import axios from 'axios'
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
  m.reply(`*「 PESANAN SEDANG DI PROSES 」*`)
  let res = await fetch(`https://v1.apigames.id/transaksi/http-get-v1?merchant=M220511FSMZ8818TO&secret=92b49f13e5d556ce5c2738a8d7163f4f699052c5859f8f3f833531a32acaca19&produk=${num}&tujuan=${id}&ref=JAVAN-${makeid(6)}`)
  
  let json = await res.json()
    if (res.status !== 200) throw await res.text()
    if (!json.status) throw json
  if ((!id || !num)) throw `TIDAK DIKETAHUI`;
  let ptn2023 = ` \n┃
┃> *🎮ID GAME:* ${json.data.destination}
┃> *💎ORDERAN:* ${json.data.product_code} DM
┃> *🎰SN:* ${json.data.sn}
┃> *📂STATUS:* ${json.data.status}
┃> *🕰️WAKTU:* ${date} ,${waktuSekarang}
┃> *Ref_id:* ${json.data.ref_id}
┃ *TERIMAKASIH TELAH ORDER DI JAVAN SHOP ID*
┗━━━━━━━━━━━━━━━━━━━ꕥ`
  conn.reply(m.chat, `┏━━━ꕥ *「 DETAIL ORDERAN 」* ꕥ━⬣ ${ptn2023}`,m)
}
handler.help = ['javan']
handler.owned = true
handler.premium = true
handler.private = false
handler.group = true
handler.command = /^(javan)$/i

export default handler