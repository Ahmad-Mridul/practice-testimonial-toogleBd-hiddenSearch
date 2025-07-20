import { useState } from "react";
import { FcSearch } from "react-icons/fc";
import { FaResearchgate } from "react-icons/fa";
const HiddenSearchBar = () => {
	const [showInput, setShowInput] = useState(false);
	const [bgColor, setBgColor] = useState("white");
    const handleClick = (e) => {
        setBgColor("#1a1a1a");
        if(e.target.className=="container"){
            setShowInput(false);
        }
    };
	return (
		<div className="container h-32 ">
			<section
                className=""
				style={{
					backgroundColor: bgColor,
				}}
                onClick={handleClick}
			>
                {showInput?(
                    <div className="bg-gray-300">
                        <input type="text" placeholder="search..........."/>
                    </div>
                ):(
                    <FcSearch onClick={()=>setShowInput(true)} />
                )}
            </section>
		</div>
	);
};

export default HiddenSearchBar;
