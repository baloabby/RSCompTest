package Pages;

import org.openqa.selenium.StaleElementReferenceException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import Resources.*;


public class AVMixedCablespages extends Base{

	
	@FindBy(id = "rpp-button")
	WebElement ResultperPagebutton;
	
	@FindBy(xpath = "//div[@id='sticky-results-header']//a[text()=20]")
	WebElement TwentyPagesbutton;
	
	@FindBy(xpath = "//div[@id='sticky-results-header']//a[text()=50]")
	WebElement FiftyPagesbutton;
	
	@FindBy(xpath = "//div[@id='sticky-results-header']//a[text()=100]")
	WebElement HundredPagesbutton; 
	
	@FindBy(xpath = "//div[@id='sticky-results-header']//div[contains(text(),'Viewing 1 - 100 of 120 products')]")
	WebElement ResultMessage;
	
	
	
	public AVMixedCablespages(WebDriver driver) {
		this.driver = driver;
		PageFactory.initElements(driver, this);

}
	
	public void ClickResultPageButton() {
		new WebDriverWait(driver, 10).ignoring(StaleElementReferenceException.class)
		.until(ExpectedConditions.elementToBeClickable(ResultperPagebutton));
		ResultperPagebutton.click();

	}
	
	public void ClickTwentyPageButton() {
		TwentyPagesbutton.click();
	}
	
	public void ClickFiftyPageButton() {
		FiftyPagesbutton.click();
	}

	public void ClickHundredPageButton() {
		HundredPagesbutton.click();
	}
	
	public String getmessage() {
		return ResultMessage.getText();
}
	}

