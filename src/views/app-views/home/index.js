import React from 'react'
import { Col, Row } from 'antd';
import { 
  BankOutlined,
	ClusterOutlined,
	FundOutlined,
	RiseOutlined
} from '@ant-design/icons';

const Home = () => {
	return (
		<div className='home'>
			<div className="welcome">
				<h2>
					<span>Haress </span>Operation Panel
				</h2> 
			</div>

			<div className="statistics">
				<Row gutter={16}>
					<Col span={8}>
						<div className="card-lg">
							<div className="header">
								<h5>Total Number of Organizations</h5>
							</div>
							<div className="info">
								<h6>12</h6>
								<BankOutlined />
							</div>
						</div>
					</Col>
					<Col span={8}>
						<div className="card-lg">
							<div className="header">
								<h5>Total Number of Tickets for all Organizations</h5>
							</div>
							<div className="info">
								<h6>1123</h6>
								<FundOutlined />
							</div>
						</div>
					</Col>
					<Col span={8}>
						<div className="card-lg">
							<div className="header">
								<h5>Total Number of Compounds</h5>
							</div>
							<div className="info">
								<h6>43</h6>
								<ClusterOutlined />
							</div>
						</div>
					</Col>
				</Row>

				<div className="card-lg subscriptions mt-4 mb-3">
					<div className="header">
						<RiseOutlined />
						<h4>Number of Subscriptions</h4>
					</div>

					<Row>
						<Col span={6}>
							<div className="item">
								<div className="desc">Platinum Package</div>
								<h6 className="number">22</h6>
							</div>
						</Col>
						<Col span={6}>
							<div className="item">
								<div className="desc">Golden Package</div>
								<h6 className="number">55</h6>
							</div>
						</Col>
						<Col span={6}>
							<div className="item">
								<div className="desc">Silver Package</div>
								<h6 className="number">9</h6>
							</div>
						</Col>
						<Col span={6}>
							<div className="item">
								<div className="desc">Free-Trial Package</div>
								<h6 className="number">21</h6>
							</div>
						</Col>
					</Row>
				</div>
			</div>
		</div>
	)
}

export default Home
