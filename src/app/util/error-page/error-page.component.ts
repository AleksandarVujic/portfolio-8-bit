import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Data, Router } from '@angular/router';

@Component({
    selector: "error-page",
    templateUrl: './error-page.component.html',
    styleUrls: ['./error-page.component.css']
})
export class ErrorPageComponent implements OnInit {
    errorMessage: string;

    constructor(private route: ActivatedRoute, private router: Router) { }

    ngOnInit() {
        this.route.data.subscribe(
            (data: Data) => { this.errorMessage = data['message'] }
        );
        setTimeout(() => {
            this.router.navigate(['']);
        }, 5000);
    }
}