import { describe, it } from 'mocha'
import { expect } from 'chai'
import { inc, dec } from './'

describe('inc', () => {
    it('adds 1', () => {
        expect(inc(1)).eq(2)
    })
})

describe('dec', () => {
    it('substracts 1', () => {
        expect(dec(1)).eq(0)
    })
})
