package stepdefinition;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.testng.Assert;
import Resources.*;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class FilterResultTest extends Base {

	public static Logger log = LogManager.getLogger(FilterResultTest.class.getName());

	@Given("^I open the Homepage$")
	public void i_open_the_Homepage() throws Throwable {
		driver = initialiseDriver();
		log.info("Driver is initialized");
	}

	@Given("^I click the Cables and Wire button$")
	public void i_click_the_Cables_and_Wire_button() {
		HomePage.ClickCablesandWirebutton();
	}

	@Given("^I click the Audio Video Cable button$")
	public void i_click_the_Audio_Video_Cable_button() {
		CableandWiresPage.ClickAudioVideoCablebutton();
	}

	@Then("^I select fifty button$")
	public void i_select_fifty_button() {
		JackCablePage.ClickFiftyPageButton();
	}

	@Given("^I click allproducts button$")
	public void i_click_allproducts_button() {
		HomePage.ClickAllProductsbox();
	}

	@When("^I click AV Mixed Cable Assemblies button$")
	public void i_click_AV_Mixed_Cable_Assemblies_button() {
		CableandWiresPage.AVMixedCablebutton();
	}

	@Then("^I click Result per page button$")
	public void i_click_Result_per_page_button() {
		AVMixedCablesPages.ClickResultPageButton();
	}

	@Then("^I select hundred button$")
	public void i_select_hundred_button() {
		AVMixedCablesPages.ClickHundredPageButton();
	}

	@Then("^I verify the  number of products on the page$")
	public void i_verify_the_number_of_products_on_the_page() {
		String ExpectedMesage = "Viewing 1 - 100 of 120 products";
		String ActualMessage = AVMixedCablesPages.getmessage();
		Assert.assertEquals(ExpectedMesage, ActualMessage);
		log.info("Successfully validated text message");
	}
	
	@When("^I click the Jack Cable Assemblies button$")
	public void i_click_the_Jack_Cable_Assemblies_button(){
		AudioVideoCablePage.ClickJackCableAssembliesbutton();
	    
	}

	@Then("^I click the Lenght button$")
	public void i_click_the_Lenght_button() {
		JackCablePage.ClickLenghtButton();
	}

	@Then("^I select the range of lenght of the cables$")
	public void i_select_the_range_of_lenght_of_the_cables() {
		JackCablePage.SelectLenghtFrom("500mm");
		JackCablePage.SelectLenghtTo("2m");
	}

	@Then("^I click the filter button$")
	public void i_click_the_filter_button(){
		JackCablePage.ClickApplyFilterButton();
	}

	@Then("^I  verify the results of the brand filter applied$")
	public void i_verify_the_results_of_the_brand_filter_applied() {
		Assert.assertEquals(JackCablePage.getAppliedBrandmessage(), "RS Pro  X");
		log.info("Successfully validated applied filter text message");
	}

	@Then("^I click the Brand button$")
	public void i_click_the_Brand_button() {
		JackCablePage.ClickBrandButton();
	}

	@Then("^I  tick the RSPro tickbox$")
	public void i_tick_the_RSPro_tickbox() {
		JackCablePage.TickRSProcheckbox();
	}
	
	@Then("^I  verify the results of the filter applied$")
	public void i_verify_the_results_of_the_filter_applied() {
		Assert.assertEquals(JackCablePage.getAppliedBrandmessage(), "500mm  X");
		log.info("Successfully validated applied filter text message");
	}
	

	@Then("^I close browser$")
	public void i_close_browser(){
		driver.close();
		driver = null;
	}

}
