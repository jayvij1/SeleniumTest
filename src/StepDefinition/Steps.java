package StepDefinition;		

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import cucumber.api.java.en.Given;		
import cucumber.api.java.en.Then;		
import cucumber.api.java.en.When;		

public class Steps {				

    WebDriver driver;			
    		
    @Given("^Open Chrome and launch the application$")					
    public void open_chrome_and_launch_the_application() throws Throwable							
    {		
       System.setProperty("webdriver.chrome.driver","C:/Users/jayvij/Downloads/Jarfiles/chromedriver.exe");			
       driver= new ChromeDriver();			
       driver.manage().window().maximize();			
       driver.get("https://www.google.com/");					
    }		

    @When("^Enter search text and click Enter$")
    public void enter_search_text_and_click_Enter()throws Throwable {
    	driver.findElement(By.xpath("//*[@id='tsf']/div[2]/div/div[1]/div/div[1]/input")).sendKeys("Test message");
    	driver.findElement(By.xpath("//*[@id='tsf']/div[2]/div/div[1]/div/div[1]/input")).sendKeys(Keys.RETURN);
        Thread.sleep(2000);
    }

    @When("^Click on first link$")
    public void click_on_first_link() throws Throwable {
    	driver.findElement(By.xpath("//a/h3[contains(text(),'How do I send a test message?')]")).click();
    }

    @Then("^First link should get open$")
    public boolean first_link_should_get_open() throws Throwable {
    	Thread.sleep(5000);
    	String actual = driver.getCurrentUrl();
        String expected = "https://www.clickatell.com/faqs/answer/how-do-i-send-a-test-message/";
    	if (actual.equals(expected))
    	{
    	System.out.println("Link is opened");
    	Thread.sleep(3000);
        driver.close();	
    	}
		return false;
		
    }		
}		