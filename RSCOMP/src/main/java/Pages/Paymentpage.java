package Pages;

import org.openqa.selenium.StaleElementReferenceException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import Resources.*;

public class Paymentpage extends Base {
	
	@FindBy(xpath = "//div[@id='wrapper']//span[contains(text(),'Secure checkout')]")
	WebElement ContinuetoOrderReviewbutton;
	
	public Paymentpage(WebDriver driver) {
		this.driver = driver;
		PageFactory.initElements(driver, this);
	}

	
	public WebElement getmessage() {
		
		new WebDriverWait(driver, 10).ignoring(StaleElementReferenceException.class)
		.until(ExpectedConditions.elementToBeClickable(ContinuetoOrderReviewbutton));
		return ContinuetoOrderReviewbutton;
}
	
	public String getmessages() {
		new WebDriverWait(driver, 10).ignoring(StaleElementReferenceException.class)
		.until(ExpectedConditions.elementToBeClickable(ContinuetoOrderReviewbutton));
		return ContinuetoOrderReviewbutton.getText();
}
}

