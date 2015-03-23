module.exports = function(grunt) {

    grunt.loadNpmTasks("grunt-foreman");

    // Default task(s).
    grunt.registerTask('server', ['foreman']);
    grunt.registerTask('default', ['server']);

};
