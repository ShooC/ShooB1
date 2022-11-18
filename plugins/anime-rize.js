import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://revita.herokuapp.com/api/wallpaper/rize?apikey=ApiRevita'
	conn.sendButton(m.chat, 'Done', wm, await(await fetch(url)).buffer(), [['Next',`.${command}`]],m)
}
handler.command = /^(rize)$/i
handler.tags = ['anime']
handler.help = ['rize']
handler.premium = false
handler.limit = true

export default handler