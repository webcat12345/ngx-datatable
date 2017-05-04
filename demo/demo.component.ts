import { Component } from '@angular/core';

let gettingStarted = require('./getting-started.md');

@Component({
  selector: 'app',
  template: `
    <main class="bd-pageheader">
      <div class="container">
        <h1>ngx-datatable</h1>
        <p>Native Angular directives for Table</p>
        <a class="btn btn-primary" href="https://github.com/webcat12345/ngx-datatable">View on GitHub</a>
        <div class="row">
         <div class="col-lg-1"><iframe src="https://ghbtns.com/github-btn.html?user=webcat12345&repo=ngx-datatable&type=star&count=true" frameborder="0" scrolling="0" width="170px" height="20px"></iframe></div>
          <div class="col-lg-1"><iframe src="https://ghbtns.com/github-btn.html?user=webcat12345&repo=ngx-datatable&type=fork&count=true" frameborder="0" scrolling="0" width="170px" height="20px"></iframe></div>
        </div>
      </div>
    </main>
  
    <div class="container">
      <section id="getting-started">${gettingStarted}</section>
  
      <table-section class="col-md-12"></table-section>
    </div>
  
    <footer class="footer">
      <div class="container">
        <p class="text-muted text-center"></p>
      </div>
    </footer>
  `
})
export class DemoComponent {
}
