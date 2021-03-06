import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { ReqDashboardComponent } from "./req-dashboard/req-dashboard.component";
import { RequisitionaddComponent } from './requisitionadd/requisitionadd.component';
import { AddskillComponent } from './addskill/addskill.component';
import { AddcompetencyComponent } from './addcompetency/addcompetency.component';
import { LoginComponent } from './login/login.component';
import { AddeducationComponent } from './addeducation/addeducation.component';
import { LogoutComponent } from './logout/logout.component';
import { CloneComponent } from './clone/clone.component';
import { PublishComponent } from './publish/publish.component';
import { UnpublishComponent } from './unpublish/unpublish.component';
import { CvuploadComponent } from './cvupload/cvupload.component';
import { ManageapplicationComponent } from './manageapplication/manageapplication.component';
import { ScreeningComponent } from './screening/screening.component';
import { OfferComponent } from './offer/offer.component';
import { NothiredComponent } from './nothired/nothired.component';
import { SubstageComponent } from './substage/substage.component';
import { ApplicationinfoComponent } from './applicationinfo/applicationinfo.component'
import { PositionsComponent } from './positions/positions.component'
import { ReqcvlogsComponent } from './reqcvlogs/reqcvlogs.component';
import { ClientregComponent } from './clientreg/clientreg.component';

const routes: Routes = [
{
  path: "",
  component: LoginComponent
},
{
  path: "header",
  component: HeaderComponent
},
{
  path: "req-dashboard/:status",
  component: ReqDashboardComponent
},
{
  path: "requisitionadd/:id",
  component: RequisitionaddComponent
},
{
  path: "addskill",
  component: AddskillComponent
},
{
  path: "addcompetency",
  component: AddcompetencyComponent
},
{
  path: "addeducation",
  component: AddeducationComponent
},
{
  path: "logout",
  component: LogoutComponent
},
{
  path: "clone/:id",
  component: CloneComponent
},
{
  path: "publish/:id",
  component: PublishComponent
},
{
  path: "unpublish/:id",
  component: UnpublishComponent
},
{
  path: "cvupload/:id",
  component: CvuploadComponent
},
{
  path: "manage/:id/:stage",
  component: ManageapplicationComponent
},
{
  path: "screen/:id",
  component: ScreeningComponent
},
{
  path: "offer/:id",
  component: OfferComponent
},
{
  path: "nothired/:id",
  component: NothiredComponent
},
{
  path: "substage/:id",
  component: SubstageComponent
},
{
  path: "applicationinfo/:rid/:cid/:aid",
  component: ApplicationinfoComponent
},
{
  path: "position/:id",
  component: PositionsComponent
},
{
  path: "reqcvlog/:id",
  component: ReqcvlogsComponent
},
{
  path: "clientreg",
  component: ClientregComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
