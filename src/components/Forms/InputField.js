import React from 'react';

const InputFiled = (props) => {
    return (
        <div className="field">
        <label className="label">{props.label}</label>
        <div className="control">
          <input
            className={props.className}
            type={props.type}
            placeholder={props.placeholder}
            name={props.name}
            onChange={props.onChange}
            value={props.value}
          />
        </div>
      </div>
    );
};

export default InputFiled;