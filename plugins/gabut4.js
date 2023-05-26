
let handler = async (m, { conn, text, usedPrefix, command }) => { 
  m.reply('*IQBAL NGACENGG*')
}
handler.customPrefix = /^(balceng)$/i
handler.command = new RegExp
export default handler