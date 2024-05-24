const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Vehari,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923317776561" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "true" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923026811653";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923026811653";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923026811653,923026811653";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  ""  // SUHAIL_13_33_05_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDg1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgODcsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjAyLFxuICAgICAgICA1NixcbiAgICAgICAgMjEsXG4gICAgICAgIDgxLFxuICAgICAgICAxODUsXG4gICAgICAgIDE4LFxuICAgICAgICA3NSxcbiAgICAgICAgMjE4LFxuICAgICAgICA1NyxcbiAgICAgICAgNDAsXG4gICAgICAgIDk2LFxuICAgICAgICAxMDksXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMzksXG4gICAgICAgIDY4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDQyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzksXG4gICAgICAgIDEyNixcbiAgICAgICAgNyxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDkyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxODksXG4gICAgICAgIDI5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDY4LFxuICAgICAgICAzOSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjMwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDExNCxcbiAgICAgICAgMzUsXG4gICAgICAgIDMwLFxuICAgICAgICA2OCxcbiAgICAgICAgMjRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNixcbiAgICAgICAgOTAsXG4gICAgICAgIDExOCxcbiAgICAgICAgOTYsXG4gICAgICAgIDg4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDEwNixcbiAgICAgICAgOTksXG4gICAgICAgIDQyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTk0LFxuICAgICAgICA0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDYxLFxuICAgICAgICA1NSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjE3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDUzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjE0LFxuICAgICAgICA2MyxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTY2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDEyM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNyxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE5LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMixcbiAgICAgICAgNDQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTExLFxuICAgICAgICAxMSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNTksXG4gICAgICAgIDEzOSxcbiAgICAgICAgNCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNyxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjMyLFxuICAgICAgICAzLFxuICAgICAgICAxMDEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDkyLFxuICAgICAgICAyMDEsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMDgsXG4gICAgICAgIDkwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NixcbiAgICAgICAgODksXG4gICAgICAgIDQ2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDc1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDU5LFxuICAgICAgICAxNjgsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNjMsXG4gICAgICAgIDQ5LFxuICAgICAgICAzNyxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDExMixcbiAgICAgICAgMjM2LFxuICAgICAgICAxMDEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDEzMCxcbiAgICAgICAgOTgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNDYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNjIsXG4gICAgICAgIDM1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDk5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTc5LFxuICAgICAgICAxODEsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjAsXG4gICAgICAgIDQ5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDM1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDcyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTIyLFxuICAgICAgICA1OSxcbiAgICAgICAgMTQzLFxuICAgICAgICA2OSxcbiAgICAgICAgMTksXG4gICAgICAgIDI0NSxcbiAgICAgICAgMzYsXG4gICAgICAgIDEwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjI1LFxuICAgICAgICA3NSxcbiAgICAgICAgNjIsXG4gICAgICAgIDkwLFxuICAgICAgICA4LFxuICAgICAgICA0NyxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMjdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxMTJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDQzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkxLFxuICAgICAgICAyMjEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTYsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTkxLFxuICAgICAgICA5NyxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjEzLFxuICAgICAgICAxMDQsXG4gICAgICAgIDQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMDksXG4gICAgICAgIDEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTAwLFxuICAgICAgICA2NixcbiAgICAgICAgNzAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTkxLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNTEsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMDksXG4gICAgICAgIDE1MyxcbiAgICAgICAgNTcsXG4gICAgICAgIDEsXG4gICAgICAgIDMzLFxuICAgICAgICA4MCxcbiAgICAgICAgNCxcbiAgICAgICAgMTE5LFxuICAgICAgICA5NixcbiAgICAgICAgMjgsXG4gICAgICAgIDEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMzksXG4gICAgICAgIDgwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMixcbiAgICAgICAgNTksXG4gICAgICAgIDU0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDM4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDg0LFxuICAgICAgICAxOSxcbiAgICAgICAgMTQyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMzgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwibk9EeHNBRWJzSngvSThvWWJ6aVFiSnZlZ1IrV09OQjAwNm0vN1EwZzB0cz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMwMjY4MTE2NTNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjBGMDk2ODlGOTFFOTAyMjk2NjM3RTM4NUZCNUMwRkIzXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxNjU1NzYxNFxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzAyNjgxMTY1M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMDNBMEFGRUE0MDkxN0REN0YwRTdBNkRGNDkwMzdEREVcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE2NTU3NjE1XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjZPV1hucnpUUmlDM0xyZFdJbXpma3dcIixcbiAgXCJwaG9uZUlkXCI6IFwiZjg0NWI4ODItZjFlZS00ODZjLWFmMDItZWEyMjdmYmRmMDg3XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2MSxcbiAgICAgIDEwNyxcbiAgICAgIDgwLFxuICAgICAgMjM2LFxuICAgICAgMSxcbiAgICAgIDIwNCxcbiAgICAgIDgyLFxuICAgICAgMTEzLFxuICAgICAgNTksXG4gICAgICAxMjIsXG4gICAgICAxOTksXG4gICAgICA4MyxcbiAgICAgIDMzLFxuICAgICAgMTU5LFxuICAgICAgNzUsXG4gICAgICA4NCxcbiAgICAgIDI1MixcbiAgICAgIDIzLFxuICAgICAgMjA1LFxuICAgICAgNDVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTE3LFxuICAgICAgMTc1LFxuICAgICAgMjM5LFxuICAgICAgMTU4LFxuICAgICAgNjUsXG4gICAgICAyMzEsXG4gICAgICA2OSxcbiAgICAgIDE1NixcbiAgICAgIDg0LFxuICAgICAgMjIwLFxuICAgICAgMTc3LFxuICAgICAgODIsXG4gICAgICA0NCxcbiAgICAgIDE5NixcbiAgICAgIDYyLFxuICAgICAgMjgsXG4gICAgICAyMzgsXG4gICAgICAyMTksXG4gICAgICAyMCxcbiAgICAgIDIyMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI4OFZIRDNTSFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMDI2ODExNjUzOjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI3NTIzNDgyNTQ0OTYwMzozQGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIk1lbnRlbCBSb2NreVwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0pYN3VOSURFS2V1d3JJR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwibjZ5TmNSNXhJV2RlNG4wd3ptN2FNaVcyOGlsM0FvQ0tRczQ5elg0ZkF3cz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJHVklMWnVidWQ2TERVOUxWL3pDYkYvREQ4V0E0UWpHVlg1NHg5Q3lZQ2hHWVpVRjJOMW1sK2dCVHRHMGJ3T1pEdGpsLzBwaUNoSjVOYmNmeXF4dXVDdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJYQVhDU2dtNFlkalVZVVllazZxRkE3dE0yUFNIMFhsbzY3WmdZOWoxNUhpaTllMFZLUjNuTDdCNGh1VkZCN1RBaWt6c0F6SjNPYjNMK3dtemYwT2RnQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMwMjY4MTE2NTM6M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMixcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxNjU1NzYxMSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUVtL1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRW0vLmpzb24iOiB7fQp9 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Sial",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
