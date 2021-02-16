import React from 'react';
import styles from './Tables.module.scss';
import { Link } from 'react-router-dom';

const Tables = () => (
  <div className={styles.component}>
    <h2>Tables View</h2>
    <div>
      <Link to={`${process.env.PUBLIC_URL}/tables/booking/new`}>New Booking</Link>
      <Link to={`${process.env.PUBLIC_URL}/tables/booking/book/123abc`}>Change Booking</Link>
      <Link to={`${process.env.PUBLIC_URL}/tables/events/new`}>New Event</Link>
      <Link to={`${process.env.PUBLIC_URL}/tables/events/event/123abc`}>Change Event</Link>
    </div>
  </div>
);

export default Tables;