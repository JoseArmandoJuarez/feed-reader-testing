# Feed Reader Testing

This is a project to test a feedReader code in Jasmine.js with jQuery to select DOM elements.

The project code is based from Udacity which has contained the first test "RSS Feeds".

---
## How to run the app locally

Clone or download this git repository to your local machine. Locate to the repository folder and open index.html, you should be able to see the feeds load.

---
## These are the tests to check if the code works

    Note: 
        * Describe - is a test suite that contains related set of tests
        * it - is known as a test

* The first test in **RSS Feeds** has been given and it makes sure that the allFeeds variable in app.js has been defined and that it is not empty. 

* The second test in **RSS Feeds** loops through each feed in the allFeeds object and ensures it has a URL defined and that the URL is not empty.

* The third test in **RSS Feeds** loops through each feed in the allFeeds object and ensures it has a name defined and that the name is not empty.

* The first test in **The menu** ensures the menu element is hidden by default.

* The second test in **The menu** ensures the menu changes visibility when the menu icon is clicked. This test has two expectations: does the menu display when clicked and does it hide when clicked again.

* The test in **Initial Entries** ensures when the loadFeed function is called and completes its work that there is at least a single .entry element within the .feed container. 

* The test in **New Feed Selection** ensures when a new feed is loaded by the loadFeed function that the content actually changes.