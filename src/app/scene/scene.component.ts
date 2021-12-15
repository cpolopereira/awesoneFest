import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { Inject } from "@angular/core";
import { DOCUMENT } from "@angular/common";

@Component({
  selector: "wec-scene",
  templateUrl: "./scene.component.html",
  encapsulation: ViewEncapsulation.None,
})
export class SceneComponent implements OnInit {
  el: any;
  constructor(@Inject(DOCUMENT) document) {
    document.getElementById("el");
  }
  buildings = [
    {
      name: "Getonbrd",
      logo: "src: https://pbs.twimg.com/profile_images/1124306467518021632/lhRe7w22_400x400.png;",
    },
    {
      name: "Getonbrd",
      logo: "src: https://pbs.twimg.com/profile_images/1124306467518021632/lhRe7w22_400x400.png;",
    },
    {
      name: "Getonbrd",
      logo: "src: https://pbs.twimg.com/profile_images/1124306467518021632/lhRe7w22_400x400.png;",
    },
    {
      name: "Getonbrd",
      logo: "src: https://pbs.twimg.com/profile_images/1124306467518021632/lhRe7w22_400x400.png;",
    },
    {
      name: "Getonbrd",
      logo: "https://pbs.twimg.com/profile_images/1124306467518021632/lhRe7w22_400x400.png;",
    },
    {
      name: "Getonbrd",
      logo: "https://pbs.twimg.com/profile_images/1124306467518021632/lhRe7w22_400x400.png;",
    },
    {
      name: "Getonbrd",
      logo: "https://pbs.twimg.com/profile_images/1124306467518021632/lhRe7w22_400x400.png;",
    },
    {
      name: "Getonbrd",
      logo: "https://pbs.twimg.com/profile_images/1124306467518021632/lhRe7w22_400x400.png;",
    },
    {
      name: "Getonbrd",
      logo: "https://pbs.twimg.com/profile_images/1124306467518021632/lhRe7w22_400x400.png;",
    },
    {
      name: "Getonbrd",
      logo: "https://pbs.twimg.com/profile_images/1124306467518021632/lhRe7w22_400x400.png;",
    },
    {
      name: "Getonbrd",
      logo: "https://pbs.twimg.com/profile_images/1124306467518021632/lhRe7w22_400x400.png;",
    },
    {
      name: "Getonbrd",
      logo: "https://pbs.twimg.com/profile_images/1124306467518021632/lhRe7w22_400x400.png;",
    },
    {
      name: "Getonbrd",
      logo: "https://pbs.twimg.com/profile_images/1124306467518021632/lhRe7w22_400x400.png;",
    },
    {
      name: "Getonbrd",
      logo: "https://pbs.twimg.com/profile_images/1124306467518021632/lhRe7w22_400x400.png;",
    },
    {
      name: "Getonbrd",
      logo: "https://pbs.twimg.com/profile_images/1124306467518021632/lhRe7w22_400x400.png;",
    },
    {
      name: "Getonbrd",
      logo: "https://pbs.twimg.com/profile_images/1124306467518021632/lhRe7w22_400x400.png;",
    },
    {
      name: "Getonbrd",
      logo: "https://pbs.twimg.com/profile_images/1124306467518021632/lhRe7w22_400x400.png;",
    },
    {
      name: "Getonbrd",
      logo: "https://pbs.twimg.com/profile_images/1124306467518021632/lhRe7w22_400x400.png;",
    },
    {
      name: "Getonbrd",
      logo: "https://pbs.twimg.com/profile_images/1124306467518021632/lhRe7w22_400x400.png;",
    },
    {
      name: "Getonbrd",
      logo: "https://pbs.twimg.com/profile_images/1124306467518021632/lhRe7w22_400x400.png;",
    },
    {
      name: "Getonbrd",
      logo: "https://pbs.twimg.com/profile_images/1124306467518021632/lhRe7w22_400x400.png;",
    },
    {
      name: "Getonbrd",
      logo: "https://pbs.twimg.com/profile_images/1124306467518021632/lhRe7w22_400x400.png;",
    },
    {
      name: "Getonbrd",
      logo: "https://pbs.twimg.com/profile_images/1124306467518021632/lhRe7w22_400x400.png;",
    },
    {
      name: "Getonbrd",
      logo: "https://pbs.twimg.com/profile_images/1124306467518021632/lhRe7w22_400x400.png;",
    },
    {
      name: "Getonbrd",
      logo: "https://pbs.twimg.com/profile_images/1124306467518021632/lhRe7w22_400x400.png;",
    },
    {
      name: "Getonbrd",
      logo: "https://pbs.twimg.com/profile_images/1124306467518021632/lhRe7w22_400x400.png;",
    },
    {
      name: "Getonbrd",
      logo: "https://pbs.twimg.com/profile_images/1124306467518021632/lhRe7w22_400x400.png;",
    },
  ];

  vacantes = [
    {
      name: "Test___________1",
      description: "Test______description",
    },
  ];

  ngOnInit() {
    document.querySelector("a-scene").addEventListener("loaded", (el) => {
      let z = -8;
      let x = 0;
      this.buildings.forEach((element, i) => {
        // CIRCLE
        let circle = document.querySelector("#circleBuilding-" + i);
        circle.setAttribute("position", x + " 5 " + z);

        // BUILDING (RECTANGLE)
        let building = document.querySelector("#boxGeometryBuilding-" + i);
        building.setAttribute("position", x + " 1.0 " + z);

        // TITULO (NOMBRE DE EMPRESA)
        let title = document.querySelector("#title-" + i);
        title.setAttribute("position", x - 0.5 + " 5.8 " + z);
        title.setAttribute("value", element.name);
        title.setAttribute(
          "light",
          "type: directional; color: #1597E5; intensity: 0.6"
        );

        if (z > -28) {
          z -= 5;
        } else {
          z = -8;
          x += 10;

          z -= 5;
        }
      });
    });
  }
}
