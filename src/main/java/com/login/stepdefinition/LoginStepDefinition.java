package com.login.stepdefinition;

import java.util.Map;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginStepDefinition {
	
	WebDriver driver;
	
	private final String HOME_PAGE = "https://www.facebook.com/";
	
	@Given("^verify facebook login page$")
	public void verify_facebook_login_page()  {
		System.setProperty("webdriver.chrome.driver", "C:\\selenium zip\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.get(HOME_PAGE);
	}

	@When("^title of given page is facebook$")
	public void title_of_given_page_is_facebook()  {
		String title_of_homepage = driver.getTitle();
		System.out.println(title_of_homepage);
		Assert.assertEquals("Facebook – log in or sign up",title_of_homepage);
	}

	@Then("^enter username and password$")
	public void enter_username_and_password(DataTable tabledata)  {
		for (Map<String,String> datas:tabledata.asMaps(String.class, String.class)) {
			driver.findElement(By.cssSelector("input[name=\"email\"]")).sendKeys(datas.get("username"));
			driver.findElement(By.cssSelector("input[name=\"pass\"]")).sendKeys(datas.get("password"));
		}
		
	}

	@Then("^click on login button$")
	public void click_on_login_button()  {
		driver.findElement(By.cssSelector("label#loginbutton")).click();
	}

	@Then("^verify facebook homepage$")
	public void verify_facebook_homepage()  {
		String title_of_page = driver.getTitle();
		System.out.println(title_of_page);
		//Assert.assertEquals("Facebook – log in or sign up", title_of_page);
	}
	@Then("^quit the browser$")
	public void quit_the_browser() {
		driver.close();
	}


}