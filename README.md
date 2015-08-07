ked Framework

Naked is a HTML/CSS framework that is as bare-bones as possible. Just a responsive CSS grid, and some basic typography and element styling. No need for a lengthy framework overwrites stylesheet or loading unused code into the DOM.

Naked is built off of elastic percentages for page structure, with ```em``` units for maximum and minimum values. This allows the entire viewport to be dictated by the device's font scale, so that page elements will be displayed at the right ratio for every device.

## Installation

# Sorry, Naked is still too early in development for you to use. When it's ready, you will:


Installing naked is as easy as -

``` bower install naked-framework ```


## Why Naked

HTML / CSS / JS frameworks like [Twitter Bootstrap](http://www.getbootstrap.com) and [Zurb Foundation](http://foundation.zurb.com/) have become increasingly popular among developers in recent years, as they provide boilerplate CSS and Javascript for quickly building web-apps. The problem with these solutions is that they have their own design styles that require heavy overwriting when using your own aesthetic. As a developer I've found myself consistently having to spend more time then I save overwriting framework styles when I am only going to use several features of a framework (such as the grid). It's always irritated me that I'm loading a significant amount of code to only use a small amount of it, then having to overwrite the code I don't need.

### em's and vw/vh over rem and px
Another thing that's always bugged me about working with frameworks is their choice to use ```px``` as their baseline unit (such as in the case of twitter bootstrap). Pixels are used for typography, padding and margin excessively. While this isn't the end of the world due to their use of media queries, it either forces me to have inconsistent code or to use pixels. Zurb's foundation uses the ```rem ``` unit instead, which is awesome, but is completely unsupported by IE8.

Therefore I've chosen to use ```em``` units in Naked, which is supported by IE8 yet still allows you to use.

### When to go Naked

 * I already have my own design documents for my web app that are signficiantly different than an existing framework solution
 * I only need a CSS grid and reset
 * I value my time and productivity
 * I need to support IE8
 * I use ```em``` units

### When to go with another framework

 * I don't have design completed for my project or I don't want to think about
 * I need to use most of the components present in the framework
 * I don't need to support IE8
 * I use ```px``` or ```rem``` units (see above).


## Dependencies:

 * [Normalize CSS](https://necolas.github.io/normalize.css/)

