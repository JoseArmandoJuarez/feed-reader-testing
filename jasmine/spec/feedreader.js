/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function () {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */

    describe('RSS Feeds', function () {
        /* This test makes sure that the
         * allFeeds variable has been defined and that it is not
         * empty.
         */
        it('are defined', function () {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* This test loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('allFeed urls are defined', function () {
            for (var i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url.length).not.toBe(0);
            }
        });

        /* This test loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('allFeed names are defined', function () {
            for (var i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name.length).not.toBe(0);
            }
        });
    });

    describe('The menu', function () {

        /* This test ensures the menu element is
        * hidden by default.
        */
        it('The menu element is hidden by default', function () {
            expect($('body').hasClass('menu-hidden')).toEqual(true);
        });

        /* This test ensures the menu changes
        * visibility when the menu icon is clicked. This test
        * has two expectations: does the menu display when
        * clicked and does it hide when clicked again.
        */
        it('The Menu changes visibility when the menu is clicked', function () {
            var menuIconLink = $('.menu-icon-link');
            menuIconLink.click();
            expect($('body').hasClass('menu-hidden')).toBe(false);
            menuIconLink.click();
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
    });

    describe('Initial Entries', function () {
        /* This test ensures when the loadFeed
        * function is called and completes its work that there is at least
        * a single .entry element within the .feed container.     
        */

        //done signals to the framework when a asynchronous function
        //has completed, and we are ready to run our tests.
        beforeEach(function (done) {
            //this will signal to the framework that our asynchronous
            //function is done doing what we needed it to do. and we can continue testing.
            loadFeed(0, done);
        });

        it('there is at least a single entry', function () {
            const entry = $('.feed .entry');
            expect(entry.length).toBeGreaterThan(0);
        });
    });


    describe('New Feed Selection', function () {
        /* This test ensures when a new feed is loaded
        * by the loadFeed function that the content actually changes.
        */
        let oldFeed;
        beforeEach(function (done) {
            loadFeed(0, function () {
                //get content of feed container
                oldFeed = $('.feed').html();

                loadFeed(1, function () {
                    //get content of feed container again
                    done();
                });
            });
        });

        it('content changes', function (done) {
            let newFeed = $('.feed').html();
            expect(oldFeed).not.toBe(newFeed);
            done();
        });
    });
}());
