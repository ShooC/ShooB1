let handler = async (m, { conn }) => {
let info = `
*${htki} 𝐕𝐢𝐫𝐮𝐬 ${htka}*
          
                  
–––––– *ᴋᴇʙɪᴊᴀᴋᴀɴ* ––––––
*📮Gunakan Dengan tujuan yang benar. Jangan untuk merugikan orang lain tanpa alasan!*
`
const sections = [
   {
    title: `𝐕𝐈𝐑𝐓𝐄𝐗`,
	rows: [
	    {title: "😈Virtex 1", rowId: '.virtex1', description: 'Sʜᴏ Bᴏᴛ' },
	    {title: "😈Virtex 2", rowId: '.virtex2', description: 'Sʜᴏ Bᴏᴛ' },
	{title: "😈Virtex 3", rowId: '.virtex3', description: 'Sʜᴏ Bᴏᴛ' },
	{title: "😈Virtex 4", rowId: '.virtex4', description: 'Sʜᴏ Bᴏᴛ' },
	{title: "😈Virtex 5", rowId: '.virtex5', description: 'Sʜᴏ Bᴏᴛ' },
	{title: "😈Virtex 6", rowId: '.virtex6', description: 'Sʜᴏ Bᴏᴛ' },
    {title: "😈Virtex 7", rowId: '.virtex7', description: 'Sʜᴏ Bᴏᴛ' },
	{title: "😈Virtex 8", rowId: '.virtex8', description: 'Sʜᴏ Bᴏᴛ' },
	{title: "😈Virtex 9", rowId: '.virtex9', description: 'Sʜᴏ Bᴏᴛ' },
	{title: "😈Virtex 10", rowId: '.virtex10', description: 'Sʜᴏ Bᴏᴛ' },
	{title: "😈Virtex 11", rowId: '.virtex11', description: 'Sʜᴏ Bᴏᴛ' },
	{title: "😈Virtex 12", rowId: '.virtex12', description: 'Sʜᴏ Bᴏᴛ' },
	{title: "😈Virtex 13", rowId: '.virtex13', description: 'Sʜᴏ Bᴏᴛ' },
	{title: "😈Virtex 14", rowId: '.virtex14', description: 'Sʜᴏ Bᴏᴛ' },
    {title: "😈Virtex 15", rowId: '.virtex15', description: 'Sʜᴏ Bᴏᴛ' },
	{title: "😈Virtex 16", rowId: '.virtex16', description: 'Sʜᴏ Bᴏᴛ' },
	{title: "😈Virtex 17", rowId: '.virtex17', description: 'Sʜᴏ Bᴏᴛ' },
	{title: "😈Virtex 18", rowId: '.virtex18', description: 'Sʜᴏ Bᴏᴛ' },
	{title: "😈Virtex 19", rowId: '.virtex19', description: 'Sʜᴏ Bᴏᴛ' },
    {title: "😈Virtex 20", rowId: '.virtex20', description: 'Sʜᴏ Bᴏᴛ' },

	]
    }, {
    title: `✃ INFO`,
	rows: [
	    {title: "🔥Download WhatsApp Imune", rowId: '.waantivirus', description: 'Download WhatsApp Kebal' },
	    {title: "🔥Virus Troli", rowId: '.virustroli', description: 'Sʜᴏ Bᴏᴛ' },
	    {title: "🔥Virus Power", rowId: '.powerlist', description: 'Sʜᴏ Bᴏᴛ' },
	    ]
        }, {
    title: `✃ BUY`,
	rows: [
	    {title: "💸Upgrade Premium", rowId: '.sewa', description: 'Dan unclock Fitur premium lainya!' },
	    ]
        },
]

const listMessage = {
  text: ' ',
  footer: info,
  title: null,
  buttonText: "𝐆𝐚𝐬𝐤𝐞𝐧",
  sections
}
await conn.sendMessage(m.chat, listMessage, { quoted: m})
//conn.sendHydrated(m.chat, info, wm, null, sgc, "🌎 Group Official", null,null, [['Owner','.owner']], m)
}
handler.help = ['virtex']
handler.tags = ['virus']
handler.command = /^virtex$/i
handler.premium = false

export default handler