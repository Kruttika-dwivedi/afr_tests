const LandingPage = require('../pageobjects/landing.page');

describe('TC100:Verify AFR Subscription PopUp', () => {

    before(() => {
        // Open the afr page app url
        LandingPage.open();
    })

        // Verify the page title of afr page.
        it('TC101:Verify the page title of afr page', () => {
            expect(browser).toHaveTitle('Capability edge and keeping South China Sea open crucial: Christopher Pyne');
        });

        // Verify that popup has been displayed.
        it('TC102:Verify popup has been displayed', () => {
            LandingPage.verifyPopUp('Can See');
            
        // Save screenshot to screenshot directory.
        browser.saveScreenshot('./screenshots/TC102_withPopUp.png');
        });

        // Navigate to bottom of the page.
        it('TC103:Scroll to Bottom of page', () => {
            LandingPage.navigateToBottom();
        });

        // Verify that popup is no longer displayed
        it('TC104:Verify popup is no longer displayed', () => {
            LandingPage.verifyPopUp('Cant See');

            // Save screenshot to screenshot directory.
            browser.saveScreenshot('./screenshots/TC104_withoutPopUp.png');
        });
    
});


