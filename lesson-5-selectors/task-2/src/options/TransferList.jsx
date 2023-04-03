import React from 'react';
import AvailableOptions from './AvailableOptions.jsx';
import SelectedOptions from './SelectedOptions.jsx';

const TransferList = () => {
  return (
    <div className="transfer-list">
      <AvailableOptions title="Available options" />
      <SelectedOptions title="Selected options" />
    </div>
  );
};

export default TransferList;
