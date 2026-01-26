# boilerplate

## Basics for beginning projects with Contao
### Includes following basics
- folder structure for working with Contao CMS
- mixins
- helpers
- normalize
- standard partials
- settings
- standard templates
- basic icon font
- prepros configuration file (if needed by using prepros [https://prepros.io/])
- editorconfig
- standard robots.txt
- standard .htaccess for performance

### How to use
The scss files will be compiled by prepros. If you use other methods just delete prepros config file an implement your own workflow.

#### First Steps
Following changes are made first to start a project:
- file: /prepros-6.config: Change projectname, replace palceholder ( "name": "boilerplate-2018")
- folder: /templates/kunde: change name to project or customer name
- file: /templates/kunde/fe_page_kunde.html5 change suffix to project or customer name
- file: /files/theme/theme_project_160px_120px.png exchange with theme-preview image or edit
- file: /files/theme/scss/project_style.scss change name to project or customer name, generated css file to include in contao will have the same name
- file: /web/robots.txt: Change domain name to actual domain.
- file: /web/.htaccess: Change rewrite url to actual domain and if needed uncomment SSL redirect

##### set variables / change to project values
-file: files/theme/scss/1_settings/``_colors.scss`` define the project colors. Change prefix "$kunde" to project or customer name
-file: files/theme/scss/1_settings/``_fonts.scss`` define the fonts to be used. Also local embedding of fonts is to set in this file

Naming of the partials and what they contain is self-explanatory.
