/**
   * Create By Volter Store
*/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapis.xyz': '9d30efca66',
}

// Other
global.owner = ['12232080470']
global.ownernomer = "12232080470"
global.premium = ['12232080470','12232080470','6287723814311','6289610145000']
global.packname = 'Volter'
global.author = 'Botz'
global.sessionName = 'volter'
global.jumhal = '100000000000000'
global.prefa = ['','!','.','#','&']
global.sp = 'Volter Storee'
global.mess = {
    success: '*_Done Kack_*',
    admin: '*_Fitur Khusus Admin Group!_*',
    botAdmin: '*_Bot Harus Menjadi Admin Terlebih Dahulu MassZe !!_*',
    premime: '*_Fitur Khusus Premium Kalo Mau Daftar Ketik #sewabot_*',
    owner: '*_Fitur Khusus Owner Bot_*',
    group: '*_Fitur Digunakan Hanya Untuk Group!_*',
    private: '*_Fitur Digunakan Hanya Untuk Private Chat!_*',
    bot: '*_Fitur Khusus Pengguna Nomor Bot_*',
    wait: '*_Proses Ya Kack_*',
    endLimit: '*_Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12_*',
}
global.limitawal = {
    premium: "Unlimited",
    free: 1
}
global.thumb = fs.readFileSync('./image/volter.jpg')
global.vaze = { url: 'https://telegra.ph/file/15209657f9d4f59c7ca1e.mp4' }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
