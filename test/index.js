const test = require('tape');
const shExt = require('../index');
const shipHold = require('ship-hold');

test('load extension', function (t) {
  const sh = shipHold();
  shExt(sh, {folder: './test/sh-extensions'});
  t.equal(sh.extension, 'ext2');
  t.equal(sh.ext1, true);
  t.equal(sh.ext2, true);
  t.equal(sh.ext3, true);
  t.end();
});