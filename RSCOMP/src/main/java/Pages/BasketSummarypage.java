package Pages;


import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.StaleElementReferenceException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

import Resources.*;

public class BasketSummarypage extends Base {

	@FindBy(id = "checkoutSecurelyAndPuchBtn")
	WebElement CheckOutSecurelybutton;

	@FindBy(id = "guestCheckoutForm:GuestWidgetAction_emailAddress_decorate:GuestWidgetAction_emailAddress")
	WebElement EmailAddresstextbox;
	
	@FindBy(id = "loginForm:LoginWidgetAction_username_decorate:LoginWidgetAction_username")
	WebElement Usernametextbox;
	
	@FindBy(id = "loginForm:LoginWidgetAction_password_decorate:LoginWidgetAction_password")
	WebElement Passwordtextbox;

	@FindBy(id = "guestCheckoutForm:guestCheckout")
	WebElement GuestCheckOutButton;
	
	@FindBy(id = "loginForm:login")
	WebElement LogInButton;
	
	@FindBy(xpath = "//span[@id='shoppingBasketForm:selectedDeliveryOrCollectionArea']//input[@value='COLLECTION']")
	WebElement BranchCollectionRadioButton;
	
	@FindBy(id = "shoppingBasketForm:tradecounterDropDown")
	WebElement BranchTextbox;

	public BasketSummarypage(WebDriver driver) {
		this.driver = driver;
		PageFactory.initElements(driver, this);

	}

	public void ClickCheckOutButton() {
		CheckOutSecurelybutton.click();

	}
	
	public void ClickBranchCollectRadioButton(){
		new WebDriverWait(driver, 10).ignoring(StaleElementReferenceException.class)
		.until(ExpectedConditions.elementToBeClickable(BranchCollectionRadioButton));
		((JavascriptExecutor) driver).executeScript("arguments[0].checked = true;", BranchCollectionRadioButton);
		System.out.println("Is Branch Collection Radio Button Selected? = " + BranchCollectionRadioButton.isSelected());
		BranchCollectionRadioButton.click();

	}

	public void EnterNewemail() {
		int RandomDigit = 100 + (int) (Math.random() * ((1000 - 1) + 1));
		EmailAddresstextbox.sendKeys("testing" + RandomDigit + "@gmail.com");
	}
	
	public void EnterUsername(String username) {
		Usernametextbox.sendKeys(username);
	}
	
	public void EnterPassword(String password) {
		Passwordtextbox.sendKeys(password);
	}
	
	public void ClickLoginButton() {
		LogInButton.click();
	}

	public void ClickGuestCheckOutButton() {
		GuestCheckOutButton.click();
	}
	
	public void SelectBranch(String branch) {
		Select Branch = new Select(BranchTextbox);
		Branch.selectByVisibleText(branch);

	}
}
