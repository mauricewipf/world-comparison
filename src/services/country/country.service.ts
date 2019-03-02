import { HttpService, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { AxiosResponse } from 'axios';
import { CountryDto } from './country-dto';

@Injectable()
export class CountryService {
  constructor(private readonly httpService: HttpService) {
  }

  getCountry(country: string): Observable<AxiosResponse<CountryDto>> {
    return this.httpService.get(`https://restcountries.eu/rest/v2/name/${country}`);
  }

}
