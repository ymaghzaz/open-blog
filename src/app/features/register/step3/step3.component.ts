import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { selectorStudents, ActionSetStudents } from "../register.reducer";
import { Student } from "../models/student.model";
import { selectorUser } from "../../../core/user/user.reducer";
import { userRegisterInfos } from "../models/user.step1";
import { RegisterServiceService } from "../services/register-service.service";
import { Course } from "../models/course.model";
import { PRICE, PRICE_OPTION } from "../models/price.model";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Router } from "@angular/router";
import { validateArgCount } from "@firebase/util/dist/esm/src/validation";
@Component({
  selector: "app-step3",
  templateUrl: "./step3.component.html",
  styleUrls: ["./step3.component.css"]
})
export class Step3Component implements OnInit {
  students: Array<Student> = [];
  cours: Array<any> = [];
  user: userRegisterInfos = new userRegisterInfos();
  city: boolean = false;
  umg: boolean = false;
  priceToBeGetFromUser: number = 0;
  checkoutPaypal: BehaviorSubject<any> = new BehaviorSubject(false);
  constructor(
    private store: Store<any>,
    public registerService: RegisterServiceService,
    public router: Router
  ) {}

  ngOnInit() {
    this.store.select(selectorStudents).subscribe(students => {
      console.log("s", students);
      this.students = students;
    });

    this.store.select(selectorUser).subscribe(user => {
      this.user = user;
      this.registerService.getStudentsInfo(user).subscribe(st => {
        const students = JSON.parse(JSON.stringify(st));
        this.students = students;
        this.store.dispatch(new ActionSetStudents(students));
        this.totalPrice();
        //this.checkout("payment");
      });
    });

    this.checkoutPaypal.subscribe(payment => {
      console.log("checkoutPaypal", payment);
      if (payment) {
        this.checkout(payment);
      }
    });
  }
  public updatePriceInfo() {
    this.totalPrice();
  }
  public displayCours(student: Student) {
    let display = "";
    student.cours.map((course: Course) => {
      if (course.numberOfHours > 0) {
        display =
          display +
          " " +
          course.name +
          " " +
          course.numberOfHours.toString() +
          " h";
      }
    });
    return display;
  }
  public displayPrice(student: Student) {
    let display = this.calculPrice(student) + " EUR";
    return display;
  }

  public calculPrice(student: Student) {
    let price = 0;
    let numberOfCourse = 0;
    let numberOfsession = 0;
    student.cours.map((course: Course) => {
      if (course.numberOfHours > 0) {
        numberOfCourse++;
        numberOfsession += course.numberOfHours;
      }
    });

    if (PRICE[PRICE.length - 1].session >= numberOfsession) {
      let indexInSession = PRICE.map(x => x.session).indexOf(numberOfsession);
      price = PRICE[indexInSession].price * numberOfsession;
      if (numberOfCourse > 1) {
        price = price + PRICE[indexInSession].supplement;
      }
    } else {
      price = PRICE[PRICE.length - 1].price * numberOfsession;
    }

    return price;
  }

  public totalPrice() {
    let totalPrice = 0;
    this.students.map(student => {
      totalPrice += this.calculPrice(student);
    });

    if (!this.city) {
      totalPrice += PRICE_OPTION.city;
    }
    if (this.umg) {
      totalPrice += PRICE_OPTION.umg;
    }

    if (this.students.length > 1) {
      if (this.students[0].lastName == this.students[1].lastName) {
        totalPrice += PRICE_OPTION.familly;
      }
    }
    this.priceToBeGetFromUser = totalPrice;
    return totalPrice;
  }

  checkout(payment) {
    const paymentInfo: any = {};
    paymentInfo.userID = this.user.userID;
    paymentInfo.paymentAmount = this.priceToBeGetFromUser;
    paymentInfo.timeStamp = Date.now().toString();
    const date = new Date();
    paymentInfo.date = date.toString();
    this.registerService.checkoutUser(this.user, paymentInfo);
    this.router.navigate(["register/thanks"]);
    console.log("bravo");
  }
}
