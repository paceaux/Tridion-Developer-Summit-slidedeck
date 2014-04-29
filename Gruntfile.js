module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    themePath: '<%= pkg.assets.theme %>',
    contentPath: '<%=pkg.assets.content %>',
    partials: '<%= themePath %>/partials',
    templates: '<%= themePath %>/templates',
    compass: {
      theme: {
        options: {
          cssDir: '<%=themePath%>/css',
          sassDir:'<%= themePath %>/scss'
        }
      }
    },
    watch: {
      html: {
        files: ['<%=themePath%>/**/*.html','<%=partials %>*.html', '<%=contentPath%>/**/*.html', '<%=contentPath%>/*.html', '<%=themePath%>/scss/*.scss' ],
        tasks: ['concat:slideDeck', 'htmlbuild:dist', 'compass:theme']
      }
    },
    concat: {
      slideDeck: {
          src: ['<%=contentPath %>/slides/*.html'],
          dest: '<%=contentPath %>/slideDeck.html',
          options: {
            process: function (src, filePath) {
              return '<slide data-slide-src="' + filePath + '">\n' + src + '\n</slide>';
            }
          }
      }
    },
    htmlbuild:{
        dist: {
            src: '<%=templates %>/template.html',
            dest: '<%=pkg.assets.presentation %>',
            options: {
                beautify: true,
                relative: true,
                logOptions: true,
                sections: {
                  views:{
                    intro: '<%=partials %>/intro.html',
                    authorIntro: '<%= contentPath %>/introduction.html',
                    slideDeck: '<%= contentPath %>/slideDeck.html',
                    authorOutro: '<%= contentPath %>/thank-you.html',
                    outro: '<%=partials %>/outro.html',  
                  },                  
                    layout: {
                        header: '<%= partials %>/header.html',
                        footer: '<%= partials %>/footer.html'
                    }
                },
                data: {
                    // Data to pass to templates
                    version: "0.1.0",
                    title: "Frank's Test",
                }
            }
        }
    }
});

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-html-build');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');  
  grunt.loadNpmTasks('grunt-contrib-compass');  
  grunt.loadNpmTasks('grunt-md2html');
  // Default task(s).
  grunt.registerTask('default', ['compass:theme','concat:slideDeck', 'htmlbuild:dist', 'watch']);

};