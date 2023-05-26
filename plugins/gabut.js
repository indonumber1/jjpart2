
let handler = async (m, { conn, text, usedPrefix, command }) => { 
  m.reply('rijal ngaceng ')
}
handler.customPrefix = /^(jalceng)$/i
handler.command = new RegExp
export default handler