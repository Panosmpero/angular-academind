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
  allowNewServer: boolean = false;
  serverCreationStatus: string = 'No server was created';
  serverName: string = 'Test server';
  username: string = '';
  serverCreated: boolean = false;
  servers: string[] = ['Testserver', 'Testserver 2'];
  showSecret: boolean = true;
  clicks = [];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {}

  onCreateServer() {
    this.servers.push(this.serverName);
    this.serverCreated = true;
    this.serverCreationStatus = `Server ${this.serverName} was created!`;
  }

  onUpdateServerName(e: Event) {
    console.log(e);
    this.serverName = (<HTMLInputElement>e.target).value;
  }

  toggleSecret() {
    this.showSecret = !this.showSecret;
    const newDate = new Date().toISOString();
    this.clicks.push(newDate);
  }
}
