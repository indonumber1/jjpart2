
let handler = async (m, { conn, text, usedPrefix, command }) => { 
  m.reply('Astaghfirullah')
}
handler.customPrefix = /^(kontol|asu|babi|ndogok|bajingan|ngentod|kentu|ngocok|memek|titit|anjing|lonte|sange|sangean|asui|ndogoki|bajingani|mekmek|meki)$/i
handler.command = new RegExp
export default handler