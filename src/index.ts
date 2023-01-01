import dotenv from 'dotenv'
import { Client } from 'discord.js'
import { INTENTS } from './constants'
import { validateEnv } from './utilities'

;(async () => {
  dotenv.config()
  validateEnv()

  const bot = new Client({ intents: INTENTS })
  bot.on('ready', () => console.log('Connected to Discord!'))

  await bot.login(process.env.BOT_TOKEN)
})()
