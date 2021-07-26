import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'sm-next-page',
  templateUrl: './next-page.component.html',
  styleUrls: ['./next-page.component.css']
})
export class NextPageComponent implements OnInit {
  id : number | undefined;
  value = "put some value"
  constructor(private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
  }

  onClick($event): void{
    debugger;
    console.log("Hello");
    this.router.navigate(["/"]);
  }

}
