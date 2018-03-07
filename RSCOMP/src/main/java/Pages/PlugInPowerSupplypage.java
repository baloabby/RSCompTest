package Pages;

import org.openqa.selenium.StaleElementReferenceException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import Resources.*;

public class PlugInPowerSupplypage extends Base {
	
	@FindBy(xpath = "//button[@id='atbBtn-1']")
	WebElement RSPro27WAddbutton;
	
	@FindBy(xpath = "//header[@id='pageHeader']//i[@class='icon-cart']")
	WebElement Basketicon;
	
	public PlugInPowerSupplypage(WebDriver driver) {
		this.driver = driver;
		PageFactory.initElements(driver, this);

	}
	public void ClickRSPro27WAddbutton() {
		new WebDriverWait(driver, 10).ignoring(StaleElementReferenceException.class)
		.until(ExpectedConditions.elementToBeClickable(RSPro27WAddbutton));
		RSPro27WAddbutton.click();
}
	public void ClickViewBasketicon() {
		Basketicon.click();
}
}