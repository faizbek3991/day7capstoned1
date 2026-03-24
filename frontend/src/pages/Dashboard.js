export default function Dashboard() {
  return (
    <div className="p-4">

      <div className="row g-4 mb-4">

        <div className="col-md-3">
          <div className="card p-3">
            <h6>Total Revenue</h6>
            <h3>$24,592</h3>
            <small className="text-success">+12.5%</small>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card p-3">
            <h6>Active VPS</h6>
            <h3>142</h3>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card p-3">
            <h6>CPU Load</h6>
            <div className="progress">
              <div className="progress-bar" style={{ width: "34%" }}></div>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card p-3">
            <h6>Storage</h6>
            <div className="progress">
              <div className="progress-bar bg-danger" style={{ width: "68%" }}></div>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}