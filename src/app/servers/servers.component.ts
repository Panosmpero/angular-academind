import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // selector: "[app-servers]",
  // selector: ".app-servers",
  templateUrl: './servers.component.html',
  // template: `
  //   <app-server></app-server>
  //   <app-server></app-server>
  // `,
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created';
  serverName = 'Test server';
  username = '';
  serverCreated = false;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {}

  onCreateServer() {
    this.serverCreated = true;
    this.serverCreationStatus = `Server ${this.serverName} was created!`;
  }

  onUpdateServerName(e: Event) {
    console.log(e);
    this.serverName = (<HTMLInputElement>e.target).value;
  }
}
