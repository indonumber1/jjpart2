import fetch from "node-fetch";
import axios from "axios";
let handler = async (m, { conn, usedPrefix, command, text }) => {
  let owned = "6289649178812@s.whatsapp.net";
  if (!text)
    throw `APA?? 
TOP UP? GAS TERUSS`;
  let [id, num] = text.split("|");
  function makeid(length) {
    var result = "";
    var characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
  conn.getName(m.sender);
  let d = new Date(new Date() + 3600000);
  let locale = "id";
  let week = d.toLocaleDateString(locale, { weekday: "long" });
  let date = d.toLocaleDateString(locale, {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const waktuSekarang = new Date().toLocaleTimeString("id-ID", {
    timeZone: "Asia/Jakarta",
  });
  m.reply(`*「 PESANAN SEDANG DI PROSES 」*`);
  let res = await fetch(
    `https://v1.apigames.id/transaksi/http-get-v1?merchant=M230426EAMZ6622FT&secret=3ed3dcd6120e4dc8455eb39e6f9b212465056bae0824a0b20978b9a21f36941e&produk=ml257&tujuan=${id}&ref=JAVAN-${makeid(6)}`);

  let ress = await fetch(`https://api.tokovoucher.id/v1/transaksi?ref_id=JAVAN${refid}&produk=gpmbl28&tujuan=${id}&secret=d975e3fcf109c81af68620f21f8d193e1e4dbf2b6a5858b1f6a8bd202eb8a87c&member_code=M230129SGPI6006LU`)

  let json = await res.json();
    let jsonn = await ress.json();
  if (res.status !== 200) throw await res.text();
  if (!json.status) throw json;
  if (!id || !num) throw `TIDAK DIKETAHUI`;
  let ptn2023 = ` \n┃
┃> *🎮ID GAME:* ${json.data.destination}
┃> *💎ORDERAN:* 285dm ml untuk event
┃> *🎰SN:* ${json.data.sn}
┃> *📂STATUS:* ${json.data.status}
┃> *📂STATUS:* ${jsonn.status}
┃> *🕰️WAKTU:* ${date} ,${waktuSekarang}
┃> *Ref_id:* ${json.data.ref_id}
┃ *TERIMAKASIH TELAH ORDER DI JAVAN SHOP ID*
┗━━━━━━━━━━━━━━━━━━━ꕥ`;
  conn.reply(m.chat, `┏━━━ꕥ *「 DETAIL ORDERAN 」* ꕥ━⬣ ${ptn2023}`, m);
};
handler.help = ["javan"];
handler.rowner = true;
handler.premium = true;
handler.private = false;
handler.command = /^(ml285)$/i;

export default handler;
