import { Component, OnInit } from '@angular/core';
import { AutionService } from '../core/services/auction.service';
import { CommonService } from '../core/services/common.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  auctions = [];

  constructor(private auctionService: AutionService, private commonService: CommonService) { }

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

}
