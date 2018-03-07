package Pages;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.StaleElementReferenceException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.FluentWait;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;
import Resources.Base;

public class JackCablepage extends Base {

	@FindBy(id = "atbQty-2")
	WebElement RSPro1m35mmquantityfield;

	@FindBy(id = "rpp-button")
	WebElement ResultperPagebutton;

	@FindBy(xpath = "//div[@id='sticky-results-header']//a[text()=20]")
	WebElement TwentyPagesbutton;

	@FindBy(xpath = "//div[@id='sticky-results-header']//a[text()=50]")
	WebElement FiftyPagesbutton;

	@FindBy(xpath = "//div[@id='sticky-results-header']//a[text()=100]")
	WebElement HundredPagesbutton;

	@FindBy(id = "atbBtn-2")
	WebElement RSPro1m35mmAddbutton;

	@FindBy(id = "atbQty-6")
	WebElement SwitchCraft18m35mmquantityfield;

	@FindBy(xpath = "//div[@id='filters']//a[position()=4]")
	WebElement Lenghtbutton;
	
	@FindBy(xpath = "//div[@id='filters']//a[position()=1]")
	WebElement Brandbutton;
	
	@FindBy(xpath = "//label[@id='4294964774']/input")
	WebElement Switchcraftcheckbox;
	
	@FindBy(xpath = "//label[@id='4293207131']/input")
	WebElement RSProcheckbox;

	@FindBy(css = ".rangeFrom.pull-left.ng-pristine.ng-untouched.ng-valid.ng-empty")
	WebElement LenghtFromRangetextbox;

	@FindBy(css = ".rangeTo.pull-right.ng-pristine.ng-untouched.ng-valid.ng-empty")
	WebElement LenghtToRangetextbox;

	@FindBy(id = "atbBtn-6")
	WebElement SwitchCraft18m35mmAddbutton;

	@FindBy(xpath = "//header[@id='pageHeader']//i[@class='icon-cart']")
	WebElement Basketicon;

	@FindBy(xpath = "//div[@id='filters']//button[contains(text(),'Apply filters')]")
	WebElement ApplyFilterbutton;
	
	@FindBy(xpath = "//div[@id='sticky-results-header']//div[contains(text(),'Viewing 1 - 35 of 35 products')]")
	WebElement ResultMessage;
	
	@FindBy(xpath = "//div[@id='bread-box']//a[contains(text(),'Applied filters')]")
	WebElement AppliedFilterMessage;
	
	@FindBy(xpath = "//div[@id='bread-box']//div[@class='appliedAttribute']")
	WebElement AppliedrsproMessage;
	
	public JackCablepage(WebDriver driver) {
		this.driver = driver;
		PageFactory.initElements(driver, this);

	}

	public void EnterRSPro1m35mmquantity(String quantity) {
		new WebDriverWait(driver, 10).ignoring(StaleElementReferenceException.class)
				.until(ExpectedConditions.elementToBeClickable(RSPro1m35mmquantityfield));
		RSPro1m35mmquantityfield.clear();
		RSPro1m35mmquantityfield.sendKeys(quantity);
	}

	public void ClickRSPro1m35mmAddbutton() {
		new WebDriverWait(driver, 10).ignoring(StaleElementReferenceException.class)
				.until(ExpectedConditions.elementToBeClickable(RSPro1m35mmAddbutton));
		RSPro1m35mmAddbutton.click();
	}

	public void EnterSwitchCraft18m35mmquantity(String quantity) {
		new WebDriverWait(driver, 10).ignoring(StaleElementReferenceException.class)
				.until(ExpectedConditions.elementToBeClickable(SwitchCraft18m35mmquantityfield));
		SwitchCraft18m35mmquantityfield.clear();
		SwitchCraft18m35mmquantityfield.sendKeys(quantity);
	}

	public void ClickSwitchCraft18m35mmAddbutton() {
		new WebDriverWait(driver, 10).ignoring(StaleElementReferenceException.class)
				.until(ExpectedConditions.elementToBeClickable(SwitchCraft18m35mmAddbutton));
		SwitchCraft18m35mmAddbutton.click();
	}

	public void ClickViewBasketicon(){
		JavascriptExecutor executor = (JavascriptExecutor) driver;
		executor.executeScript("arguments[0].click();", Basketicon);
	}

	public void ClickResultPageButton() {
		new WebDriverWait(driver, 10).ignoring(StaleElementReferenceException.class)
				.until(ExpectedConditions.elementToBeClickable(ResultperPagebutton));
		ResultperPagebutton.click();
	}

	public void ClickFiftyPageButton() {
		FiftyPagesbutton.click();

	}

	public void SelectLenghtFrom(String Lenghtfrom) {
		Select LenFrom = new Select(LenghtFromRangetextbox);
		LenFrom.selectByVisibleText(Lenghtfrom);

	}

	public void SelectLenghtTo(String LenghtTo) {
		Select LenTo = new Select(LenghtToRangetextbox);
		LenTo.selectByVisibleText(LenghtTo);

	}

	public void ClickApplyFilterButton() {
		ApplyFilterbutton.click();

	}

	public void ClickLenghtButton() {
		Lenghtbutton.click();

	}
	
	public void ClickBrandButton() {
		Brandbutton.click();

	}
	
	public void TickSwitchcraftcheckbox() {
		new WebDriverWait(driver, 10).ignoring(StaleElementReferenceException.class)
		.until(ExpectedConditions.elementToBeClickable(Switchcraftcheckbox));
		Switchcraftcheckbox.click();

	}
	
	public void TickRSProcheckbox() {
		new WebDriverWait(driver, 10).ignoring(StaleElementReferenceException.class)
		.until(ExpectedConditions.elementToBeClickable(RSProcheckbox));
		RSProcheckbox.click();

	}
	
	public String getmessage() {
		return ResultMessage.getText();
}
	
	public String Appliedfiltermessage() {
		new WebDriverWait(driver, 10).ignoring(StaleElementReferenceException.class)
		.until(ExpectedConditions.elementToBeClickable(AppliedFilterMessage));
		new FluentWait<WebDriver>(driver).withTimeout(30, TimeUnit.SECONDS).pollingEvery(10, TimeUnit.SECONDS).ignoring(NoSuchElementException.class);
		return AppliedFilterMessage.getText();
}
	
	public String getAppliedBrandmessage() {
		return AppliedrsproMessage.getText();
}

}
