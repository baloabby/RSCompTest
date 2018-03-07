package Resources;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;
import java.util.concurrent.TimeUnit;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;
import Pages.*;


public class Base {
	protected WebDriver driver;
	public String BaseUrl;
	public Properties prop;
	protected Homepage HomePage;
	protected NewProductspage NewProductPage;
	protected PlugInPowerSupplypage PowerSupplyPage;
	protected BasketSummarypage BasketPage;
	protected Deliverypage DeliveryPage;
	protected Paymentpage PaymentPage;
	protected CablesandWirespage CableandWiresPage;
	protected AudioVideoCablepage AudioVideoCablePage;
	protected JackCablepage JackCablePage;
	protected AVMixedCablespages AVMixedCablesPages;

	public WebDriver initialiseDriver() throws IOException {
		prop = new Properties();
		FileInputStream fis = new FileInputStream(
				"C:\\Selenium\\JavaTutorial New\\RSCOMP\\src\\main\\java\\resources\\data.properties");
		prop.load(fis);
		String browserName = prop.getProperty("Browser");
		String baseUrl = prop.getProperty("BaseUrl");

		if (browserName.equals("Chrome")) {
			driver = new ChromeDriver();
		} else if (browserName.equals("Firefox")) {
			driver = new FirefoxDriver();
		} else if (browserName.equals("IE")) {
			driver = new InternetExplorerDriver();
		}
		driver.get(baseUrl);
		driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
		driver.manage().window().maximize();
		HomePage = new Homepage(driver);
		NewProductPage = new NewProductspage(driver);
		PowerSupplyPage = new PlugInPowerSupplypage(driver);
		BasketPage = new BasketSummarypage(driver);
		DeliveryPage = new Deliverypage(driver);
		PaymentPage = new Paymentpage(driver);
		CableandWiresPage = new CablesandWirespage(driver);
		AudioVideoCablePage = new AudioVideoCablepage(driver);
		JackCablePage = new JackCablepage(driver);
		AVMixedCablesPages = new AVMixedCablespages(driver);
		return driver;
	}

}
