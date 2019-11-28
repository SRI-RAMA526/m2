package com.login.testrunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features ="E:\\Cucumber Practice\\login\\src\\main\\java\\com\\login\\features\\login.feature",
		glue = {"com.login.stepdefinition"},
		format = {"pretty","html:resultant"})
public class LoginTestRunner {

}
