# Landing page - Udacity
Project of the Nanodegree Course 'Front End Web Development'.
## Content
### HTML
The project contains one HTML static file.
### CSS
The project contains one CSS file with `@media` queries.
#### Responsiveness
There are `@media` queries for phones, tablets and desktops layouts.

On the mobile and tablet layouts, I added a sandwich menu with CSS and vanilla Java Script.
### Java Script
The repository contains one JS file that is the main objective of this project.
#### NavBar
The top navigation menu is created dinamically with some attributtes (id, class, etc.).
#### Active item
The first menu item (section1) has initially the `.active` class. But since the initial display of the page shows only the banner, no menu item is highlighted.

Once any item on the navbar is selected, that specific content is displayed and the respective navbar item gets the `.active` class and gets highlighted.

I highlighted the section being viewed by hiding the others. When an item of the menu is clicked, only that related section will appear and the page is scrolled to that point.

The only case that all the content will appear, will be if the user clicks on the 'More info here' button. In that case, there is no style for the specific section that is being viewed, but I only put it there so that an user can see all the content. The main option is to show only the wanted section.

## Contributions
Any contributtions and/or suggestions are greatly appreciated.
