import { Select } from 'antd';
import React from 'react';
const { Option } = Select;

const SelectSearch = () => (
  <Select
    className='select-search'
    showSearch
    placeholder="Search for organization"
    optionFilterProp="children"
    dropdownAlign={{ offset: [0, 8] }}
    filterOption={(input, option) =>
                  option.children
                    .toString()
                    .toLowerCase()
                    .indexOf(input.toLowerCase()) >= 0
                }
  >
    <Option value="emaar">EMAAR</Option>
    <Option value="ewaan">EWAAN</Option>
  </Select>
);

export default SelectSearch;

