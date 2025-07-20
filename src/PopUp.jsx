import React from "react";
import { createPortal } from "react-dom";

const PopUp = ({ copied }) => {
	return createPortal(
		<div>
			{copied && (
				<section>
					<h3>Copied</h3>
				</section>
			)}
		</div>,
        document.querySelector("#popup")
	);
};

export default PopUp;
