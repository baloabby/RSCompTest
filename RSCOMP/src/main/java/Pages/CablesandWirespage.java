package Pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import Resources.Base;

public class CablesandWirespage extends Base{
	
	@FindBy(xpath = "//div[@id='categories']//a[@title='Audio Video Cable']")
	WebElement AudioVideoCableButton;
	
	@FindBy(xpath = "//div[@id='categories']//a[@title='A/V Mixed Cable Assemblies']")
	WebElement AVMixedCableButton;
	
	public CablesandWirespage(WebDriver driver) {
		this.driver = driver;
		PageFactory.initElements(driver, this);

}
	public void ClickAudioVideoCablebutton() {
		AudioVideoCableButton.click();
}
	
	public void AVMixedCablebutton() {
		AVMixedCableButton.click();
}
}
