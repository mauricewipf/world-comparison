import { HttpModule, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DensityController } from './controllers/density/density.controller';
import { CountryService } from './services/country/country.service';

@Module({
  imports: [
    HttpModule,
  ],
  controllers: [AppController, DensityController],
  providers: [AppService, CountryService],
})
export class AppModule {
}
