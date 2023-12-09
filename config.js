const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER.split(",")
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://sam:sam@cluster0.u1smxsv.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'sam@secktor.live'
global.github = 'https://github.com/vajirabot1/KING-VAJIRA-MD'
global.location = 'Sultanpur IN'
global.gurl = 'https://instagram.com/' // add your username
global.sudo = process.env.SUDO || '2347039570336,923466319114'
global.devs = '2347039570336';
global.website = 'https://github.com/vajirabot1/KING-VAJIRA-MD' //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/09ab24679fb3a297a8905.jpg'
module.exports = {
  botname:   process.env.BOT_NAME === undefined ? 'VAJIRA 𝐁𝐨𝐭' : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'VAJIRA;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUpadzZEKzZoVGxLaWpTYUl0aERNK01GbDgvVkRISGhLcFVZL0JPVlNFUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib1NtZWx4Wk5QTFRuMmtCYlpMVWdONkRuaEdSM2h5MmVIQXN3eUJZckYzST0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpQzRuYVJXODhRbzZrYklVYnBNRTkvVklkVU9CVUdESUh5aktKb1M1UDBFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZcVRnajRWYTZFTSt5TEU2ZkVZYTlKUWFVWlZlb3g1YklXZ1RveTNCMmxRPSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktFNUI3cEtSOVV1SWxzTERoNVJ3MUFDMTMwbTMrdFB2ek84blc2VnVIRmc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFYUStIVWhwSWo1SXhIam85bHJQRklNS1VKR0wvMkZueGJEUVJKQks2WDg9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ2c3NSTG0zOXplUkExNGFWUEZrSENSbnRqS2pKUEwxYmtSOGFLRDh0NUp5VlFyWjlLWS9pSjVSNVFrbUdZRUNwSTAvZlU4c0xoMzZPbkRiVHNjSGREUT09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjE2NCwiYWR2U2VjcmV0S2V5IjoiQkVmR1FiL05pQ3p6c0xrOU5qb3JUR2hGZC9ZTCsvNk1qaklJSDBkWkkzYz0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiMS12T1B4LWNUa080bVp4a1UtSnRLUSIsInBob25lSWQiOiI4NDQwMmE4NS03MzA2LTQ3ZGItYWIyZS1jYWNjOTZkZGFkZTYiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNGFHSnBJZ1RyRTN0NVpBL1M1cWduSGpPdXd3PSJ9LCJyZWdpc3RlcmVkIjpmYWxzZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5UjlWTUl1WXdzRVd5QVN1SmtSa25Od2x0MFk9In0sInJlZ2lzdHJhdGlvbiI6e30sImFjY291bnQiOnsiZGV0YWlscyI6IkNPZjc0WWtDRU9mdDBLc0dHQXc9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImtHZVlhR1NmalVOclJNU1ZMNEZuNEhPTTd0R1QwRFpBZXVheTBpOWV6WEk9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImZ4NFpXUGZkMU9tbVFFdGlaT0xxRWRFRDJtUy9qR2NUZ0RYZmQwMXE1TGRoZ1FZV1g5cWxoeVpFNzh6TnM5RTZOenJqNk5QM1RMRG42M0pSNWJUS0N3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJzQzlub3hPaElJU2pyQitkQlF2VS85WTJXS2RwUTV1Zi9jMmxiWTJya3BvWWdvVmxKeUlHdXBBU2FJTm1vYWxMK2hTeVlrNHF5QzhLaitDdVlacFFBQT09In0sIm1lIjp7ImlkIjoiOTQ3NjMwMjY3NzU6MjFAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiyaLhtI/htIUgfHwg8J2XoPCdl5TwnZeX8J2XlPCdl6XwnZeU4L+QIn0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzYzMDI2Nzc1OjIxQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlpCbm1HaGtuNDFEYTBURWxTK0JaK0J6ak83Ums5QTJRSHJtc3RJdlhzMXkifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MDIxMTUwNTF9' : process.env.OWNER_NAME,
  sessionName:  process.env.SESSION_ID === undefined ? false : process.env.SESSION_ID,
  author:  process.env.PACK_INFO.split(";")[0] === undefined ? 'vajira' : process.env.PACK_INFO.split(";")[0],
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? false : process.env.AUTO_READ_STATUS,
  packname:  process.env.PACK_INFO.split(";")[1] === undefined ? 'VAJIRA-Md' : process.env.PACK_INFO.split(";")[1],
  autoreaction:  process.env.AUTO_REACTION  === undefined ? false : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '971' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? ['.'] : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? true : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? true : process.env.AUTO_BIO,
  afk:  process.env.AFK ||true,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'VAJIRA',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'private' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
