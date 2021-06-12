import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  serverElements = [
    { type: 'server', name: 'Testserver', content: 'Just a test!' },
  ];

  onServerAdded(serverData: { serverName: string; serverContent: string }) {
    const { serverName, serverContent } = serverData;

    this.serverElements.push({
      type: 'server',
      name: serverName,
      content: serverContent,
    });
  }

  onBlueprintAdded(blueprintData: {
    serverName: string;
    serverContent: string;
  }) {
    const { serverName, serverContent } = blueprintData;

    this.serverElements.push({
      type: 'blueprint',
      name: serverName,
      content: serverContent,
    });
  }
}
