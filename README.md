# card
Ryan Dang Business Card

I started with placing my portrait offscreen and putting my logo in a CSS grid. I used @keyframe animations when the user loads the website to animate them both. The business card itself is responsive from using grid and flexbox within a media query. I ran into a problem with the animations playing on a window resize, so I took some javascript off of Google and modified it to pause the animations. I added a reduced motion media query, but because of the window resizing script I may have overcomplicated the CSS as I needed to call on the resize-animation-stopper class a lot.
