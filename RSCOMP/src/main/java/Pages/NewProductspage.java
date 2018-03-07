package Pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import Resources.*;

public class NewProductspage extends Base {
	
	@FindBy(xpath = "//div[@id='featprd-id-1']//a[contains(text(),'USB Type C Power Adaptors')]")
	WebElement USBTypeCAdaptors;
	
	public NewProductspage(WebDriver driver) {
		this.driver = driver;
		PageFactory.initElements(driver, this);
	}
		public void ClickUSBTypeCAdaptors() {
			USBTypeCAdaptors.click();
}
}