# INPUT
The input for this sample application is the ability to press (click) on a profile card.

# PROCESS
showThumbnail is a boolean property for each card displayed in the array that is set to True by default. When showThumbnail is True, each profile card is scaled down to 40% of its original size. 

The handleProfileCardPress() function is designed to toggle this property between True and False in response to an onPress() event from the user. 

That is, when a user selects one of the thumbnails, the profile card scales up from 40% (showThumbnail=True) to 75% (showThumbnail=False) the size of the original card styling, and, if selected again, the card will shrink back down to 40%. 

# OUTPUT
Upon loading, all six profile cards are displayed in a 3x2 grid, set to a thumbnail size. When a thumbnail is selected, the card nearly doubles in size, giving the user a zoomed in preview of the profile card without disturbing the neighboring thumbnails. 

If another card is pressed, both cards will remain zoomed in. 

If a card that has already been selected once, is pressed again, it will return to its default thumbnail size. 

The data within the array of profile cards is printed to console upon creatiion for debugging purposes. 

There are shadow effects that make this application more engaging if you are running iOS devices. The screenshots saved are from an android simulator as both my phone and laptop are samsung. 