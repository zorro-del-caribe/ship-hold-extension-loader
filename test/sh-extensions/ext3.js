module.exports = {
  priority: 33,
  extension: function (sh) {
    sh.extension = 'ext3';
    sh.ext3 = true;
  }
};