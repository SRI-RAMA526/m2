$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("E:/Cucumber Practice/login/src/main/java/com/login/features/amazonorder.feature");
formatter.feature({
  "line": 2,
  "name": "place an order in amazon website",
  "description": "",
  "id": "place-an-order-in-amazon-website",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@sprint1119"
    }
  ]
});
formatter.scenario({
  "line": 5,
  "name": "Verify Amazon login website",
  "description": "",
  "id": "place-an-order-in-amazon-website;verify-amazon-login-website",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@user001"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "verify the amazon india homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "title of amazon india website",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "click on signin button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "title is amazon signin",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "enter username and click continue button",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "enter password and click signin button",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user able to signin",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "select category in category box",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "enter the desired product and search product",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "select Brand and select shoe",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "click on buy now and enter billing details",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "enter the card details and click proceed",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "click on cancel",
  "keyword": "Then "
});
formatter.match({
  "location": "AmazonOrder.verify_the_amazon_india_homepage()"
});
formatter.result({
  "duration": 10352528200,
  "status": "passed"
});
formatter.match({
  "location": "AmazonOrder.title_of_amazon_india_website()"
});
formatter.result({
  "duration": 12537800,
  "status": "passed"
});
formatter.match({
  "location": "AmazonOrder.click_on_signin_button()"
});
formatter.result({
  "duration": 2175771800,
  "status": "passed"
});
formatter.match({
  "location": "AmazonOrder.title_is_amazon_signin()"
});
formatter.result({
  "duration": 32878400,
  "status": "passed"
});
formatter.match({
  "location": "AmazonOrder.enter_username_and_click_continue_button()"
});
formatter.result({
  "duration": 1595452700,
  "status": "passed"
});
formatter.match({
  "location": "AmazonOrder.enter_password_and_click_signin_button()"
});
formatter.result({
  "duration": 3604913100,
  "status": "passed"
});
formatter.match({
  "location": "AmazonOrder.user_able_to_signin()"
});
formatter.result({
  "duration": 260864400,
  "status": "passed"
});
formatter.match({
  "location": "AmazonOrder.select_category_in_category_box()"
});
formatter.result({
  "duration": 881255200,
  "status": "passed"
});
formatter.match({
  "location": "AmazonOrder.enter_the_desired_product_and_search_product()"
});
formatter.result({
  "duration": 4309136500,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "AmazonOrder.click_on_buy_now_and_enter_billing_details()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AmazonOrder.enter_the_card_details_and_click_proceed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AmazonOrder.click_on_cancel()"
});
formatter.result({
  "status": "skipped"
});
});