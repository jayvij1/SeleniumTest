package TestRunner;		

import java.io.File;

import org.junit.AfterClass;
import org.junit.runner.RunWith;

/*import com.cucumber.listener.Reporter;*/

import cucumber.api.CucumberOptions;		
import cucumber.api.junit.Cucumber;		

@RunWith(Cucumber.class)				
@CucumberOptions(features="Features/MyTest.feature",glue={"StepDefinition"},
plugin={"pretty","html:target/reports"})

public class Runner 
{
/*{		
	@AfterClass
	 public static void writeExtentReport() {
		Reporter.loadXMLConfig("configs/extent-config.xml");
		"com.cucumber.listener.ExtentCucumberFormatter:reports/report.html"*/
	 
}