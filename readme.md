# Grunt from tutorialpoint
### Sample
1. write package.json
```json
{
   "name": "tutorialspoint",
   "version": "0.1.0",
   "devDependencies": {
      "grunt-contrib-jshint": "~0.10.0",
      "grunt-contrib-nodeunit": "~0.4.1",
      "grunt-contrib-uglify": "~0.5.0"
   }
}
```
2. run `npm init`
3. run `npm install grunt --save-dev` to download npm modules
4. write Gruntfile.js (case sensitive)
```js
// our wrapper function (required by grunt and its plugins)
// all configuration goes inside this function
module.exports = function(grunt) {
   // CONFIGURE GRUNT
   grunt.initConfig({
      // get the configuration info from package.json file
      // this way we can use things like name and version (pkg.name)
      pkg: grunt.file.readJSON('package.json'),

      // all of our configuration goes here
   });

   // log something
   grunt.log.write('Hello world! Welcome to Tutorialspoint!!\n');

   // Default task(s).
   grunt.registerTask('default');
};
```
5. to run use `grunt` command for `default` target or you can specify build command like `grunt default`
6. add sample code (todo application)
7. update Gruntfile.js to add modules. in this case 'grunt-contrib-uglify'.  
8. update the modules using `npm install grunt-contrib-uglify --save-dev`
9. update 'grunt-contrib-jshint', 'grunt-contrib-nodeunit' and 'grunt-contrib-concat' modules
10. add concat target and write necessary code like below
```js
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
```
11. add uglify like below, which considers source file from `concat / dist / dist` property
```js
uglify: {
   options: {
	  // banner will be inserted at the top of the output which displays the date and time
	  banner: '/*! <%= pkg.name %> <%= grunt.template.today() %> */\n'
   },
   dist: {
	  files: {
		 'dist/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
	  }
   }
}		
```
12. add jshint like below, add files for compilation.  in our case, excluding all framework js files
```js
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
```