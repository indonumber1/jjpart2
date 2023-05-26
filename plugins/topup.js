
let handler = async (m, { conn, text, usedPrefix, command }) => { 
  m.reply('*Silahkan Menunggu Admin Merespon* \n Untuk list reseller bisa di akses di link *dibawah ini* \nhttps://bit.ly/ListDropDisiniKlik \n *TERIMAKASIH*')
}
handler.help = ["javan"];
handler.command = /^(javanshop)$/i
export default handler