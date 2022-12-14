import React, { useState, useEffect } from 'react'
import { Col, Row, message, DatePicker } from 'antd';
import { useHistory } from 'react-router-dom';
import BreadcrumbC from './Breadcrumb'
import {ReactComponent as Tickets} from '../../../components/shared-components/svgs/tickets.svg';
import {ReactComponent as Teams} from '../../../components/shared-components/svgs/teams.svg';
import TicketsGraph from './TicketsGraph';
import { useDispatch, useSelector } from 'react-redux'
import { getStatistics, getDomHistogramData, clearErrors } from 'redux/actions/Statistics'
import { AUTH_PREFIX_PATH } from 'configs/AppConfig';

const dateFormat = 'YYYY/MM/DD'

export default function Statistics() {
  const history = useHistory()
  const dispatch = useDispatch()

  const [monthDate, setMonthDate] = useState(new Date().toISOString().slice(0, 10))

  // GET COMPOUND STATISTICS
  const { statistics, error } = useSelector(state => state.compoundStatistics)
  // Get DOM Histogram data
  const { domData, horizontalAxis, verticalAxis, error: errorDom } = useSelector(state => state.getDomHistogramData)

  useEffect(() => {
    dispatch(getStatistics())

    if (error) {
      if (error === 'Session Error, try to login again') {
        localStorage.removeItem("HaressOwnerjwtToken");
        history.push(`${AUTH_PREFIX_PATH}/login`)
      }
      message.error(error);
      dispatch(clearErrors())
    }
  }, [dispatch, error, history])

  useEffect(() => {
    if (monthDate === '') {
      dispatch(getDomHistogramData(new Date().toISOString().slice(0, 10)))
    } else {
      dispatch(getDomHistogramData(monthDate))
    }
    if (errorDom) {
      message.error(errorDom);
      dispatch(clearErrors())
    }
  }, [dispatch, monthDate, errorDom])

  return (
    <div className='statistics'>
      <BreadcrumbC />

      <div className="card-lg mt-4 mb-3">
        <div className="header">
          <Tickets />
          <h4>Tickets</h4>
        </div>
        {statistics && (
          <Row>
            <Col span={4}>
              <div className="item">
                <div className="desc">Total</div>
                <h6 className="number">{statistics.ticketsPerStatusCount}</h6>
              </div>
            </Col>
            <Col span={4}>
              <div className="item danger">
                <div className="desc">Overdue</div>
                <h6 className="number">{statistics.overdueTicketsCount}</h6>
              </div>
            </Col>
            {statistics.totalTicketsCount && (
              <>
                <Col span={4}>
                  <div className="item">
                    <div className="desc">Assigned</div>
                    <h6 className="number">{statistics.totalTicketsCount.assigned}</h6>
                  </div>
                </Col>
                <Col span={4}>
                  <div className="item">
                    <div className="desc">In progress</div>
                    <h6 className="number">{statistics.totalTicketsCount.inprogress}</h6>
                  </div>
                </Col>
                <Col span={4}>
                  <div className="item">
                    <div className="desc">Complete</div>
                    <h6 className="number">{statistics.totalTicketsCount.completed}</h6>
                  </div>
                </Col>
                <Col span={4}>
                  <div className="item">
                    <div className="desc">Archived</div>
                    <h6 className="number">{statistics.totalTicketsCount.archived}</h6>
                  </div>
                </Col>
              </>
            )}
          </Row>
        )}
      </div>

      <Row gutter={16} className='mb-3'>
        <Col span={8}>
          <div className="card-lg">
            <div className="header">
              <Teams />
              <h4>Teams</h4>
            </div>
            <Row>
              {statistics && (
                <>
                  <Col span={12}>
                    <div className="item">
                      <div className="desc">Teams</div>
                      <h6 className="number">{statistics.totalTeamsCount}</h6>
                    </div>
                  </Col>
                  <Col span={12}>
                    <div className="item">
                      <div className="desc">Technicians</div>
                      <h6 className="number">{statistics.totalTechniciansCount}</h6>
                    </div>
                  </Col>
                </>
              )}
            </Row>
          </div>
        </Col>
        <Col span={8}>
          <div className="card-lg">
            <div className="header">
              <h4>Groups</h4>
            </div>
            <Row>
              {statistics && (
                <>
                  <Col span={12}>
                    <div className="item">
                      <div className="desc">Areas</div>
                      <h6 className="number">{statistics.totalAreasCount}</h6>
                    </div>
                  </Col>
                  <Col span={12}>
                    <div className="item">
                      <div className="desc">Tenants</div>
                      <h6 className="number">{statistics.totalTenantsCount}</h6>
                    </div>
                  </Col>
                </>
              )}
            </Row>
          </div>
        </Col>
        <Col span={8}>
          <div className="card-lg">
            <div className="header">
              <h4>Other</h4>
            </div>
            <Row>
              {statistics && (
                <>
                  <Col span={12}>
                    <div className="item px-0">
                      <div className="desc">Pushed notifications</div>
                      <h6 className="number">{statistics.totalPushedNotificationsCount}</h6>
                    </div>
                  </Col>
                  <Col span={12}>
                    <div className="item">
                      <div className="desc">Repeated tasks</div>
                      <h6 className="number">{statistics.totalRepeatedTasksCount}</h6>
                    </div>
                  </Col>
                </>
              )}
            </Row>
          </div>
        </Col>
      </Row>

      <div className="card-lg">
        <div className="header tickets-header">
          <h4>Tickets</h4>
          <div className="date-picker">
            <DatePicker
              placeholder=''
              format={dateFormat}
              className='small w-100 mx-0'
              id='contractStartDate'
              onChange={(date, dateString) => {
                setMonthDate(dateString)
              }}
            />
          </div>
        </div>
        {domData && (
          <div className="graph-info">
            <span className="month">{domData.monthName}</span>
            <span className="num">{domData.totalMonthTicketsCount}</span>
            <span> TICKETS</span>
          </div>
        )}
        {(domData && horizontalAxis && verticalAxis) && (
          <TicketsGraph domData={domData} horizontalAxis={horizontalAxis} verticalAxis={verticalAxis} />
        )}
      </div>

    </div>
  )
}
