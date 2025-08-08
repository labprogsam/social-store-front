export default {
    testEnvironment: "jsdom",
    transform: {
        '^.+\\.(js|jsx|mjs|cjs|ts|tsx)$': 'babel-jest',
    },
    transformIgnorePatterns: [
        '/node_modules/(?!(swiper|ssr-window|)/)',
    ],
    moduleNameMapper: {
        '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
        "\\.(jpg|jpeg|png|gif|webp|svg|woff|woff2|eot|ttf|otf)$": "<rootDir>/__mocks__/fileMock.js",
        "^swiper/css$": "identity-obj-proxy",
        "^swiper/(.*)$": "identity-obj-proxy"
    },

    setupFilesAfterEnv: ['<rootDir>/setupTests.mjs'], // Or whatever your path is
    setupFiles: ['<rootDir>/jest.setup.js'],
};