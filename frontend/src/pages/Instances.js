export default function Instances() {
  return (
    <div className="p-4">

      <div className="card">
        <div className="card-header">Active Instances</div>

        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Status</th>
              <th>Specs</th>
              <th>IP</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>web-server-01</td>
              <td><span className="badge bg-success">Running</span></td>
              <td>4vCPU / 8GB</td>
              <td>192.168.1.10</td>
            </tr>
          </tbody>

        </table>
      </div>

    </div>
  );
}