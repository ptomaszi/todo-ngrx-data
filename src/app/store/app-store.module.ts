import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../../environments/environment';

import { entityConfig } from './entity-metadata';
import { DefaultDataServiceConfig, NgrxDataModule } from 'ngrx-data';

const defaultDataServiceConfig: DefaultDataServiceConfig = {
  root: 'api'
};

@NgModule({
  imports: [
    StoreModule.forRoot({}),
    NgrxDataModule.forRoot(entityConfig),
    EffectsModule.forRoot([]),
    environment.production ? [] : StoreDevtoolsModule.instrument()
  ],
  providers: [
    { provide: DefaultDataServiceConfig, useValue: defaultDataServiceConfig }
  ]
})
export class AppStoreModule {}
