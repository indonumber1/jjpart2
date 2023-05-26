
let handler = async (m, { conn, text, usedPrefix, command }) => { 
  m.reply('*RONNY NGACENGG*')
}
handler.customPrefix = /^(roceng)$/i
handler.command = new RegExp
export default handler