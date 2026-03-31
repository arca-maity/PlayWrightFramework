import { CheckOut } from "../pageobjectmodel/CheckOut.js";
import { Login } from "../pageobjectmodel/login.js";
import { Payment } from "../pageobjectmodel/Payment.js";
import { ProductSelection } from "../pageobjectmodel/ProductSelection.js";

export class POManager
{
    constructor(page, testData)
    {
        this.login = new Login(page);
        this.productSelection = new ProductSelection(page, testData.ProductSelection);
        this.checkout = new CheckOut(page, testData.CheckOut);
        this.payment = new Payment(page, testData.Payment);
    }

    getLogin()
    {
        return this.login;
    }

    getProductSelection()
    {
        return this.productSelection;
    }

    getCheckout()
    {
        return this.checkout;
    }

    getPayment()
    {
        return this.payment;
    }
}