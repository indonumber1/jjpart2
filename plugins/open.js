
let handler = async (m, { conn, text, usedPrefix, command }) => { 
  m.reply('*OPEN SELALU GASS*')
}
handler.customPrefix = /^(on|open)$/i
handler.command = new RegExp
export default handler