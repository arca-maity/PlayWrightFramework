const {test} = require('@playwright/test');
const { POManager } = require('../pageobjectmodel/POManager');
const testData = JSON.parse(JSON.stringify(require('../testdata/CompleteFlowTD.json')));

for(const data of testData){
test(`Complete Order Flow for product - ${data.ProductSelection.productname}`, async({page})=>{

    //Initialize pages and test data
    const poManager = new POManager(page, data);
    const login = poManager.getLogin();
    const productSelection = poManager.getProductSelection();
    const checkout = poManager.getCheckout();
    const payment = poManager.getPayment();

    //Navigate to Website
    await login.navigateToURL();

    //Select Product and add to Cart
    await productSelection.selectCategory();
    await productSelection.selectAndAddToCart();

    //CheckOut Product
    await checkout.clickCheckOut();
    await checkout.fillCustomerInfo();
    await checkout.fillDeliveryInfo();

    //Add Payment Details
    await payment.clickReviewAndPay();
    await payment.makePayment();
})
}