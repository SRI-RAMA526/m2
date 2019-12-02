$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("E:/Cucumber Practice/login/src/main/java/com/login/features/login.feature");
formatter.feature({
  "line": 2,
  "name": "To verify Homepage of Facebook",
  "description": "",
  "id": "to-verify-homepage-of-facebook",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@end2end_testing"
    }
  ]
});
formatter.scenario({
  "line": 18,
  "name": "open the facebook homepage",
  "description": "",
  "id": "to-verify-homepage-of-facebook;open-the-facebook-homepage",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 17,
      "name": "@smoke_testing"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "verify facebook login page",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "title of given page is facebook",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "quit the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.verify_facebook_login_page()"
});
formatter.result({
  "duration": 8692680300,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.title_of_given_page_is_facebook()"
});
formatter.result({
  "duration": 12941000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.quit_the_browser()"
});
formatter.result({
  "duration": 2090389100,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "enter the facebook details",
  "description": "",
  "id": "to-verify-homepage-of-facebook;enter-the-facebook-details",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 24,
      "name": "@Regression_testing"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "verify facebook login page",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "title of given page is facebook",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "enter username and password",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 29
    },
    {
      "cells": [
        "9963337998",
        "itslucky"
      ],
      "line": 30
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "quit the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.verify_facebook_login_page()"
});
formatter.result({
  "duration": 6511833800,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.title_of_given_page_is_facebook()"
});
formatter.result({
  "duration": 11218500,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.enter_username_and_password(DataTable)"
});
formatter.result({
  "duration": 370806700,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.quit_the_browser()"
});
formatter.result({
  "duration": 2343386700,
  "status": "passed"
});
});