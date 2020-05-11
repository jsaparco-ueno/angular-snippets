import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
    templateUrl: './two-interval-poll.component.html'
})
export class TwoIntervalPollComponent {
    public isValidated = false;
    public pollCount = 0;
    public done = 0;
    private isVerifiedCheckBox = false;
    
    isVerified = new Observable(subscriber => {
        console.log("subbed to isVerified")
        
        subscriber.next(this.isVerifiedCheckBox);
    });

    public setValidated() {
        this.isValidated = true;
    }

    public doPoll() {
        // var subscription = this.isVerified.subscribe(result => {
        this.isVerified.subscribe(result => {
            if (result) {
                this.setValidated();
            }
            else {
                setTimeout(() => {
                    this.doPoll();
                }, 3000);    
            }
        });
        // subscription.unsubscribe();
        // console.log("unsubbed to isVerified")
        this.pollCount++;
    }

    public startPolling() {
        this.doPoll();
    }
}