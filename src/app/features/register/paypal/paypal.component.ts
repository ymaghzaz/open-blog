import { Component, OnInit, Input } from "@angular/core";
import { BehaviorSubject } from "rxjs/BehaviorSubject";

declare let paypal: any;

@Component({
  selector: "app-paypal",
  templateUrl: "./paypal.component.html",
  styleUrls: ["./paypal.component.css"]
})
export class PaypalComponent {
  public didPaypalScriptLoad: boolean = false;
  public loading: boolean = true;

  @Input() public paymentAmount: number = 0;
  @Input() public checkout: BehaviorSubject<any>;
  public paypalConfig: any = {
    env: "sandbox",
    client: {
      sandbox:
        "AQzlpRWFIib-f-NkNXWM-fAK2xCLsNNJFxI7LiYUuo4TVNIKkv-VbK2ExB6PK840NOoCwZmX6hS0zn5S",
      production: "xxxxxxxxxx"
    },
    commit: true,
    payment: (data, actions) => {
      return actions.payment.create({
        payment: {
          transactions: [{ amount: { total: "1", currency: "EUR" } }] //this.paymentAmount
        }
      });
    },
    onAuthorize: (data, actions) => {
      return actions.payment.execute().then(payment => {
        // show success page
        this.checkout.next(payment);
      });
    }
  };

  public ngAfterViewChecked(): void {
    if (!this.didPaypalScriptLoad) {
      this.loadPaypalScript().then(() => {
        paypal.Button.render(this.paypalConfig, "#paypal-button");
        this.loading = false;
      });
    }
  }

  public loadPaypalScript(): Promise<any> {
    this.didPaypalScriptLoad = true;
    return new Promise((resolve, reject) => {
      const scriptElement = document.createElement("script");
      scriptElement.src = "https://www.paypalobjects.com/api/checkout.js";
      scriptElement.onload = resolve;
      document.body.appendChild(scriptElement);
    });
  }
}
