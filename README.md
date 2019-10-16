# m8-hw8-lastname-firstname

I used w3schools and stackoverflow for reference.

I initially struggled to get it working by toggling the style. I had to use a nextElementSibling (nextSibling returned a text node) function. When it came time to add a CSS transition, I realized that adding and removing a class is a more scalable solution since I can include multiple changes in a single class instead of having to add multiple javascript lines to individually adjust element styles.

I noticed that the text for the <li> elements appears even when the submenu is collapsed. To workaround this, I added an opacity transition. Also, the submenu disappears when the mouse leaves the main menu button only, which I believe is consistent with the instructions.
