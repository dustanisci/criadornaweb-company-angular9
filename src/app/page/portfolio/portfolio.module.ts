import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioComponent } from './portfolio.component';
import { GalleryModule } from '@ks89/angular-modal-gallery';
import { ModalComponent } from 'src/app/shared/component/modal/modal.component';
import { PipeModule } from 'src/app/shared/pipe/pipe.module';
import { RouterModule } from '@angular/router';
import { PortfolioService } from './portfolio.service';
import { FlexLayoutModule, FlexModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { TrianglesModule } from 'src/app/shared/component/triangles/triangles.module';
import { BannerModule } from 'src/app/shared/component/banner/banner.module';

const portfolioRoute = [
  { path: '', component: PortfolioComponent }
];

@NgModule({
  declarations: [
    PortfolioComponent,
    ModalComponent,
  ],
  imports: [
    CommonModule,
    PipeModule,
    GalleryModule.forRoot(),
    FlexLayoutModule,
    FlexModule,
    RouterModule.forChild(portfolioRoute),
    HttpClientModule,
    TrianglesModule,
    BannerModule
  ],
  providers: [
    PortfolioService
  ]
})
export class PortfolioModule { }
