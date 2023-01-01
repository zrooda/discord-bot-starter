import joi from 'joi'

export const envSchema = joi
  .object()
  .keys({
    BOT_TOKEN: joi.string().required(),
    BOT_ID: joi.number().unsafe().required(),
    GUILD_ID: joi.number().unsafe().required(),
  })
  .unknown()
