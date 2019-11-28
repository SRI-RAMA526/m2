Feature: To verify Homepage of Facebook

Scenario: Enter the Login Details in Facebook Page

Given verify facebook login page
When title of given page is facebook
Then enter username and password
| username | password |
| 9963337998 | itslucky | 
Then click on login button
Then verify facebook homepage
