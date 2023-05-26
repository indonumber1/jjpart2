import fetch from 'node-fetch'
  import axios from 'axios'
let handler = async(m, { conn, usedPrefix, command, text, }) => {
  let owned = '6289649178812@s.whatsapp.net'
  let res = await fetch(`https://api.tokovoucher.id/produk/code?member_code=M230129SGPI6006LU&signature=440c61499871dc1c4c409699c05e0074&kode=tfr`)
  let json = await res.json()
  let ptn2023 = `
CODE ${json.data[13].code}
NAMA ${json.data[13].nama_produk}
STATUS ${json.data[13].status === 0 ? "Gangguan" : "Aktif"}
HARGA ${json.data[13].price} \n
CODE ${json.data[0].code}
NAMA ${json.data[0].nama_produk}
STATUS ${json.data[0].status === 0 ? "Gangguan" : "Aktif"}
HARGA ${json.data[0].price} \n
CODE ${json.data[4].code}
NAMA ${json.data[4].nama_produk}
STATUS ${json.data[4].status === 0 ? "Gangguan" : "Aktif"}
HARGA ${json.data[4].price} \n
CODE ${json.data[6].code}
NAMA ${json.data[6].nama_produk}
STATUS ${json.data[6].status === 0 ? "Gangguan" : "Aktif"}
HARGA ${json.data[6].price} \n
CODE ${json.data[8].code}
NAMA ${json.data[8].nama_produk}
STATUS ${json.data[8].status === 0 ? "Gangguan" : "Aktif"}
HARGA ${json.data[8].price} \n
CODE ${json.data[9].code}
NAMA ${json.data[9].nama_produk}
STATUS ${json.data[9].status === 0 ? "Gangguan" : "Aktif"}
HARGA ${json.data[9].price} \n
CODE ${json.data[10].code}
NAMA ${json.data[10].nama_produk}
STATUS ${json.data[10].status === 0 ? "Gangguan" : "Aktif"}
HARGA ${json.data[10].price} \n
CODE ${json.data[11].code}
NAMA ${json.data[11].nama_produk}
STATUS ${json.data[11].status === 0 ? "Gangguan" : "Aktif"}
HARGA ${json.data[11].price} \n
CODE ${json.data[12].code}
NAMA ${json.data[12].nama_produk}
STATUS ${json.data[12].status === 0 ? "Gangguan" : "Aktif"}
HARGA ${json.data[12].price} \n
CODE ${json.data[14].code}
NAMA ${json.data[14].nama_produk}
STATUS ${json.data[14].status === 0 ? "Gangguan" : "Aktif"}
HARGA ${json.data[14].price} \n
CODE ${json.data[15].code}
NAMA ${json.data[15].nama_produk}
STATUS ${json.data[15].status === 0 ? "Gangguan" : "Aktif"}
HARGA ${json.data[15].price} \n
CODE ${json.data[16].code}
NAMA ${json.data[16].nama_produk}
STATUS ${json.data[16].status === 0 ? "Gangguan" : "Aktif"}
HARGA ${json.data[16].price} \n
CODE ${json.data[17].code}
NAMA ${json.data[17].nama_produk}
STATUS ${json.data[17].status === 0 ? "Gangguan" : "Aktif"}
HARGA ${json.data[17].price} \n
CODE ${json.data[18].code}
NAMA ${json.data[18].nama_produk}
STATUS ${json.data[18].status === 0 ? "Gangguan" : "Aktif"}
HARGA ${json.data[18].price} \n
CODE ${json.data[19].code}
NAMA ${json.data[19].nama_produk}
STATUS ${json.data[19].status === 0 ? "Gangguan" : "Aktif"}
HARGA ${json.data[19].price} \n
CODE ${json.data[20].code}
NAMA ${json.data[20].nama_produk}
STATUS ${json.data[20].status === 0 ? "Gangguan" : "Aktif"}
HARGA ${json.data[20].price} \n
CODE ${json.data[21].code}
NAMA ${json.data[21].nama_produk}
STATUS ${json.data[21].status === 0 ? "Gangguan" : "Aktif"}
HARGA ${json.data[21].price} \n
CODE ${json.data[22].code}
NAMA ${json.data[22].nama_produk}
STATUS ${json.data[22].status === 0 ? "Gangguan" : "Aktif"}
HARGA ${json.data[22].price} \n
CODE ${json.data[23].code}
NAMA ${json.data[23].nama_produk}
STATUS ${json.data[23].status === 0 ? "Gangguan" : "Aktif"}
HARGA ${json.data[23].price} \n
CODE ${json.data[1].code}
NAMA ${json.data[1].nama_produk}
STATUS ${json.data[1].status === 0 ? "Gangguan" : "Aktif"}
HARGA ${json.data[1].price} \n
CODE ${json.data[2].code}
NAMA ${json.data[2].nama_produk}
STATUS ${json.data[2].status === 0 ? "Gangguan" : "Aktif"}
HARGA ${json.data[2].price} \n
CODE ${json.data[3].code}
NAMA ${json.data[3].nama_produk}
STATUS ${json.data[3].status === 0 ? "Gangguan" : "Aktif"}
HARGA ${json.data[3].price}

┗━━━━━━━━━━━━━━━━━━━ꕥ`
  conn.reply(m.chat, `┏━━━ꕥ *「 TRI REGULER 」* ꕥ━⬣ ${ptn2023}`,m)
}
handler.help = ['list']
handler.owned = true
handler.group = true
handler.premium = true
handler.command = /^(tftri)$/i

export default handler