import React, { useState, useEffect } from 'react'
import { Row, Col, Card, message } from "antd";
import { useDispatch, useSelector } from 'react-redux'
import { getTenantDetails, clearErrors } from 'redux/actions/Tenants'
import BreadcrumbC from './Breadcrumb'
import Details from './Details';
import Table from './Table';

export default function TenantDetails({ match }) {
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1)

  const { tenant, tickets, error, loading } = useSelector(state => state.tenantDetails);

  useEffect(() => {
    dispatch(getTenantDetails(match.params.id, currentPage))

    if (error) {
      message.error(error);
      dispatch(clearErrors())
    }
  }, [dispatch, currentPage, error, match.params.id])

  return (
    <div>
      <BreadcrumbC />

      <Row justify="center">
        <Col xs={20} sm={20} md={24} lg={24}>
          <Card className='form-card' bordered={false}>
            {loading ? (
              <h4 className='text-center mt-5'>Loading...</h4>
            ) : (
              <Details tenant={tenant} />
            )}
          </Card>
          {!loading && (
            <Table tickets={tickets} currentPage={currentPage} setCurrentPage={setCurrentPage} />
          )}
        </Col>
      </Row>
    </div>
  )
}
