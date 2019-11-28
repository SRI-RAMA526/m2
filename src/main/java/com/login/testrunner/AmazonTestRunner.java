package com.login.testrunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "E:\\Cucumber Practice\\login\\src\\main\\java\\com\\login\\features\\amazonorder.feature",
glue = {"com.login.stepdefinition"},
tags = {"@sprint1119"},
format = {"pretty","html:amazon-report"})
public class AmazonTestRunner {

}
