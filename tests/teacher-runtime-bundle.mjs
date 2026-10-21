import assert from 'node:assert/strict'
import { readdir, readFile } from 'node:fs/promises'
import { _toPositiveInt, _parseDonationStickers, _getDonorTierIndex } from '../js/donation-utils.js'
assert.equal(_toPositiveInt('50', 49), 50)
assert.equal(_toPositiveInt('bad', 49), 49)
const tiers = _parseDonationStickers({}, 49, 50)
assert.equal(tiers.length, 5)
assert.equal(_getDonorTierIndex({}, tiers, 199), 4)
const assets = new URL('../dist/assets/', import.meta.url)
const files = (await readdir(assets)).filter(name => name.endsWith('.js'))
const runtimeChunks = []
for (const file of files) {
  const source = await readFile(new URL(file, assets), 'utf8')
  if (source.includes('window._openCourseForm=')) runtimeChunks.push(file)
}
assert.equal(runtimeChunks.length, 1, `Teacher global handlers must have one owner: ${runtimeChunks.join(', ')}`)
console.log('Donation helpers passed; exactly one teacher runtime in production:', runtimeChunks[0])
