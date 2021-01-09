
import "./clock.css";

function Clock() {
  return (
    <body>
    <div className="DigitalClock">
        <div id="clock" class="container-fluid">
          <h2>The Time is :</h2>
          <div id="time" class="row">
            <div class="col-lg-3 col-sm-3 col-3">
              <span id="hour">00</span>
              <span>Hours</span>
            </div>
            <div class="col-lg-3 col-sm-3 col-3">
              <span id="minutes">00</span>
              <span>Minutes</span>
            </div>
            <div class="col-lg-3 col-sm-3 col-3">
              <span id="seconds">00</span>
              <span>Seconds</span>
            </div>
            <div class="col-lg-3 col-sm-3 col-3 ampm">
              <span id="ampm">AM</span>
            </div>
          </div>
        </div>
    </div>
    </body>
  );
}

export default Clock;
