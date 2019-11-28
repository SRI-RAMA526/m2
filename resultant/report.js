$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("E:/Cucumber Practice/login/src/main/java/com/login/features/login.feature");
formatter.feature({
  "line": 1,
  "name": "To verify Homepage of Facebook",
  "description": "",
  "id": "to-verify-homepage-of-facebook",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Enter the Login Details in Facebook Page",
  "description": "",
  "id": "to-verify-homepage-of-facebook;enter-the-login-details-in-facebook-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "verify facebook login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of given page is facebook",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "enter username and password",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 8
    },
    {
      "cells": [
        "9963337998",
        "itslucky"
      ],
      "line": 9
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "click on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "verify facebook homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.verify_facebook_login_page()"
});
formatter.result({
  "duration": 13338277300,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.title_of_given_page_is_facebook()"
});
formatter.result({
  "duration": 26395200,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.enter_username_and_password(DataTable)"
});
formatter.result({
  "duration": 396904200,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.click_on_login_button()"
});
formatter.result({
  "duration": 20250421800,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.verify_facebook_homepage()"
});
formatter.result({
  "duration": 148231200,
  "status": "passed"
});
});