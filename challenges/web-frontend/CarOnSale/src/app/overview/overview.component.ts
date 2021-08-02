import { Component, OnDestroy, OnInit } from '@angular/core';
import { AutionService } from '../core/services/auction.service';
import { AuthenticationService } from '../core/services/authentication.service';
import { CommonService } from '../core/services/common.service';
import { timer, Subject, of } from 'rxjs';
import { catchError, switchMap, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit, OnDestroy {

  auctions = [];

  refreshTimer: any;

  stopRefresh: Subject<void> = new Subject();

  public get userId() {
    if(this.authService.getUserId()){
      return this.authService.getUserId()
    } else {
      return ''
    }
  }

  constructor(private auctionService: AutionService, private commonService: CommonService, private authService: AuthenticationService) { }

  ngOnInit(): void {
    timer(0, 20000)
    .pipe(
      takeUntil(this.stopRefresh),
      switchMap(() => this.auctionService.getAuctions()),
    )
    .subscribe(
      (data:any) => {
      this.auctions = data.items;
    },
      (error) => {
        this.commonService.openDialog({title: 'Sorry!', message: error.message});
    }
    );
 }

  public getImageUrl(autionItem: any) {
    return autionItem.associatedVehicle.vehicleImages[0].url;
  }

  public getRemainingTime(totalSeconds: number) {
    const hours = Math.floor(totalSeconds/3600);
    const minutes = Math.floor((totalSeconds - (hours * 3600)) / 60);  
    const seconds = totalSeconds - (hours * 3600) - (minutes * 60);
    return `${hours}h : ${minutes}m : ${seconds}s`
  }

  public trackByFunction(index: number, item: any) {
    return item.id;
  }

  ngOnDestroy() {
    this.stopRefresh.next();
  }

}
