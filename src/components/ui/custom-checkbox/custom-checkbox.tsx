import React, { useState } from 'react';
import { Checkbox } from 'antd';
import { CheckboxChangeEvent } from 'antd/es/checkbox';
import './custom-checkbox.css';

const CustomCheckbox: React.FC = () => {
  const [checked, setChecked] = useState(false);

  const handleChange = (e: CheckboxChangeEvent) => {
    setChecked(e.target.checked);
  };

  return (
    <Checkbox className="custom-checkbox" onChange={handleChange} checked={checked} />
  );
};

export default CustomCheckbox;