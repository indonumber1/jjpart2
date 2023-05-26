
let handler = async (m, { conn, text, usedPrefix, command }) => { 
  m.reply('*HERI NGENTOD*')
}
handler.customPrefix = /^(hertod)$/i
handler.command = new RegExp
export default handler