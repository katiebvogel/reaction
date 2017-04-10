# Evereve Theme Plugins

This is the layout and theming for Evereve's 5.0 Ecomm platform.

***In order for the plugin to register the correct routes, you must do a Reaction Reset every time you pull this plug in.***

### About this plugin
In this plugin, we have the majority of our front-end code, including layout, design, image assets, and custom static pages.

Inside the client/styles folder there is our main.less file which holds all of the custom theming code. We should eventually split this out into separate less files in order to maintain some semblance of modularity. Please be sure not to touch the @import statements at the top of each file, otherwise things will go _kablooey_.

The templates folder holds our custom header, footer and overall layout for _[Evereve](www.evereve.com)_.

The static folder is for <main> templates that do not rely on data from the db or elsewhere, is just static content.


client/layouts folder  contains header, footer, and home pages
client/products folder contains templates for product grid display
client/static folder contains information pages


Styles/Less files are located in a separate plugin
