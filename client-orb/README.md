Client
Src/
hooks/
page.js
This hook was used on each page, to render the information,

services/
network.js, this function had a class with two main methods :
Fetching the statuses of each page
Fetching the information of each page, given the unique page identifier(slug)

components/
Navbar

App.js
On start, I had one main useState, useEffect, helper function, which was:

useState = [livePages, setLivePages]
This was used to keep track of the statuses of each page

One app render,
useEffect
called the network function to fetch all of the statuses of the pages, regardless of whether they were live or under construction
Once this was done, i used .then after to filter these pages, that if the status was == “LIVE”, keep, if else, then filter out, then I set this value to livePages

HelperFunction(pageTitle)
Takes in the pageTitle as a parameter
This function returned true or false, if it was true then show the current page’s information, if not, then display the under construction screen
For evaluating true or false, I used the array of livePages, turned it into a set, and then compared the title that was passed through to check if it was actually in the set, if it was, return true, if not, then return false

Afterwards, in the App.js file, I used a main router to route to each page, and it looked somewhat like this:
<App>
<navbar>
<HelperFunction() ? homescreen : underconstruction >
… for each page with the exception of the homePage
</App>

pages/
HomePage
AboutPage
ProfilePage
SettingsPage
UnderconstructionPage
Each page, with the exception of the homePage and UnderconstructionPage, had each static components, which were the title and the slug, which are used as identifiers for the back-end calls and for rendering the information as well.

Disclosure: the page components were generated using Claude, due to losing all of the front-end originally, I generated
separate components for each page, but all of the logic and routing was done by me.
