import { REST, Routes } from "discord.js";

const commands = [
  {
    name: "ping",
    description: "Replies with Pong!",
  },
];

const { TOKEN = "", CLIENT_ID = "" } = process.env;
const rest = new REST({ version: "10" }).setToken(TOKEN);

export const discord = async () => {
  try {
    console.log("Started refreshing application (/) commands.");
    await rest.put(Routes.applicationCommands(CLIENT_ID), { body: commands });
    console.log("Successfully reloaded application (/) commands.");
  } catch (error) {
    console.error(error);
  }
};
