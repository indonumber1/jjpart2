
let handler = async (m, { conn, text, usedPrefix, command }) => { 
  m.reply('*UMAR NGACENG*')
}
handler.customPrefix = /^(uceng)$/i
handler.command = new RegExp
export default handler