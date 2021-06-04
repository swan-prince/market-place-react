import React from "react";

function FileInput (props) {

	const { label, name } = props

  return (
		<>
			<div className="relative w-full mb-3">
				<label
					className="block uppercase text-gray-700 text-xs font-bold mb-2"
				>
					{ label }
				</label>
				<input 
					type="file" 
					name={ name } 
					onChange={ (e) => props.onChange(e) }
					className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150" />
			</div>
		</>
	)
}

export default FileInput;
