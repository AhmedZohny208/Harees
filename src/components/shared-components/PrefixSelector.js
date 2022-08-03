import React from 'react'
import { Select } from 'antd'
import countries from 'configs/countries';

const { Option } = Select

export default function PrefixSelector({setPrefix}) {

  const handlePhonePrefixChange = (value) => {
    setPrefix(value);
  }

  return (
    <Select
      defaultValue='+966'
      onChange={handlePhonePrefixChange}
      showSearch
      optionFilterProp="children"
      filterOption={(input, option) =>
                  option.children
                    .toString()
                    .toLowerCase()
                    .indexOf(input.toLowerCase()) >= 0
                }
    >
      {countries &&
        countries.map((e, i) => (
          <Option key={i} value={e.code}>
            <span
              className={`flag-icon flag-icon-${e.iso2.toLowerCase()} mr-2`}
            ></span>
            {`+${e.code}`}
          </Option>
        ))}
    </Select>
  )
}
