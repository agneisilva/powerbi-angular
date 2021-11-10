import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
declare var powerbi: any;

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular';
  config: any;
  @ViewChild('embeddedReport')
  embeddedReport: ElementRef;

  constructor(private httpClient: HttpClient) {}
  ngOnInit() {
    this.httpClient
      .get<any>(`https://localhost:44393/v1/pipefy/gerar_token_PB`)
      .subscribe(
        (config) => {
          console.log(config);

          this.config = config;
          const model = window['powerbi-client'].models;
          // const embedConfig = {
          //   type: 'report',
          //   tokenType: model.TokenType.Embed,
          //   accessToken: config.token,
          //   embedUrl: config.embedURL,
          //   permissions: model.Permissions.All,
          //   settings: {
          //     filterPaneEnabled: true,
          //     navContentPaneEnabled: true,
          //   },
          // };
          // powerbi.embed(this.embeddedReport.nativeElement, embedConfig);
        },
        (er) => {
          console.log('Erro');
          console.log(er);
        },
        () => {
          console.log('pronto');
        }
      );
  }
}
