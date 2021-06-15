const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LandingPage extends Page {

    // Popup selector
    popupContent(display) { return $(`//div[@data-testid="SubscriptionPrompt-${display}"]`) }


    // SiteMap Hyperlink in the bottom
    get hyperLink() { return $("//a[contains(text(),'Site Map')]") }

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
    }
}

module.exports = new LandingPage();
