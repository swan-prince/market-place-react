import React from "react";
import DatePicker from 'react-date-picker';

function DateInput(props) {
	
	const { label, value } = props;
	return (
		<>
			<label className="block uppercase text-gray-700 text-xs font-bold mb-2">{ label }</label>
			<DatePicker
				onChange={ (value) => props.onChange(value) }
				value={ value }
				className="form-control px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
			/>
		</>
	)
}

export default DateInput;
