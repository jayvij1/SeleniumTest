$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Features/MyTest.feature");
formatter.feature({
  "line": 1,
  "name": "Login functionality of Application",
  "description": "",
  "id": "login-functionality-of-application",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Verification of login",
  "description": "",
  "id": "login-functionality-of-application;verification-of-login",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "Open the Firefox and launch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Enter the Username and click Next",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Enter the password and click Next",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "close browser",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.open_the_Firefox_and_launch_the_application()"
});
formatter.result({
  "duration": 12555472916,
  "status": "passed"
});
formatter.match({
  "location": "Steps.enter_the_Username_and_click_Next()"
});
formatter.result({
  "duration": 2381162782,
  "status": "passed"
});
formatter.match({
  "location": "Steps.enter_the_password_and_click_Next()"
});
formatter.result({
  "duration": 2365425585,
  "status": "passed"
});
formatter.match({
  "location": "Steps.close_browser()"
});
formatter.result({
  "duration": 41198715929,
  "status": "passed"
});
});