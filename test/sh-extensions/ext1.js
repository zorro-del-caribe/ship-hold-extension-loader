module.exports = {
  priority: 66,
  extension: function (sh) {
    sh.extension = 'ext1';
    sh.ext1 = true;
  }
};