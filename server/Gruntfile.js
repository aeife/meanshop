module.exports = function(grunt) {

  var path = require('path');

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-jasmine-node');
  grunt.loadNpmTasks('grunt-jasmine-node-coverage');
  grunt.loadNpmTasks('grunt-express-server');

  // Project configuration.
  grunt.initConfig({
    watch: {
      lint: {
        files: [
          './test/**/*.js',
          './src/**/*.js'
        ],
        tasks: 'jshint',
      },
      test: {
        files: [
          './test/**/*.js',
          './src/**/*.js'
        ],
        tasks: ['jasmine_node']
      },
      express: {
        files:  [ './src/**/*.js' ],
        tasks:  [ 'express:server' ],
        options: {
          nospawn: true //Without this option specified express won't be reloaded
        }
      }
    },
    jasmine_node: {
      coverage: {

      },
      src: './src',
      specs: './test',
      specNameMatcher: "*.spec", // load only specs containing specNameMatcher
      projectRoot: ".",
      requirejs: false,
      forceExit: false,
      jUnit: {
        report: false,
        savePath : "./test/reports/jasmine/",
        useDotNotation: true,
        consolidate: true
      }
    },

    jshint: {
      files: ['gruntFile.js', './src/**/*.js', 'lib/*.js', 'test/**/*.js'],
      options: {
        ignores: ['./src/dbMock/*'],
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true,
        globals: {
          require: false,
          __dirname: false,
          console: false,
          module: false,
          exports: false,
          describe: false,
          it: false,
          expect: false
        }
      }
    },
    express: {
      server: {
        options: {
          port: require('./src/config').server.listenPort,
          script: path.resolve('./src/server.js')
        }
      }
    }
  });

  // Default task.
  grunt.registerTask('default', ['jshint', 'jasmine_node']);

  grunt.registerTask('dev', ['jshint', 'jasmine_node', 'express:server', 'watch']);

  grunt.registerTask('timestamp', function() {
    grunt.log.subhead(Date());
  });

  grunt.registerTask('supervise', function() {
    this.async();
    require('supervisor').run(['src/server.js']);
  });
};
