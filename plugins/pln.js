import fetch from 'node-fetch'
  import axios from 'axios'
let handler = async(m, { conn, usedPrefix, command, text, }) => {
  let owned = '6289649178812@s.whatsapp.net'
  let res = await fetch(`https://api.tokovoucher.id/produk/code?member_code=M230129SGPI6006LU&signature=440c61499871dc1c4c409699c05e0074&kode=plp`)
  let json = await res.json()
  let ptn2023 = `
CODE ${json.data[4].code}
NAMA ${json.data[4].nama_produk}
STATUS ${json.data[4].status === 0 ? "Gangguan" : "Aktif"}
HARGA ${json.data[4].price + 70} \n
CODE ${json.data[7].code}
NAMA ${json.data[7].nama_produk}
STATUS ${json.data[7].status === 0 ? "Gangguan" : "Aktif"}
HARGA ${json.data[7].price + 70} \n
CODE ${json.data[1].code}
NAMA ${json.data[1].nama_produk}
STATUS ${json.data[1].status === 0 ? "Gangguan" : "Aktif"}
HARGA ${json.data[1].price + 70} \n
CODE ${json.data[5].code}
NAMA ${json.data[5].nama_produk}
STATUS ${json.data[5].status === 0 ? "Gangguan" : "Aktif"}
HARGA ${json.data[5].price + 70}
┗━━━━━━━━━━━━━━━━━━━ꕥ`
  conn.reply(m.chat, `┏━━━ꕥ *「 PLN TOKEN 」* ꕥ━⬣ ${ptn2023}`,m)
}
handler.help = ['list']
handler.owned = true
handler.group = true
handler.premium = true
handler.command = /^(pln)$/i

export default handler