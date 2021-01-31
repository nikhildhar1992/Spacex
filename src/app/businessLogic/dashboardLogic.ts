import { Injectable } from '@angular/core';
import { DashboardService } from '../service/dashboardService';

@Injectable()

export class DashboardBusinessLogic {
    constructor(public dashboardService: DashboardService) { }

    public getAllSpaceData() {
        return this.dashboardService.getAllSpaceData();
    }

    getData() {
       return [
           { "flight_number": 1, "mission_name": "FalconSat", "mission_id": [], "upcoming": false, 
       "launch_year": "2006", "launch_date_unix": 1143239400, "launch_date_utc": "2006-03-24T22:30:00.000Z", 
       "launch_date_local": "2006-03-25T10:30:00+12:00", "is_tentative": false, "tentative_max_precision": "hour", 
       "tbd": false, "launch_window": 0,
       "ships": [], "telemetry": { "flight_club": null }, "launch_success": false, "land_success": false, 
       "launch_failure_details": { "time": 33, "altitude": null, "reason": "merlin engine failure" }, 
       "links": { "mission_patch": "https://images2.imgbox.com/40/e3/GypSkayF_o.png", 
       "mission_patch_small": "https://images2.imgbox.com/3c/0e/T8iJcSN3_o.png"}}, 
       
       { "flight_number": 2, "mission_name": "DemoSat", "mission_id": [], "launch_year": "2007", 
       "launch_date_unix": 1174439400, "launch_date_utc": "2007-03-21T01:10:00.000Z", 
       "launch_date_local": "2007-03-21T13:10:00+12:00", "is_tentative": false, "tentative_max_precision": "hour", 
       "tbd": false, "launch_window": 0, "ships": [], "launch_success": false,"land_success": true, 
       "links": { "mission_patch": "https://images2.imgbox.com/be/e7/iNqsqVYM_o.png", 
       "mission_patch_small": "https://images2.imgbox.com/4f/e3/I0lkuJ2e_o.png"}}, 
    
       { "flight_number": 3, "mission_name": "Trailblazer", "mission_id": [], "launch_year": "2008", 
       "launch_date_unix": 1174439400, "launch_date_utc": "2007-03-21T01:10:00.000Z", 
       "launch_date_local": "2007-03-21T13:10:00+12:00", "is_tentative": false, "tentative_max_precision": "hour", 
       "tbd": false, "launch_window": 0, "ships": [], "launch_success": true,"land_success": false, 
       "links": { "mission_patch":"https://images2.imgbox.com/4b/bd/d8UxLh4q_o.png",
       "mission_patch_small":"https://images2.imgbox.com/3d/86/cnu0pan8_o.png"}},
    
       { "flight_number": 4, "mission_name": "RatSat", "mission_id": [], "launch_year": "2009", 
       "launch_date_unix": 1174439400, "launch_date_utc": "2007-03-21T01:10:00.000Z", 
       "launch_date_local": "2007-03-21T13:10:00+12:00", "is_tentative": false, "tentative_max_precision": "hour", 
       "tbd": false, "launch_window": 0, "ships": [], "launch_success": true,"land_success": false, 
       "links": { "mission_patch":"https://images2.imgbox.com/e0/a7/FNjvKlXW_o.png",
       "mission_patch_small":"https://images2.imgbox.com/e9/c9/T8CfiSYb_o.png"}},
    
       { "flight_number": 5, "mission_name": "RazakSat", "mission_id": [], "upcoming": false, 
       "launch_year": "2010", "launch_date_unix": 1143239400, "launch_date_utc": "2006-03-24T22:30:00.000Z", 
       "launch_date_local": "2006-03-25T10:30:00+12:00", "is_tentative": false, "tentative_max_precision": "hour", 
       "tbd": false, "launch_window": 0,
       "ships": [], "telemetry": { "flight_club": null }, "launch_success": true, "land_success": true, 
       "launch_failure_details": { "time": 33, "altitude": null, "reason": "merlin engine failure" }, 
       "links": { "mission_patch":"https://images2.imgbox.com/8d/fc/0qdZMWWx_o.png",
       "mission_patch_small":"https://images2.imgbox.com/a7/ba/NBZSw3Ho_o.png"}}, 
       
       { "flight_number": 6, "mission_name": "Falcon 9 Test Flight", "mission_id": ["EE86F74"], "launch_year": "2011", 
       "launch_date_unix": 1174439400, "launch_date_utc": "2007-03-21T01:10:00.000Z", 
       "launch_date_local": "2007-03-21T13:10:00+12:00", "is_tentative": false, "tentative_max_precision": "hour", 
       "tbd": false, "launch_window": 0, "ships": [], "launch_success": false,"land_success": false, 
       "links": { "mission_patch":"https://images2.imgbox.com/d6/12/yxne8mMD_o.png",
       "mission_patch_small":"https://images2.imgbox.com/5c/36/gbDKf6Y7_o.png"}}, 
    
       { "flight_number": 7, "mission_name": "COTS 1", "mission_id": [], "launch_year": "2012", 
       "launch_date_unix": 1174439400, "launch_date_utc": "2007-03-21T01:10:00.000Z", 
       "launch_date_local": "2007-03-21T13:10:00+12:00", "is_tentative": false, "tentative_max_precision": "hour", 
       "tbd": false, "launch_window": 0, "ships": [], "launch_success": true,"land_success": true, 
       "links": { "mission_patch":"https://images2.imgbox.com/00/2f/FhtEd0nB_o.png",
       "mission_patch_small":"https://images2.imgbox.com/d9/3e/FfrN88ry_o.png"}},
    
       { "flight_number": 8, "mission_name": "COTS 2", "mission_id": ["EE86F74"], "launch_year": "2013", 
       "launch_date_unix": 1174439400, "launch_date_utc": "2007-03-21T01:10:00.000Z", 
       "launch_date_local": "2007-03-21T13:10:00+12:00", "is_tentative": false, "tentative_max_precision": "hour", 
       "tbd": false, "launch_window": 0, "ships": [], "launch_success": false,"land_success": true, 
       "links": { "mission_patch":"https://images2.imgbox.com/2b/8e/MYyHbnd2_o.png",
       "mission_patch_small":"https://images2.imgbox.com/fc/7a/r9ITwL12_o.png"}}]
    }
}