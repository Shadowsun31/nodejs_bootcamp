module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    //Vars
    files:{
      js: ['src/js/**/*.js'],
      html: ['*.html'],
      destination : 'dist/'
    },
    // Tasks
    copy: {
      dist: {
        files: [{
          expand: true,
          cwd: 'src/',
          src: ['*.html'],
          dest: '<%= files.destination %>'
        }],
      },
    },
    uglify: {
     dist: {
       files: {
         '<%= files.destination %>js/main.min.js': ['<%= files.js %>']
       }
     }
    },
   connect: {
     server: {
       options: {
         port: 8000,
         hostname: '*',
         base: '<%= files.destination %>'
       }
     }
   },
   watch: {
     options:{
       livereload: true
     },
      js: {
        files: '<%= files.js %>',
        tasks: ['uglify:dist']
      },
      html: {
        files: 'src/*.html',
        tasks: ['copy:dist']
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');

  // Default task(s).
  grunt.registerTask('default', ['copy:dist', 'uglify:dist', 'connect', 'watch']);
};
