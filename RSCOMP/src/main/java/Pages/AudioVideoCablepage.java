package Pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import Resources.Base;

public class AudioVideoCablepage extends Base{
	
	@FindBy(xpath = "//div[@id='categories']//a[@title='Jack Cable Assemblies']")
	WebElement JackCableAssmbButton;
	
	public AudioVideoCablepage(WebDriver driver) {
		this.driver = driver;
		PageFactory.initElements(driver, this);

}
	public void ClickJackCableAssembliesbutton() {
		JackCableAssmbButton.click();
}
}
