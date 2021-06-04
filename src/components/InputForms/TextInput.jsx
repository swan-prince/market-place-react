import React from "react";

function TextInput (props) {
	
	const { label, type, defaultValue, name } = props;

	return (
		<>
			<div className="relative w-full mb-3">
				<label
					className="block uppercase text-gray-700 text-xs font-bold mb-2"
				>
					{ label }
				</label>
				<input
					type={ type }
					name= { name }
					className={ "px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150 " + (props.classname) }
					value={ defaultValue }
					onChange={ (e) => props.onChange(e) }
				/>
			</div>
		</>
	)
}

export default TextInput;
