package Pages;

import org.openqa.selenium.StaleElementReferenceException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import Resources.*;



public class Homepage extends Base {

	
	@FindBy(css = ".menu.product-menu")
	WebElement AllProductsbutton;
	
	@FindBy(id = "searchTerm")
	WebElement Searchtextbox;
	
	@FindBy(id = "btnSearch")
	WebElement Searchbutton;
	
	@FindBy(css = ".menu.brands-menu")
	WebElement OurBrandsbutton;
	
	@FindBy(css = ".menu.myAccMenu")
	WebElement MyAccountbutton;
	
	@FindBy(xpath = "//a[@title='New Products']")
	WebElement NewProductsbutton;
	
	@FindBy(xpath = "//a[@href='/web/c/cables-wires/']")
	WebElement CablesandWiresbutton;

	public Homepage(WebDriver driver) {
		this.driver = driver;
		PageFactory.initElements(driver, this);
		
	}
	
	public void ClickAllProductsbox() {
		AllProductsbutton.click();
		
	}
	
	public void ClickNewProductsbox() {
		NewProductsbutton.click();
	}
	public void ClickCablesandWirebutton() {
		new WebDriverWait(driver, 10).ignoring(StaleElementReferenceException.class)
		.until(ExpectedConditions.elementToBeClickable(CablesandWiresbutton));
		CablesandWiresbutton.click();
	}
	
	public void EnterProduct(String product) {
		Searchtextbox.sendKeys(product);
	}
}

