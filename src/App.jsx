import "./App.css";
import HiddenSearchBar from "./HiddenSearchBar";
import Testimonials from "./Testimonials";
import ToggleBg from "./ToggleBg";

const App = () => {
	return (
		<div  className='flex items-center justify-center h-screen'>
			{/* <ToggleBg/> */}
			{/* <HiddenSearchBar/> */}
			<Testimonials/>
		</div>
	);
};

export default App;