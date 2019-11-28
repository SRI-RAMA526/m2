package com.login.stepdefinition;

import java.util.List;
import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.By.ByCssSelector;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class AmazonOrder {
	
	WebDriver driver;
	
	private final String HOME_PAGE = "https://www.amazon.in/";
	
	@Given("^verify the amazon india homepage$")
	public void verify_the_amazon_india_homepage(){
		System.setProperty("webdriver.chrome.driver", "C:\\selenium zip\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.get(HOME_PAGE);
		driver.manage().window().maximize();
	}

	@When("^title of amazon india website$")
	public void title_of_amazon_india_website() {
		String title_of_home_page = driver.getTitle();
		String expected_home_page = "Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in";
		System.out.println(title_of_home_page);
		Assert.assertEquals(expected_home_page,title_of_home_page);
	}

	@Then("^click on signin button$")
	public void click_on_signin_button() {
		driver.findElement(By.cssSelector("a[id=\"nav-link-accountList\"]")).click();
		driver.findElement(By.cssSelector("a[data-nav-ref=\"nav_signin\"]")).click();
	}

	@When("^title is amazon signin$")
	public void title_is_amazon_signin() throws Throwable {
		String title_of_signin = driver.getTitle();
		String expected_title_of_signin = "Amazon Sign In";
		System.out.println(title_of_signin);
		Assert.assertEquals(expected_title_of_signin,title_of_signin);
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);

	}
	
	@Then("^enter username and click continue button$")
	public void enter_username_and_click_continue_button() {
		driver.findElement(By.cssSelector("input#ap_email")).sendKeys("9963337998");
		driver.findElement(By.cssSelector("input#continue")).click();
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
	}

	@Then("^enter password and click signin button$")
	public void enter_password_and_click_signin_button()  {
		driver.findElement(By.cssSelector("input#ap_password")).sendKeys("itsmyworld");
		driver.findElement(By.cssSelector("input#signInSubmit")).click();
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
	}
	
//	@Given("^verify amazon website is opened$")
//	public void verify_amazon_website_is_opened() {
//		String title_of_home_page = driver.getTitle();
//		String expected_home_page = "Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in";
//		System.out.println(title_of_home_page);
//		Assert.assertEquals(expected_home_page,title_of_home_page);
//	}
	
	@When("^user able to signin$")
	public void user_able_to_signin() {
		String valueTwo = driver.findElement(By.cssSelector("[id = \"nav-link-accountList\"] \\span.nav-line-1")).getText();
		System.out.println(valueTwo);
		driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
	}


	@Then("^select category in category box$")
	public void select_category_in_category_box()  {
		Select selected_combo_box = new Select(driver.findElement(By.cssSelector("[name = \"url\"]")));
		selected_combo_box.selectByVisibleText("Shoes & Handbags");
	}

	@Then("^enter the desired product and search product$")
	public void enter_the_desired_product_and_search_product() {
		driver.findElement(By.cssSelector("input#twotabsearchtextbox")).sendKeys("Formal Shoes");
	    driver.findElement(By.cssSelector("input[value = \"Go\"]")).click();
	}

	@Then("^click on buy now and enter billing details$")
	public void click_on_buy_now_and_enter_billing_details() {
		WebElement checkbox_label = driver.findElement(By.xpath("//li[@id = \"p_89/Red Tape\"]/span/a/span"));
		checkbox_label.click();
		
	}
	
	@Then("^enter the card details and click proceed$")
	public void enter_the_card_details_and_click_proceed() {
		
	}
	
	@Then("^click on cancel$")
	public void click_on_cancel() {
		
	}
	
	
}
