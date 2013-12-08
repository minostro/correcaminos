module.exports = {
  testVendor: {
    src: ["test/vendor/handlebars.js", "<%= dependencies %>", "!vendor/handlebars-runtime-1.0.0rc4.js"],
    dest: "test/vendor/vendor.js"
  },
  testApplication: {
    src: ["public/app.js", "public/templates.js"],
    dest: "test/build.js",
    options: {
      process: function(src, filepath) {
        return '// Source: ' + filepath + '\n' +
          '(function(){\n'+ 
           src +
          '})();\n'
      }
    }
  },
  vendor: {
    src: "<%= dependencies %>",
    dest: "public/vendor.js"
  }
};