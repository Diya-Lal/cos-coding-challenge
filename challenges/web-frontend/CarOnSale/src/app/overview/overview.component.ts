import { Component, OnInit } from '@angular/core';
import { AutionService } from '../core/services/auction.service';
import { AuthenticationService } from '../core/services/authentication.service';
import { CommonService } from '../core/services/common.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  auctions = [];

  public get userId() {
    if(this.authService.getUserId()){
      return this.authService.getUserId()
    } else {
      return ''
    }
  }

  constructor(private auctionService: AutionService, private commonService: CommonService, private authService: AuthenticationService) { }

  ngOnInit(): void {
    this.getAuctions();
  }

  public getAuctions() {
    this.auctionService.getAuctions().subscribe(
      (GetAuctionsSuccessResponse: any) => {
        this.auctions = GetAuctionsSuccessResponse['items'];
      },
      (GetAuctionsErrorResponse) => {
        this.commonService.openDialog({title: 'Sorry!', message: GetAuctionsErrorResponse.message})
      }
    )
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

}
