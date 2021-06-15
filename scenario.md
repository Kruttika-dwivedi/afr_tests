app url = https://www.afr.com/policy/foreign-affairs/capability-edge-and-keeping-south-china-sea-open-crucial--christopher-pyne-20180924-h15rq9
    

**Test-Cases**

These test cases are written in describe-it format in specs/TC100_afrLandingPage.js (mapped with same test case Id)

TC101: Given user navigates to app url
       When user is on app page
       Then user should verify the title of the app page

TC102: Given user navigates to app url
       When user is on app page
       Then user should see AFR subscription pop up in bottom
       And screenshot should be captured

TC103: Given user navigates to app url
       When user is on app page
       Then user should be able to scroll to bottom

TC104: Given user navigates to app url
       When user is on app page
       Then user should be able to scroll to bottom
       And verify popup is no longer displayed
       And screenshot should be captured

