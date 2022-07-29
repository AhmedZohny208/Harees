import React from 'react'
import { Col, Row } from 'antd';
import BreadcrumbC from './Breadcrumb'
import {ReactComponent as Tickets} from '../../../components/shared-components/svgs/tickets.svg';
import {ReactComponent as Teams} from '../../../components/shared-components/svgs/teams.svg';
import TicketsGraph from './TicketsGraph';

export default function Statistics() {
  return (
    <div className='statistics'>
      <BreadcrumbC />

      <div className="card-lg mt-4 mb-3">
        <div className="header">
          <Tickets />
          <h4>Tickets</h4>
        </div>

        <Row>
          <Col span={4}>
            <div className="item">
              <div className="desc">Total</div>
              <h6 className="number">2000</h6>
            </div>
          </Col>
          <Col span={4}>
            <div className="item danger">
              <div className="desc">Overdue</div>
              <h6 className="number">80</h6>
            </div>
          </Col>
          <Col span={4}>
            <div className="item">
              <div className="desc">Assigned</div>
              <h6 className="number">80</h6>
            </div>
          </Col>
          <Col span={4}>
            <div className="item">
              <div className="desc">In progress</div>
              <h6 className="number">2000</h6>
            </div>
          </Col>
          <Col span={4}>
            <div className="item">
              <div className="desc">Complete</div>
              <h6 className="number">2000</h6>
            </div>
          </Col>
          <Col span={4}>
            <div className="item">
              <div className="desc">Archived</div>
              <h6 className="number">2000</h6>
            </div>
          </Col>
        </Row>
      </div>

      <Row gutter={16} className='mb-3'>
        <Col span={8}>
          <div className="card-lg">
            <div className="header">
              <Teams />
              <h4>Teams</h4>
            </div>
            <Row>
              <Col span={12}>
                <div className="item">
                  <div className="desc">Teams</div>
                  <h6 className="number">12</h6>
                </div>
              </Col>
              <Col span={12}>
                <div className="item">
                  <div className="desc">Technicians</div>
                  <h6 className="number">3,000</h6>
                </div>
              </Col>
            </Row>
          </div>
        </Col>
        <Col span={8}>
          <div className="card-lg">
            <div className="header">
              <h4>Groups</h4>
            </div>
            <Row>
              <Col span={12}>
                <div className="item">
                  <div className="desc">Areas</div>
                  <h6 className="number">3</h6>
                </div>
              </Col>
              <Col span={12}>
                <div className="item">
                  <div className="desc">Tenants</div>
                  <h6 className="number">180,000</h6>
                </div>
              </Col>
            </Row>
          </div>
        </Col>
        <Col span={8}>
          <div className="card-lg">
            <div className="header">
              <h4>Other</h4>
            </div>
            <Row>
              <Col span={12}>
                <div className="item px-0">
                  <div className="desc">Pushed notifications</div>
                  <h6 className="number">12</h6>
                </div>
              </Col>
              <Col span={12}>
                <div className="item">
                  <div className="desc">Repeated tasks</div>
                  <h6 className="number">300</h6>
                </div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>

      <div className="card-lg">
        <div className="header">
          <h4>Tickets</h4>
        </div>
        <div className="graph-info">
          <span className="month">July</span>
          <span className="num">4000</span>
          <span> TICKETS</span>
        </div>
        <TicketsGraph />
      </div>

    </div>
  )
}
