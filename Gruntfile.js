var loadNpmTasks = function(grunt, dependencies) {
  require('matchdep').filterAll(dependencies).forEach(grunt.loadNpmTasks);
};

module.exports = function(grunt) {

  grunt.initConfig({

    dependencies: [
      'vendor/jquery-latest.js',
      'vendor/handlebars-runtime-1.0.0rc4.js',
      'vendor/ember-latest.js',
      'vendor/ember-model.js',
      'vendor/*.js'
    ],
    connect: {
      server: {
        options: {
          port: 9001,
          base: 'public'
        },
        keepalive: true
      }
    },
    emberTemplates: {
      compile: {
        options: {
          templateName: function(sourceFile) {
            return sourceFile.replace("app/templates/", '');
          }
        },
        files: {
          "public/templates.js": "app/templates/**/*.hbs",
        }
      }
    },
    watch: {
      templates: {
        files: 'app/templates/**/*.hbs',
        tasks: ['emberTemplates']//['lock:templates', 'emberTemplates', 'unlock:templates']
      },
      vendorScripts: {
        files: "<%= dependencies %>",
        tasks: ['concat:vendor']//['lock:vendor', 'concat:vendor', 'unlock:vendor']
      },
      scripts: {
        files: 'app/**/*.js',
        tasks: ['neuter']//['lock:application', 'neuter', 'unlock:application']
      }
    },
    index: {
      development: {}
    },
    concat: {
      vendor: {
        src: "<%= dependencies %>",
        dest: "public/vendor.js"
      }
    },
    neuter: {
      options: {
        basePath: 'app/'
      },
      application: {
        src: 'app/application.js',
        dest: 'public/app.js'
      }
    }
  });

  //loading automatically dependencies
  loadNpmTasks(grunt, 'grunt-*');

  grunt.registerMultiTask('index', 'creates the index.html file', function(){
    var file = grunt.file.read("index.html.tmpl");
    var renderContext = {};
    grunt.file.write('public/index.html', grunt.template.process(file, {data: renderContext}));
  });


  grunt.registerTask('default', ['emberTemplates', 'neuter', 'concat', 'index:development', 'connect', 'watch']);
};
