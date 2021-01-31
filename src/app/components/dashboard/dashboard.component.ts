import { Component, OnChanges, OnInit } from '@angular/core';
import { DashboardBusinessLogic } from 'src/app/businessLogic/dashboardLogic';
import { SearchFilterPipe } from 'src/app/common/searchfilter.pipe';
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
  public spaceXDataYears = [];
  public spaceXData = [];
  public searchYear = "";
  public searchLaunchSuccess = "";
  public searchLandSuccess = "";
  public yearParam;
  public launchParam;
  public landParam;
  public yearItemClicked = '';
  public launchItemClicked = '';
  public landItemClicked = '';
  constructor(public dashboardBal: DashboardBusinessLogic,private route: ActivatedRoute) { }

  ngOnInit(): void {
    // this.dashboardBal.getAllSpaceData().subscribe(data => {
    //   this.spaceXData = data;
    // })
    this.spaceXData = this.dashboardBal.getData();
    this.spaceXDataYears = JSON.parse(JSON.stringify(this.spaceXData));
    this.paramUpdated();
    sessionStorage.clear();
  }

  paramUpdated() {
    this.route.queryParamMap.subscribe(queryParams => {
      let allData = JSON.parse(JSON.stringify(this.spaceXDataYears));
      if(sessionStorage.getItem('searchYear') || sessionStorage.getItem('searchLand') || 
      sessionStorage.getItem('searchLaunch')){
        this.yearItemClicked = sessionStorage.getItem('searchYear');
        this.launchItemClicked = sessionStorage.getItem('searchLaunch');
        this.landItemClicked = sessionStorage.getItem('searchLand');
        if(this.yearItemClicked) {
          allData = allData.filter(item => {
            return (item.launch_year == this.yearItemClicked)
          });
        }if(this.landItemClicked) {
          allData = allData.filter(item => {
            return (item.land_success+"" == this.landItemClicked)
          });
        }
        if(this.launchItemClicked) {
          allData = allData.filter(item => {
            return (item.launch_success+"" == this.launchItemClicked)
          });
        }
        this.spaceXData = allData;
      } else {
        this.yearItemClicked = queryParams.get("searchYear");
        this.launchItemClicked = queryParams.get("searchLaunch");
        this.landItemClicked = queryParams.get("searchLand");
        sessionStorage.setItem('searchLand',this.landItemClicked);
        sessionStorage.setItem('searchYear',this.yearItemClicked);
        sessionStorage.setItem('searchLaunch',this.launchItemClicked);
        if (this.yearItemClicked) {
          allData = allData.filter(item => {
            return (item.launch_year == this.yearItemClicked)
          });
        }
        if (this.landItemClicked) {
          allData = allData.filter(item => {
            return (item.land_success + "" == this.landItemClicked)
          });
        }
        if (this.launchItemClicked) {
          allData = allData.filter(item => {
            return (item.launch_success + "" == this.launchItemClicked)
          });
        }
        this.spaceXData = allData;
      }
    })
  }

  searchItem(searchType,searchItem) {
    if(searchType == 'launch_success_') {
      if(this.launchItemClicked == searchItem){
        sessionStorage.setItem('searchLaunch',"");
        this.launchItemClicked = "";
      }else{
        this.launchItemClicked = searchItem.toLocaleLowerCase();
        sessionStorage.setItem('searchLaunch',searchItem);
      }
      this.replaceURL();
      this.paramUpdated();
    }else if(searchType == 'launchyear_') {
      if(this.yearItemClicked == searchItem){
        this.yearItemClicked = "";
        sessionStorage.setItem('searchYear',"");
      }else{
        this.yearItemClicked = searchItem;
        sessionStorage.setItem('searchYear',searchItem);
      }
      this.replaceURL();
      this.paramUpdated();
    }else if(searchType == 'land_success_') {
      if(this.landItemClicked == searchItem){
        this.landItemClicked = "";
        sessionStorage.setItem('searchLand',"");
      }else{
        this.landItemClicked = searchItem.toLocaleLowerCase();
        sessionStorage.setItem('searchLand',searchItem);
      }
      this.replaceURL();
      this.paramUpdated();
    }
  }

  replaceURL() {
    let searchString = "";
    
    if(this.landItemClicked != "" && this.landItemClicked){
      searchString = searchString+"?searchLand="+this.landItemClicked;
    }
    
    if (this.yearItemClicked != "" && this.yearItemClicked) {
      if (searchString != "") {
        searchString = searchString+"&searchYear="+this.yearItemClicked;
      }else {
        searchString = searchString+"?searchYear="+this.yearItemClicked;
      }
    }
    
    if(this.launchItemClicked != "" && this.launchItemClicked) {
      if (searchString != "") {
        searchString = searchString+"&searchLaunch="+this.launchItemClicked;
      }else {
        searchString = searchString+"?searchLaunch="+this.launchItemClicked;
      }
    }

    window.location.replace('#/dashboard'+searchString);
  }
}