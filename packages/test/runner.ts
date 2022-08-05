import path from 'node:path'
import fg from 'fast-glob'
import Mocha from 'mocha'
import 'source-map-support/register'

const mocha = new Mocha()

fg.sync([
    path.resolve(__dirname, './src/**/*.spec.ts'),
]).forEach(file => mocha.addFile(file))

mocha.run(failures => process.exit(failures === 0 ? 0 : 1))
