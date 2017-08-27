import React from 'react'

const RenderField = ({ input, label, type, meta: { error } }) =>
  <div>
    <label>
      {label}
    </label>
    {error &&
      <span style={{ color: 'red', float: 'right' }}>
        {error}
      </span>}
    <div className="field">
      <input {...input} type={type} />
    </div>
  </div>

export default RenderField
