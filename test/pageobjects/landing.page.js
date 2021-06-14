const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LandingPage extends Page {
    /**
     * define selectors using getter methods
     */
    // Popup selector
    popupContent(display) { return $(`//div[@data-testid="SubscriptionPrompt-${display}"]`) }


    // Hyperlink in the bottom
    get hyperLink() { return $("//a[contains(text(),'Site Map')]") }

    /**
     * a method to encapsule automation code to interact with the page
     */
    // Verify that popup is displayed.
    verifyPopUp(Visibility) {
        if (Visibility === 'Can See'){
            this.popupContent('true').waitForDisplayed();
        }
        else if (Visibility === 'Cant See'){
            this.popupContent('false').waitForDisplayed();
        }
    }

    navigateToBottom() {
        this.hyperLink.waitForExist();
        this.hyperLink.scrollIntoView();
       //browser.pause(10000);
    }
}

module.exports = new LandingPage();
