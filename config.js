const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER.split(",")
global.mongodb = process.env.MONGODB_URI || "mongodb://uenyt3ci0dl5v13xzn8a:c1h4M0IYuzf8jbSh2NiV@n1-c2-mongodb-clevercloud-customers.services.clever-cloud.com:27017,n2-c2-mongodb-clevercloud-customers.services.clever-cloud.com:27017/bkcrrbmfolbq9gd?replicaSet=rs0"
global.port= process.env.PORT || 5000
global.email = 'vihangaytbisnuss@gmail.com'
global.github = 'https://github.com/vihangayt0/Astro-MD-V5'
global.location = 'Sri Lanka'
global.gurl = 'https://instagram.com/' 
global.sudo = process.env.SUDO || '9400000000'
global.devs = '9476289851';
global.website = 'https://github.com/vihangayt0/Astro-MD-V5'
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://raw.githubusercontent.com/vihangayt0/server-/main/Astroboy.jpg'
module.exports = {
  ntilink: 'chat.whatsapp.com',
  botname: process.env.BOT_NAME || 'Astro-MD',
  footer: process.env.FOOTER || 'Astro-MD',
  ANTI_BAD: process.env.ANTI_BAD || 'false',
  rmbg: process.env.REMOVEBG_API || 'AH5BTMLtcC1PLipDQXessTFk',
  ANTI_SPAM: process.env.ANTI_SPAM || 'true',
  ibmg: process.env.INBOX_BL_MSG || '*inbox not allowed*',
  ibmgL: process.env.GROUP_ONLY || 'false',
  grlink: process.env.GroupLink || 'https://chat.whatsapp.com/Cp96xRSt5DhBqxzjBzL0oc',
  ownername:process.env.OWNER_NAME || 'Vihangaashinshana11',
  sessionName: process.env.SESSION_ID || 'eUhhRER2MHE=',
  author: process.env.PACK_INFO.split(";")[0] || 'author', 
  packname: process.env.PACK_INFO.split(";")[1] || 'Name',
  autoreaction: process.env.AUTO_REACTION || 'off',
  alwaysonline: process.env.ALWAYS_ONLINE || 'false',
  antifake : process.env.FAKE_COUNTRY_CODE || '1',
  readmessage: process.env.READ_MESSAGE || false,
  HANDLERS: process.env.PREFIX || ['.'],
  nsfw_detect_ai : process.env.NSFW_DETECTION_AI || 'false',
  pmpermit: process.env.PMPERMIT || "false",
  mongodb_url: process.env.MONGODB_URI || "mongodb://uenyt3ci0dl5v13xzn8a:c1h4M0IYuzf8jbSh2NiV@n1-c2-mongodb-clevercloud-customers.services.clever-cloud.com:27017,n2-c2-mongodb-clevercloud-customers.services.clever-cloud.com:27017/bkcrrbmfolbq9gd?replicaSet=rs0",
  warncount : process.env.WARN_COUNT || 3,
  disablepm: process.env.DISABLE_PM || "flase",
  levelupmessage: process.env.LEVEL_UP_MESSAGE || 'false',
  antilinkaction: process.env.ANTILINK_ACTION || 'remove',
  BRANCH: 'main',
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || 'mongodb://uenyt3ci0dl5v13xzn8a:c1h4M0IYuzf8jbSh2NiV@n1-c2-mongodb-clevercloud-customers.services.clever-cloud.com:27017,n2-c2-mongodb-clevercloud-customers.services.clever-cloud.com:27017/bkcrrbmfolbq9gd?replicaSet=rs0',
  VERSION: process.env.VERSION === undefined ? 'v5.0' : process.env.VERSION || '3.0',
  LANG: process.env.THEME|| 'SI',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE || 'public'
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
