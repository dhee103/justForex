import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-graphs',
  templateUrl: './graphs.component.html',
  styleUrls: ['./graphs.component.css']
})
export class GraphsComponent implements AfterViewInit {

  constructor() { }

  ngAfterViewInit() {
    var str_Elemenr =
    '<script type="text/javascript"> console.log("hi") </script>'

    var nodeElement =   this.createDiv("div",str_Elemenr);
    document.body.appendChild(nodeElement);
  }

  createDiv(node_name,textElement) {
          var _nodeElement = document.createElement(node_name);
          _nodeElement.innerHTML = textElement;
          return _nodeElement;
}

}
