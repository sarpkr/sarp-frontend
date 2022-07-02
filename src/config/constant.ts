export const IS_PRODUCTION = process.env.NODE_ENV === "production";

export const NETWORKS = {
    testnet: {
        name: "localhost",
        blockExplorer: "https://shasta.tronscan.org/",
    },
    mainnet: {
        name: "mainnet",
        blockExplorer: "https://tronscan.io/",
    },
};

