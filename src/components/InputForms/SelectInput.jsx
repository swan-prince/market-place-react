import React from "react";

function SelectInput (props) {

	const { label, name, defaultValue, options, classname } = props;

	return (
		<>
			<div className="relative w-full mb-3">
				<label className="block uppercase text-gray-700 text-xs font-bold mb-2">{ label }</label>
				<select 
					name={ name }
					onChange={ (e) => props.onChange(e) }
					defaultValue={ defaultValue }
					className={ "form-control px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150 " + (classname) }
					>
						{
							options.map((item, index) => (
								<option key={ index } value={ item.name } >{ item.name }</option>
							))
						}
				</select>
			</div>
		</>
	)
}

export default SelectInput;
