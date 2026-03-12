export const log = (msg) => {
    const time = new Date().toLocaleTimeString();

    // Color codes
    const green = "\x1b[32m";
    const cyan = "\x1b[36m";
    const reset = "\x1b[0m";

    console.log(`${cyan}[${time}]${reset} ${green}LOG:${reset} ${msg}`);
};
