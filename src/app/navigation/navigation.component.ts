import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-navigation",
  templateUrl: "./navigation.component.html",
  styleUrls: ["./navigation.component.css"]
})
export class NavigationComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) {}

  onAddWhipround() {
    this.router.navigate([{ outlets: { new: "new-whip" } }], { relativeTo: this.route });
  }
  ngOnInit(): void {}
}
