require("dotenv").config();
let gg = process.env.MODS;
if (!gg) {
  gg = "2348078854373";   // You can Change this number //
}

// -------------------------------------------------------------- //


global.owner = gg.split(",");
global.mongodb = process.env.MONGODB || "mongodb+srv://RedzeoX:S4y.Sco7ch@itachi.6bpoybj.mongodb.net/?retryWrites=true&w=majority";
global.sessionId = process.env.SESSION_ID || "{"noiseKey":{"private":{"type":"Buffer","data":"cAa/yxBd/104BrUJMO3oebyNRrvepcI3j7NMQblIUXQ="},"public":{"type":"Buffer","data":"hS81D8CsrMlQBTPv8Y8eH7uL0dAdJpqVMj8D2DM29Ts="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"+K3cGI+2Lg95uZjBZujPr2quDKfo59T4Jm5cIpc+53k="},"public":{"type":"Buffer","data":"4Dm+zHPEu6Fsjawsbazt2eCuFshxqr/XX8aXZA8z/Fo="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"uIM9E+aPSWUHb1leK4ozhYXKzT8ja+uvpvuWNbbbwGs="},"public":{"type":"Buffer","data":"yJWKTDYgz03NJU+bOYrcROgbqaUxZQp36cizPmq2nwk="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"KDFdeL1hwWSRyo4ud97mLUNiSoifp1fm6ADXxD3R6kU="},"public":{"type":"Buffer","data":"0v8HfJ78VChZ1kOlBpuIjkHbu9ylBaUGv8vJIC8O/ns="}},"signature":{"type":"Buffer","data":"2e4aE9zcvyaV09kNAthwjL8IDHGiOpn3zg/YuRMNjGy8UcbT9OMfjlXu9AdGoTVdkIEjlbzcoYmsfDrlVz/RBQ=="},"keyId":1},"registrationId":121,"advSecretKey":"xjs9EILkaYzQlGQ+V+4N8zDJ5+rD0LkWfs8aALdCWDw=","processedHistoryMessages":[],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"deviceId":"dvjzcjfSQZi-_mBUAvshng","phoneId":"3ba1cef7-f67d-497c-8e8d-7e659c468e9d","identityId":{"type":"Buffer","data":"mVxqFPTz+NTra+zq18LZuaIlrIs="},"registered":true,"backupToken":{"type":"Buffer","data":"YPQ1qc4MBXuLO7QHqbcyiVXrs0M="},"registration":{},"pairingCode":"K433H5DR","me":{"id":"2348078854373:83@s.whatsapp.net"},"account":{"details":"COTOhYUEEOXz7LUGGAEgACgA","accountSignatureKey":"byv+8Aax7L6ggd5ptWFomtc+ZocXMbiY6p2fB4mBy1M=","accountSignature":"B66eKsbRFvfcHmNr0Dlz49oE1l+QiYSNcicFGVf2R2SQhAa/yTgrxF4+5voQQwtgNsxwnvFK72t41waejfqtDw==","deviceSignature":"pIYpIu2O2pc5XBvLwFvLhC05LUVc5r8wY+6IVNu5sMOJtezHDWNLM/hFcUkuK8A6QoJ1wXGfAPkIad7A2eIICg=="},"signalIdentities":[{"identifier":{"name":"2348078854373:83@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BW8r/vAGsey+oIHeabVhaJrXPmaHFzG4mOqdnweJgctT"}}],"platform":"android","lastAccountSyncTimestamp":1723546098,"myAppStateKeyId":"AAAAAP6Y"}";
global.prefa = process.env.PREFIX || "-";
global.tenorApiKey =
  process.env.TENOR_API_KEY || "AIzaSyCyouca1_KKy4W_MG1xsPzuku5oa8W358c";
global.packname = process.env.PACKNAME || `ʀɪᴀꜱ ɢʀᴇᴍᴏʀʏ`;
global.author = process.env.AUTHOR || "ꜱᴀʏ.ꜱᴄᴏᴛᴄʜ 💔";
global.port = process.env.PORT || "8000";

module.exports = {
  mongodb: global.mongodb,
};

// ---------------------Do Not Modify this part------------------- //

global.mess = {
  jobdone: "Job done...",
  useradmin: "Sorry, only *Group Admins* can use this command *Baka*!",
  botadmin:
    "Sorry, i cant execute this command without being an *Admin* of this group.",
  botowner: "Only my *Owner* can use this command, Baka!",
  grouponly: "This command is only made for *Groups*, Baka!",
  privateonly: "This command is only made for *Private Chat*, Baka!",
  botonly: "Only the *Bot itself* can use this command!",
  waiting: "Chotto Matte...",
  nolink: "Please provide me *link*, Baka!",
  error: "An error occurd!",
  banned: `You are *Banned* fron using commands!  \n\nType *${prefa}owner* or *${prefa}support* to submit a request to unban yourself !`,
  bangc: "This Group is *Banned* from using Commands!",
  nonsfw: "Dont be a pervert Baka! This is not a NSFW enabled group!",
};

