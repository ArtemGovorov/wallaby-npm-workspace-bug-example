module.exports = (wallaby) => ({
    files: [
        './package.json',
        './src/**/*.ts',
        '!./src/**/*.spec.ts',
    ],
    tests: ['./src/**/*.spec.ts'],
    env: {
        type: 'node',
    },
    workers: { restart: true },
    compilers: {
        '**/*.ts': wallaby.compilers.typeScript({
            module: 'commonjs',
        })
    },
})
