import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
})
export class ServerComponent {
  serverID: number = 10;
  serverStatus: string = 'Ofline';

  getServerStatus() {
    return this.serverStatus;
  }
}
