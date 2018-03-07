package stepdefinition;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.testng.Assert;
import Resources.*;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class PurchaseTest extends Base {

	public static Logger log = LogManager.getLogger(PurchaseTest.class.getName());

	@Given("^I am on the Homepage$")
	public void i_am_on_the_Homepage() throws Throwable {
		driver = initialiseDriver();
		log.info("Driver is initialized");

	}

	@When("^I click newproducts buton$")
	public void i_click_newproducts_buton() {
		HomePage.ClickNewProductsbox();
	}

	@When("^I click USB Type Adaptors button$")
	public void i_click_USB_Type_Adaptors_button() {
		NewProductPage.ClickUSBTypeCAdaptors();
	}

	@Then("^I add the USB adaptor to basket$")
	public void i_add_the_USB_adaptor_to_basket(){
		PowerSupplyPage.ClickRSPro27WAddbutton();
	}

	@Then("^I click the basket button$")
	public void i_click_the_basket_button() {
		PowerSupplyPage.ClickViewBasketicon();
	}

	@Then("^I clicked checkout button$")
	public void i_clicked_checkout_button() {
		BasketPage.ClickCheckOutButton();
	}

	@Then("^I enter new email$")
	public void i_enter_new_email(){
		BasketPage.EnterNewemail();
	}

	@Then("^I click guest checkout button$")
	public void i_click_guest_checkout_button() {
		BasketPage.ClickGuestCheckOutButton();
		
	}

	@Then("^I enter customer details$")
	public void i_enter_customer_details() {
		DeliveryPage.SelectTitle();
		DeliveryPage.EnterFirstname("Test");
		DeliveryPage.EnterSurname("Testing");
		DeliveryPage.EnterPhoneNumber("07472999230");
		DeliveryPage.EnterCompanyname("Test Testing");
		DeliveryPage.EnterAddress("73 Woodfall Drive");
		DeliveryPage.EnterTown("Crayford");
		DeliveryPage.SelectCounty("Kent");
		DeliveryPage.EnterPostCode("DA1 4TN");
	}

	@Then("^I click continue to payment button$")
	public void i_click_continue_to_payment_button() {
		DeliveryPage.ClickContinueToPaymentButton();
	}

	@Then("^I verify I am on the payment page$")
	public void i_verify_I_am_on_the_payment_page(){
		Assert.assertTrue(PaymentPage.getmessage().isDisplayed());
		log.info("Successfully validated text message");
	}

	@Given("^I click allproducts buton$")
	public void i_click_allproducts_buton() {
		HomePage.ClickAllProductsbox();
	}

	@Given("^I click Cables and Wire button$")
	public void i_click_Cables_and_Wire_button() {
		HomePage.ClickCablesandWirebutton();
	}

	@Given("^I click Audio Video Cable button$")
	public void i_click_Audio_Video_Cable_button() {
		CableandWiresPage.ClickAudioVideoCablebutton();
	}

	@When("^I click Jack Cable Assemblies button$")
	public void i_click_Jack_Cable_Assemblies_button() {
		AudioVideoCablePage.ClickJackCableAssembliesbutton();
	}

	@When("^I add produts to the basket$")
	public void i_add_produts_to_the_basket() {
		JackCablePage.EnterSwitchCraft18m35mmquantity("2");
		JackCablePage.ClickSwitchCraft18m35mmAddbutton();
	}

	@When("^I view my basket$")
	public void i_view_my_basket() {
		JackCablePage.ClickViewBasketicon();
	}

	@Then("^I enter username$")
	public void i_enter_username() {
		BasketPage.EnterUsername("testing1234");
	}

	@Then("^I enter password$")
	public void i_enter_password() {
		BasketPage.EnterPassword("password");
	}

	@Then("^I click login button$")
	public void i_click_login_button() {
		BasketPage.ClickLoginButton();
	}

	@Then("^I select branch collection$")
	public void i_select_branch_collection(){
		BasketPage.ClickBranchCollectRadioButton();
	}

	@Then("^I select the branch$")
	public void i_select_the_branch() {
		BasketPage.SelectBranch("Bermondsey - London Trade Counter");
	}

	@Then("^I close the browser$")
	public void i_close_the_browser(){
		driver.close();
		driver = null;
	}

}
