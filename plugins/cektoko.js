import fetch from 'node-fetch'
  import axios from 'axios'
let handler = async(m, { conn, usedPrefix, command, text, }) => {
  let res = await fetch(`https://api.tokovoucher.id/member?member_code=M230129SGPI6006LU&signature=440c61499871dc1c4c409699c05e0074`)
  let json = await res.json()
  let ptn2023 = `
┃> RP ${json.data.saldo},00
┃> ${json.data.nama}
┃ *DI ATAS ADALAH SALDO TOKOKU*
┗━━━━━━━━━━━━━━━━━━━ꕥ`
  conn.reply(m.chat, `┏━━━ꕥ *「 DETAIL SALDO 」* ꕥ━⬣ ${ptn2023}`,m)
}
handler.help = ['saldo']
handler.owned = true
handler.premium = true
handler.private = false
handler.group = true
handler.command = /^(saldo|sld)$/i

export default handler