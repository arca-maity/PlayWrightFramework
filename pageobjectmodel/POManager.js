import { Checkout } from "../pageobjectmodel/CheckOut.js";
import { Login } from "../pageobjectmodel/login.js";
import { Payment } from "../pageobjectmodel/Payment.js";
import { ProductSelection } from "../pageobjectmodel/ProductSelection.js";

export class POManager
{
    constructor(page)
    {
        this.login = new Login(page);
        this.productSelection = new ProductSelection(page);
        this.checkout = new Checkout(page);
        this.payment = new Payment(page);
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