module.exports = {
  priority: 77,
  extension: function (sh) {
    sh.extension = 'ext2';
    sh.ext2 = true;
  }
};