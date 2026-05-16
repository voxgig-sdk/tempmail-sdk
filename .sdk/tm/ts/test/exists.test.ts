
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { TempmailSDK } from '..'


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await TempmailSDK.test()
    equal(null !== testsdk, true)
  })

})
