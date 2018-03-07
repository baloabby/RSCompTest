package Pages;

import org.openqa.selenium.StaleElementReferenceException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

import Resources.*;

public class Deliverypage extends Base {
	@FindBy(css = ".title.formInput")
	WebElement Titletextbox;

	@FindBy(id = "deliveryCollectionForm:CustomerContactDetailsWidgetAction_firstName_decorate:CustomerContactDetailsWidgetAction_firstName")
	WebElement FirstNametextbox;

	@FindBy(id = "deliveryCollectionForm:CustomerContactDetailsWidgetAction_surName_decorate:CustomerContactDetailsWidgetAction_surName")
	WebElement SurNametextbox;

	@FindBy(id = "deliveryCollectionForm:CustomerContactDetailsWidgetAction_contactNumber_decorate:CustomerContactDetailsWidgetAction_contactNumber")
	WebElement ContactNumbertextbox;

	@FindBy(id = "deliveryCollectionForm:GuestDeliveryAddressWidgetAction_companyNameOne_decorate:GuestDeliveryAddressWidgetAction_companyNameOne")
	WebElement CompanyNametextbox;

	@FindBy(id = "deliveryCollectionForm:GuestDeliveryAddressWidgetAction_addressLineOne_decorate:GuestDeliveryAddressWidgetAction_addressLineOne")
	WebElement Addresstextbox;

	@FindBy(id = "deliveryCollectionForm:GuestDeliveryAddressWidgetAction_addressLineThree_decorate:GuestDeliveryAddressWidgetAction_addressLineThree")
	WebElement Towntextbox;

	@FindBy(id = "deliveryCollectionForm:GuestDeliveryAddressWidgetAction_selectedRegion_decorate:selectedRegion")
	WebElement Countytextbox;

	@FindBy(id = "deliveryCollectionForm:GuestDeliveryAddressWidgetAction_postCode_decorate:GuestDeliveryAddressWidgetAction_postCode")
	WebElement PostCodetextbox;

	@FindBy(id = "checkoutSecurelyBtn")
	WebElement ContinuetoPaymentbutton;

	public Deliverypage(WebDriver driver) {
		this.driver = driver;
		PageFactory.initElements(driver, this);

	}

	public void SelectTitle() {
		Select Title = new Select(Titletextbox);
		int TitleIndex = 1 + (int) Math.round(Math.random() * (6 - 1));
		String title = Integer.toString(TitleIndex);
		Title.selectByValue(title);

	}

	public void EnterPhoneNumber(String number) {
		ContactNumbertextbox.sendKeys(number);

	}

	public void EnterFirstname(String name) {
		FirstNametextbox.sendKeys(name);

	}

	public void EnterSurname(String name) {
		SurNametextbox.sendKeys(name);

	}

	public void EnterCompanyname(String name) {
		CompanyNametextbox.sendKeys(name);

	}

	public void EnterPostCode(String postcode) {
		PostCodetextbox.sendKeys(postcode);

	}

	public void EnterAddress(String address) {
		Addresstextbox.sendKeys(address);

	}

	public void EnterTown(String town) {
		Towntextbox.sendKeys(town);

	}

	public void SelectCounty(String county) {
		Select County = new Select(Countytextbox);
		County.selectByValue(county);

	}

	public void ClickContinueToPaymentButton() {
		new WebDriverWait(driver, 10).ignoring(StaleElementReferenceException.class)
		.until(ExpectedConditions.elementToBeClickable(ContinuetoPaymentbutton));
		ContinuetoPaymentbutton.click();
	}
}
