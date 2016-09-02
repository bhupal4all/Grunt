// our wrapper function (required by grunt and its plugins)
// all configuration goes inside this function
module.exports = function(grunt) {
   // CONFIGURE GRUNT
   grunt.initConfig({
      // get the configuration info from package.json file
      // this way we can use things like name and version (pkg.name)
      pkg: grunt.file.readJSON('package.json'),

		concat: {
		   options: {
			  // define a string to insert between files in the concatenated output
			  separator: ';'
		   },
		   dist: {
			  // files needs to be concatenated
			  src: ['src/**/*.js'],
			  // location of the concatenated output JS file
			  dest: 'dist/<%= pkg.name %>.js'
		   }
		}
   });

   // log something
   grunt.log.write('Hello world! Welcome to Tutorialspoint!!\n');

   grunt.loadNpmTasks('grunt-contrib-concat');

   // Default task(s).
   grunt.registerTask('default' , ['concat']);
};