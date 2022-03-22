const Benchmark = require('benchmark')
const suite = new Benchmark.Suite;

suite.add('[True conditional] Using instanceof only', function () {
  const err = new Error()
  if (err instanceof Error) {
    1 + 1
  }
})
.add('[True conditional] Using constructor name', function () {
  const err = new Error()
  if (err.constructor.name === 'Error') {
    1 + 1
  }
})
.add('[True conditional] Check if property is valid then instanceof ', function () {
  const err = new Error()
  if (err && err instanceof Error) {
    1 + 1
  }
})
.add('[False conditional] Using instanceof only', function () {
  const err = undefined
  if (err instanceof Error) {
    1 + 1
  }
})
.add('[False conditional] Using constructor name', function () {
  const err = undefined
  if (err?.constructor?.name === 'Error') {
    1 + 1
  }
})
.add('[False conditional] Check if property is valid then instanceof ', function () {
  const err = undefined
  if (err && err instanceof Error) {
    1 + 1
  }
})
.on('cycle', function(event) {
  console.log(String(event.target));
})
.run({ 'async': false });
