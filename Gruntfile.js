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
			  src: ['src/**/*.js', '!src/js/app.js'],
			  // location of the concatenated output JS file
			  dest: 'dist/js/<%= pkg.name %>.js'
		   }
		},
		
		copy: {
			main: {
				expand: true,
				files: [
					{
						expand: true,
						cwd: 'src',
						src: ['**'],
						dest: 'dist/'
					}
				]
			}
		},
		
		uglify: {
		   options: {
			  // banner will be inserted at the top of the output which displays the date and time
			  banner: '/*! <%= pkg.name %> <%= grunt.template.today() %> */\n'
		   },
		   dist: {
			  files: {
				 'dist/js/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>'],
				 'dist/js/app.min.js': ['dist/js/app.js']
			  }
		   }
		},
		
		jshint: {
		   // define the files to lint
		   files: ['Gruntfile.js', 'src/**/app.js'],
		   // configure JSHint
		   options: {
			  // more options here if you want to override JSHint defaults
			  globals: {
				 jQuery: false,
			  }
		   }
		}
   });

   // log something
   grunt.log.write('Hello world! Welcome to Tutorialspoint!!\n');

   grunt.loadNpmTasks('grunt-contrib-concat');
   grunt.loadNpmTasks('grunt-contrib-uglify');
   grunt.loadNpmTasks('grunt-contrib-jshint');
   grunt.loadNpmTasks('grunt-contrib-copy');


   // Default task(s).
   grunt.registerTask('default' , ['jshint','concat','copy','uglify']);
};