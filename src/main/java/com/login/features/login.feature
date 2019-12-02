@end2end_testing
Feature: To verify Homepage of Facebook

@functional_testing
Scenario: Enter the Login Details in Facebook Page


Given verify facebook login page
When title of given page is facebook
Then enter username and password
| username | password |
| 9963337998 | itslucky | 
Then click on login button
Then verify facebook homepage
Then quit the browser

@smoke_testing
Scenario: open the facebook homepage

Given verify facebook login page
When title of given page is facebook
Then quit the browser

@Regression_testing
Scenario: enter the facebook details
Given verify facebook login page
When title of given page is facebook
Then enter username and password
| username | password |
| 9963337998 | itslucky | 
Then quit the browser



