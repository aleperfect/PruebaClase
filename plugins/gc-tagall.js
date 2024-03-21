let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `*Aviso:* ${pesan}`
let teks = `*⺀Bienvenido jkkfjkk ⺀*\n\n❄️ ${oi}\n\n❄️ *Etiquetas:*\n`
for (let mem of participants) {
teks += `❄️ @${mem.id.split('@')[0]}\n`}
teks += `➤ 𝐏𝐫𝐮𝐞𝐛𝐚𝐁𝐨𝐭`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['tagall <mesaje>','botactivate <mesaje>']
handler.tags = ['group']
handler.command = /^(tagall|invocar|invocacion|todos|invocación|aviso|despierten|botactivate)$/i
handler.admin = true
handler.group = true
export default handler