import test from 'ava'
import { Nuxt, Builder } from 'nuxt'
import { resolve } from 'path'

// We keep the nuxt and server instance
// So we can close them at the end of the test
let nuxt = null

// Init Nuxt.js and create a server listening on localhost:4000
test.before('Init Nuxt.js', async t => {
  const rootDir = resolve(__dirname, '../../')
  let config = {}
  try { config = require(resolve(rootDir, 'nuxt.config.js')) } catch (e) {}
  config.rootDir = rootDir // project folder
  config.dev = false // production build
  nuxt = new Nuxt(config)
  await new Builder(nuxt).build()
  await nuxt.listen(4000, 'localhost')
})

// Example of testing only generated html
test('Route / exits and render HTML', async t => {
  const { html } = await nuxt.renderRoute('/', {})

  t.true(html.includes('Hello Hello'))
})

// Close server and ask nuxt to stop listening to file changes
test.after('Closing server and nuxt.js', t => {
  nuxt.close()
})
