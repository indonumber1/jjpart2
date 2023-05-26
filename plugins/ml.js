import fetch from 'node-fetch'
  import axios from 'axios'
import moment from 'moment-timezone'
const wib2 = moment.tz('Asia/Jakarta').format('HH:mm:ss')
let handler = async(m, { conn, usedPrefix, command, text, }) => {
  let owned = '6289649178812@s.whatsapp.net'
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
  let res = await fetch(`https://api.tokovoucher.id/produk/code?member_code=M230129SGPI6006LU&signature=440c61499871dc1c4c409699c05e0074&kode=mla`)
  let json = await res.json()
  let res2 = await fetch(`https://api.tokovoucher.id/produk/code?member_code=M230129SGPI6006LU&signature=440c61499871dc1c4c409699c05e0074&kode=mld`)
  let jsonn = await res2.json()

  let res3 = await fetch(`https://api.tokovoucher.id/produk/code?member_code=M230129SGPI6006LU&signature=440c61499871dc1c4c409699c05e0074&kode=gpmbl28`)
  let jsonnn = await res3.json()
  let rate = `${json.data[16].price}`/ 510
  let ptn2023 = `\n
rate sekarang = *${rate}*

CODE ${jsonnn.data[0].code}
NAMA ${jsonnn.data[0].nama_produk}
HARGA ${jsonnn.data[0].price}
STATUS ${jsonnn.data[0].status === 0 ? "Gangguan" : "Aktif"}\n
CODE ${json.data[19].code}
NAMA ${json.data[19].nama_produk}
HARGA ${json.data[19].price} \n
CODE ${json.data[3].code}
NAMA ${json.data[3].nama_produk}
HARGA ${json.data[3].price} \n
CODE ${json.data[5].code}
NAMA ${json.data[5].nama_produk}
HARGA ${json.data[5].price} \n
CODE ${json.data[8].code}
NAMA ${json.data[8].nama_produk}
HARGA ${json.data[8].price} \n
CODE ${json.data[10].code}
NAMA ${json.data[10].nama_produk}
HARGA ${json.data[10].price} \n
CODE ${json.data[12].code}
NAMA ${json.data[12].nama_produk}
HARGA ${json.data[12].price} \n
CODE ${json.data[14].code}
NAMA ${json.data[14].nama_produk}
HARGA ${json.data[14].price} \n
CODE ${json.data[16].code}
NAMA ${json.data[16].nama_produk}
HARGA ${json.data[16].price} \n
CODE ${json.data[18].code}
NAMA ${json.data[18].nama_produk}
HARGA ${json.data[18].price} \n
CODE ${json.data[22].code}
NAMA ${json.data[22].nama_produk}
HARGA ${json.data[22].price} \n
CODE ${json.data[20].code}
NAMA ${json.data[20].nama_produk}
HARGA ${json.data[20].price} \n
CODE ${json.data[0].code}
NAMA ${json.data[0].nama_produk}
HARGA ${json.data[0].price} \n
CODE ${json.data[1].code}
NAMA ${json.data[1].nama_produk}
HARGA ${json.data[1].price} \n
CODE ${json.data[2].code}
NAMA ${json.data[2].nama_produk}
HARGA ${json.data[2].price} \n
CODE ${json.data[6].code}
NAMA ${json.data[6].nama_produk}
HARGA ${json.data[6].price} \n
CODE ${json.data[4].code}
NAMA ${json.data[4].nama_produk}
HARGA ${json.data[4].price} \n
CODE ${json.data[7].code}
NAMA ${json.data[7].nama_produk}
HARGA ${json.data[7].price} \n
CODE ${json.data[9].code}
NAMA ${json.data[9].nama_produk}
HARGA ${json.data[9].price} \n
CODE ${json.data[11].code}
NAMA ${json.data[11].nama_produk}
HARGA ${json.data[11].price} \n
CODE ${json.data[13].code}
NAMA ${json.data[13].nama_produk}
HARGA ${json.data[13].price} \n
CODE ${json.data[15].code}
NAMA ${json.data[15].nama_produk}
HARGA ${json.data[15].price} \n
CODE ${json.data[17].code}
NAMA ${json.data[17].nama_produk}
HARGA ${json.data[17].price} \n
CODE ${json.data[21].code}
NAMA ${json.data[21].nama_produk}
HARGA ${json.data[21].price} \n
CODE ${json.data[24].code}
NAMA ${json.data[24].nama_produk}
HARGA ${json.data[24].price} \n
┗━━━━━━━━━━━━━━━━━━━ꕥ`
  conn.reply(m.chat, `┏━━━ꕥ *「 DETAIL HARGA 」* ꕥ━⬣ ${ptn2023}`,m)
}
handler.help = ['list']
handler.owned = true
handler.premium = true
handler.private = false
handler.group = true
handler.command = /^(mllist)$/i

export default handler