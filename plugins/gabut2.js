
let handler = async (m, { conn, text, usedPrefix, command }) => { 
  m.reply('*BENING SUKA NGOCOK*')
}
handler.customPrefix = /^(bencok)$/i
handler.command = new RegExp
export default handler