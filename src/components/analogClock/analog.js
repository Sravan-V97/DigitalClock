import React from "react";
import "./analog.css";
import ReactDOM from "react-dom";
import Sketch from "react-p5";
import backg from "../../image/analogclock.png";

function Analog() {
  return (
    <body>
      <div class="AnalogClock">
        <Sketch
          setup={(p5, parent) => {
            p5.createCanvas(400, 400).parent(parent);
            p5.angleMode("degrees");
          }}
          draw={(p5) => {
            p5.background(64, 64, 64);
            p5.translate(200, 200);
            p5.rotate(-90);

            let hr = p5.hour();
            let mn = p5.minute();
            let sc = p5.second();

            let radius = p5.min(400, 400) / 3;
            var numPoints = 60;
            var angle = 360/ numPoints;
            let x, y;
            var secondsRadius = radius * 0.9;

            p5.strokeWeight(5);
            p5.stroke(225);
            p5.beginShape(p5.POINTS);
            var i = 0;
            while (i < numPoints) {
              x = p5.cos(angle * i) * secondsRadius;
              y = p5.sin(angle * i) * secondsRadius;
              p5.vertex(x, y);
              i++;
            }
            p5.endShape();

            p5.fill(255);
            p5.textSize(16);
            p5.strokeWeight(8);
            x = p5.cos(360) * secondsRadius -2;
            y = p5.sin(360) * secondsRadius +1;
            p5.text(".", x, y);
            
            x = p5.cos(90) * secondsRadius -2;
            y = p5.sin(90) * secondsRadius +1;
            p5.text(".", x, y);

            x = p5.cos(180) * secondsRadius -2;
            y = p5.sin(180) * secondsRadius +1;
            p5.text(".", x, y);

            x = p5.cos(270) * secondsRadius -2;
            y = p5.sin(270) * secondsRadius +1;
            p5.text(".", x, y);

            p5.strokeWeight(10);
            p5.stroke(255, 43, 117);
            p5.noFill();
            let secondAngle = p5.map(sc, 0, 60, 0, 360);
            p5.arc(0, 0, 320, 320, 0, secondAngle);

            p5.stroke(33, 251, 255);
            let minuteAngle = p5.map(mn, 0, 60, 0, 360);
            p5.arc(0, 0, 295, 295, 0, minuteAngle);

            p5.stroke(59, 255, 69);
            let hourAngle = p5.map(hr % 12, 0, 12, 0, 360);
            p5.arc(0, 0, 270, 270, 0, hourAngle);

            p5.push();
            p5.rotate(secondAngle);
            p5.stroke(255, 43, 117);
            p5.line(0, 0, 100, 0);
            p5.pop();

            p5.push();
            p5.rotate(minuteAngle);
            p5.stroke(33, 251, 255);
            p5.line(0, 0, 75, 0);
            p5.pop();

            p5.push();
            p5.rotate(hourAngle);
            p5.stroke(59, 255, 69);
            p5.line(0, 0, 50, 0);
            p5.pop();

            p5.stroke(255);
            p5.point(0, 0);

            //   p5.fill(255);
            //   p5.noStroke();
            //   p5.text(hr + ':' + mn + ':' + sc, 10, 200);
          }}
        />
      </div>
    </body>
  );
}

export default Analog;
