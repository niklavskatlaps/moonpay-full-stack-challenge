export const getEnv = (key: string): string => {
    const value = process.env[key];

    if (value === undefined) {
        throw new Error(`Error! Environment variable ${key} not found in the .env config!`);
    }

    return value;
};
