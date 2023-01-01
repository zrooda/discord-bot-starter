import { Interaction } from 'discord.js';
import { logger } from '../utilities';

export const onInteraction = async (interaction: Interaction) => {
  if (!interaction.isCommand()) return;

  logger.info(interaction);
};
