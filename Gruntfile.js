// our wrapper function (required by grunt and its plugins)
// all configuration goes inside this function
module.exports = function(grunt) {
   // CONFIGURE GRUNT
   grunt.initConfig({
      // get the configuration info from package.json file
      // this way we can use things like name and version (pkg.name)
      pkg: grunt.file.readJSON('package.json'),

   });

   // log something
   grunt.log.write('Hello world! Welcome to Tutorialspoint!!\n');

   // Default task(s).
   grunt.registerTask('default');
};