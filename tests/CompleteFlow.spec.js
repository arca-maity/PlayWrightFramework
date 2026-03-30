const {test} = require('@playwright/test');
const { POManager } = require('../pageobjectmodel/POManager');

test("Complete Order Flow", async({page})=>{

    //Initialize pages
    const poManager = new POManager(page);
    const login = poManager.getLogin();
    const productSelection = poManager.getProductSelection();
    const checkout = poManager.getCheckout();
    const payment = poManager.getPayment();

    //Navigate to Website
    await login.navigateToURL("https://thetokitokistore.myinstamojo.com/");

    //Select Product and add to Cart
    await productSelection.selectCategory("Below 100");
    await productSelection.selectAndAddToCart("Scissor");

    //CheckOut Product
    await checkout.clickCheckOut();
    await checkout.fillCustomerInfo();
    await checkout.fillDeliveryInfo();

    //Add Payment Details
    await payment.clickReviewAndPay();
    await payment.makePayment();
})
