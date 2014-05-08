# Tridion Developer Summit Presentation #
## Overview  
This is the Google I/O 2012 slide deck repurposed for the Tridion Developer summit.  It has been branded for TDS. It also uses some node.js-based tools to make it easier to focus on the content, rather than the code, for your slide presentation. 

Source : https://code.google.com/p/io-2012-slides/

Support: Chrome, FF, Safari 5.1, iOS 4.3, Chrome for Android

Technologies: 
 * Compass/ SASS
 * flexbox
 * Transitions/Transforms/Animations
 * RequireJS
 * window.postMessage() for speaker mode
 * node.js (for building the presentation)
 * Grunt.js (for building the presentation)




## Developing Your Presentation ##
Before you start, make sure the `node_modules` folder is in your root directory. 


### Power up ###
 1. Update the `package.json` file so that it contains the appropriate directories
 2. Edit `slide_config.js` to contain your information
 3. Navigate to the folder from a command line and type `grunt`
 4. If you want to present from a node server, from the command line, type, `node server.js`
 
Grunt will now watch your slides and CSS, and rebuild your presentation every time you edit a file. 

### Edit your beginning and end slides ###
 1. Edit `content\introduction.html`
 2. Edit `content\thank-you.html`

### Editing your content slides ###
   * The Title of your slide should be wrapped in an `<hgroup>`. Use an `<h2>` and optionally an `<h3>`
   * The content of your slide should be wrapped in an `<article>`
   * if you want a list to build (show new items when you press an arrow key), give that list the class `build`
   * wrap code in `<pre class="prettyprint">`. use a `data-lang` attribute to tell us the kind of code: 
    ```
	<pre class="prettyprint" data-lang="css">
	</pre>
	```
   * if you need some notes, wrap your content in 
    ```
     <aside class="note">
	</aside>
```
 


### Presentation ###
### User controls ####
 * Pressing <kbd>h</kbd> highlights code snippets
 * Pressing <kbd>p</kbd> toggles speaker notes (if they're on the current slide)
 * Pressing <kbd>f</kbd> toggles fullscreen viewing
 * Pressing <kbd>w</kbd> toggles widescreen
 * Pressing <kbd>o</kbd> toggles overview mode
 * Pressing <kbd>ESC</kbd> toggles off these goodies