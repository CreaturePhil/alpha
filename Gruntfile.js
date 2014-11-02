module.exports = function(grunt) {

  grunt.initConfig({

    jshint: {
      files: ['*.js', 'app/**/*.js', 'config/*.js', 'test/*.js']
    },


  });

  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.registerTask('test', ['jshint']);

  grunt.registerTask('default', ['jshint']);

};
