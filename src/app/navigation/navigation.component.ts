import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { converterService } from "../shared/converter.service";

@Component({
  selector: "app-navigation",
  templateUrl: "./navigation.component.html",
  styleUrls: ["./navigation.component.css"]
})
export class NavigationComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute, private converter: converterService) {}

  onAddWhipround() {
    this.router.navigate(["new-whip"], { relativeTo: this.route });
  }

  onGetExchanges() {
    this.converter.getExchanges();
  }

  ngOnInit(): void {}
}
