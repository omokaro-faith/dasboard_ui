import React from 'react';

import './style.css';

const Table = () => {
	return (
		<div className="table__container">
			<table className="customers">
				<thead>
					<tr>
						<th>#</th>
						<th>BL Number</th>
						<th>Trip ID</th>
						<th>Container Number</th>
						<th>Status</th>
						<th>Pick Up Date</th>
						<th>Driver</th>
						<th>Plate Number</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>1</td>
						<td>MRKU4631800</td>
						<td>NFD77FSNKS</td>
						<td>97873893904487</td>
						<td>
							<div className="circle" />
							On Trip
						</td>
						<td>16 - 06- 2020</td>
						<td>Harold Simmons</td>
						<td>EKY775DE</td>
					</tr>
					<tr>
						<td>2</td>
						<td>MRKU4631800</td>
						<td>NFD77FSNKS</td>
						<td>97873893904487</td>
						<td>
							<div className="circle" style={{ background: 'purple' }} />
							Loading
						</td>
						<td>16 - 06- 2020</td>
						<td>Harold Simmons</td>
						<td>EKY775DE</td>
					</tr>
					<tr>
						<td>3</td>
						<td>MRKU4631800</td>
						<td>NFD77FSNKS</td>
						<td>97873893904487</td>
						<td>
							<div className="circle" style={{ background: 'yellow' }} />
							Enroute to Pickup
						</td>
						<td>16 - 06- 2020</td>
						<td>Harold Simmons</td>
						<td>EKY775DE</td>
					</tr>
					<tr>
						<td>4</td>
						<td>MRKU4631800</td>
						<td>NFD77FSNKS</td>
						<td>97873893904487</td>
						<td>
							<div className="circle" style={{ background: 'red' }} />
							Breakdown
						</td>
						<td>16 - 06- 2020</td>
						<td>Harold Simmons</td>
						<td>EKY775DE</td>
					</tr>
					<tr>
						<td>5</td>
						<td>MRKU4631800</td>
						<td>NFD77FSNKS</td>
						<td>97873893904487</td>
						<td>
							<div className="circle" style={{ background: 'green' }} />
							Delivered
						</td>
						<td>16 - 06- 2020</td>
						<td>Harold Simmons</td>
						<td>EKY775DE</td>
					</tr>
					<tr>
						<td>6</td>
						<td>MRKU4631800</td>
						<td>NFD77FSNKS</td>
						<td>97873893904487</td>
						<td>
							<div className="circle" style={{ background: 'green' }} />
							Delivered
						</td>
						<td>16 - 06- 2020</td>
						<td>Harold Simmons</td>
						<td>EKY775DE</td>
					</tr>
					<tr>
						<td>7</td>
						<td>MRKU4631800</td>
						<td>NFD77FSNKS</td>
						<td>97873893904487</td>
						<td>
							<div className="circle" style={{ background: 'green' }} />
							Delivered
						</td>
						<td>16 - 06- 2020</td>
						<td>Harold Simmons</td>
						<td>EKY775DE</td>
					</tr>
					<tr>
						<td>8</td>
						<td>MRKU4631800</td>
						<td>NFD77FSNKS</td>
						<td>97873893904487</td>
						<td>
							<div className="circle" style={{ background: 'green' }} />
							Delivered
						</td>
						<td>16 - 06- 2020</td>
						<td>Harold Simmons</td>
						<td>EKY775DE</td>
					</tr>
					<tr>
						<td>9</td>
						<td>MRKU4631800</td>
						<td>NFD77FSNKS</td>
						<td>97873893904487</td>
						<td>
							<div className="circle" style={{ background: 'green' }} />
							Delivered
						</td>
						<td>16 - 06- 2020</td>
						<td>Harold Simmons</td>
						<td>EKY775DE</td>
					</tr>
					<tr>
						<td>10</td>
						<td>MRKU4631800</td>
						<td>NFD77FSNKS</td>
						<td>97873893904487</td>
						<td>
							<div className="circle" style={{ background: 'green' }} />
							Delivered
						</td>
						<td>16 - 06- 2020</td>
						<td>Harold Simmons</td>
						<td>EKY775DE</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default Table;
