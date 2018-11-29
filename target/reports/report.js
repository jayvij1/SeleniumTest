$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Features/MyTest.feature");
formatter.feature({
  "line": 1,
  "name": "Link click on google.com",
  "description": "",
  "id": "link-click-on-google.com",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Verification of first link click on google.com",
  "description": "",
  "id": "link-click-on-google.com;verification-of-first-link-click-on-google.com",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "Open Chrome and launch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Enter search text and click Enter",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Click on first link",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "First link should get open",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.open_chrome_and_launch_the_application()"
});
formatter.result({
  "duration": 5521428090,
  "status": "passed"
});
formatter.match({
  "location": "Steps.enter_search_text_and_click_Enter()"
});
formatter.result({
  "duration": 3290781153,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_first_link()"
});
formatter.result({
  "duration": 9945502140,
  "status": "passed"
});
formatter.match({
  "location": "Steps.first_link_should_get_open()"
});
formatter.result({
  "duration": 5524760934,
  "status": "passed"
});
});