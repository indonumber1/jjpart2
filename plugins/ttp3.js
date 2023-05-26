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
  let refid = makeid(8);
  m.reply(`*「 PESANAN SEDANG DI PROSES 」*`);
  let ress1 = await fetch(
    `https://api.tokovoucher.id/v1/transaksi?ref_id=JAVAN-${refid}-1&produk=${num}&tujuan=${id}&secret=d975e3fcf109c81af68620f21f8d193e1e4dbf2b6a5858b1f6a8bd202eb8a87c&member_code=M230129SGPI6006LU`
  );
  let ress2 = await fetch(
    `https://api.tokovoucher.id/v1/transaksi?ref_id=JAVAN-${refid}-2&produk=${num}&tujuan=${id}&secret=d975e3fcf109c81af68620f21f8d193e1e4dbf2b6a5858b1f6a8bd202eb8a87c&member_code=M230129SGPI6006LU`
  );
  let ress3 = await fetch(
    `https://api.tokovoucher.id/v1/transaksi?ref_id=JAVAN-${refid}-3&produk=${num}&tujuan=${id}&secret=d975e3fcf109c81af68620f21f8d193e1e4dbf2b6a5858b1f6a8bd202eb8a87c&member_code=M230129SGPI6006LU`
  );
  setTimeout(async function () {
    let res = await fetch(
      `https://api.tokovoucher.id/v1/transaksi?ref_id=JAVAN-${refid}-3&produk=sp5&tujuan=1646&secret=d975e3fcf109c81af68620f21f8d193e1e4dbf2b6a5858b1f6a8bd202eb8a87c&member_code=M230129SGPI6006LU`
    );
    let json = await res.json();
    if (res.status !== 200) throw await res.text();
    if (!json.status) throw json;
    if (!id || !num) throw `TIDAK DIKETAHUI`;
    let ptn2023 = ` \n┃
┃> *🎮ID GAME:* ${id}
┃> *💎ORDERAN:* ${num}DM x3(257dm)
┃> *🎰SN:* ${json.sn}
┃> *📂STATUS:* ${json.status}
┃> *🕰️WAKTU:* ${date} ,${waktuSekarang}
┃ *Ref_Id2:* ${json.ref_id}
┃ *TERIMAKASIH TELAH ORDER DI JAVAN SHOP ID*
┗━━━━━━━━━━━━━━━━━━━ꕥ`;

    conn.reply(m.chat, `┏━━━ꕥ *「 DETAIL ORDERAN 」* ꕥ━⬣ ${ptn2023}`, m);
  }, 40000);
};
handler.help = ["jv"];
handler.owned = true;
handler.premium = true;
handler.private = false;
handler.command = /^(jv257)$/i;

export default handler;
