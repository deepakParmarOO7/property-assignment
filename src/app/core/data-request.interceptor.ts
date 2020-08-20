import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class DataRequestInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const modified = request.clone(
      {
        setHeaders: {
          Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImE4YzQ4NDBlMWMyYTdjYjk5MjI5YzY0NDVjY2JmNjYxZjU5YzlmOWFmM2Q2MDUwNWRlM2ZiMzRkN2EyZmY4ZmY2MjRjM2E5Zjg0ODAxZDU2In0.eyJhdWQiOiIxIiwianRpIjoiYThjNDg0MGUxYzJhN2NiOTkyMjljNjQ0NWNjYmY2NjFmNTljOWY5YWYzZDYwNTA1ZGUzZmIzNGQ3YTJmZjhmZjYyNGMzYTlmODQ4MDFkNTYiLCJpYXQiOjE1OTY4MDE2MjIsIm5iZiI6MTU5NjgwMTYyMiwiZXhwIjoxNjI4MzM3NjIyLCJzdWIiOiIyOTciLCJzY29wZXMiOltdfQ.KZK_C8_31QASqTdHT_cQIIoiPdcawpTvAExWKNf-wOrK81YFXWvhTcd29aBbGBKHQGGBCVLvdwIWNzDyjc7WJySHL1QyatIY4OZ-NnMFVooeaV9fHcWwVjGLlyatb-9a-L0CKWJWnMyhDMbD8pfu1Tm65bbClUowvFW0lb2Nh34IshH3t7xvnfp-L7F2F_dQAUmoukLgx2HfTaArt_5RPb2LFB-FrXROMb69cdlsmWRnULK_IADAJapfDPw8rVr2I6tmsE3waB7uAODvk5ofi1fe-clPRZDvSdLDkNs9I8-ElLvr8F_C8ZX5ya6sg3_AWqDT8ml4lKE6Dj0odnvkcIBmaDbvMgc2o85SWk-bW73rdik8BBVR1a1NqUdlbE13oFvOF-l52sY08_ECzQzlHGiOVGV0mctziDOYhJPDadEr95ul8Ty6uHyH74gzpG-FMBEGyclABSTZVVh6bDU4vsLaYijaohyTaamQ25iNG_o6ta4mGIqbR5r6hoBNg_xmMiloXsDZQP9OkfaHjcEeedLT-iMfdKHXnkbqecOVEK_Qa29eMpMZzaj5u9Uvg-VNFZ8FPR1gCsHOEv7KGG0BR-iHBPctYDsdOay-QZ_lET1W8oKA5mwKkM8BZbgatwmikSGr2Md0EIy60AAoOCVhhaP26PPmeKX6K6SJkxC_BPw',
          'Content-Type': 'application/json'
        }
      });
    return next.handle(modified);
  }
}
