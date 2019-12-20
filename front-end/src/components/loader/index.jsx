import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';

import './style.scss';

export default function Loader ({ watchers }) {
  const showCondition = useSelector(state => {
    const statuses = watchers.map(watcher => state[watcher].status);
    return statuses.some(status => status === 'LOADING');
  });

  if (!showCondition) {
    return null;
  }
  return <div className={'loading active'}><h2>Loading ...</h2></div>;
}
