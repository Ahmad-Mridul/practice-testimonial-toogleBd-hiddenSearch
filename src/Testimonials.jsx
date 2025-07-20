import React, { useState } from "react";

const Testimonials = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const testimonials = [
		{
			index: 1,
			author: "Sarah J.",
			description:
				"This service exceeded all my expectations. Highly recommended!",
		},
		{
			index: 2,
			author: "Mike L.",
			description: "Fast, reliable, and exactly what I needed.",
		},
		{
			index: 3,
			author: "Ayesha R.",
			description:
				"Professional and friendly support every step of the way.",
		},
		{
			index: 4,
			author: "Daniel K.",
			description: "A seamless experience from start to finish.",
		},
		{
			index: 5,
			author: "Emily C.",
			description: "Their attention to detail really stood out.",
		},
		{
			index: 6,
			author: "Jamal B.",
			description: "I’ve tried others, but this one is simply the best.",
		},
		{
			index: 7,
			author: "Priya M.",
			description: "They truly care about their customers.",
		},
		{
			index: 8,
			author: "Tom S.",
			description: "Efficient, easy to use, and well-designed.",
		},
		{
			index: 9,
			author: "Linda W.",
			description: "I keep coming back because they never disappoint.",
		},
		{
			index: 10,
			author: "Carlos T.",
			description: "Top-notch service. Worth every penny.",
		},
	];
    console.log(testimonials.length);
    
	const handlePrevious = () => {
		setCurrentIndex((currentIndex + testimonials.length-1)%testimonials.length);
	};
	const handleNext = () => {
        setCurrentIndex((currentIndex + testimonials.length+1)%testimonials.length);
    };
	return (
		<div className="bg-gray-300 p-20 rounded min-w-3/5">
			<p>{testimonials[currentIndex].description}</p>
			<h2 className="text-end me-10">
				~{testimonials[currentIndex].author} ------{testimonials[currentIndex].index}
			</h2>
			<div className="flex justify-between mt-5">
				<button className="btn btn-primary" onClick={handlePrevious}>
					previous
				</button>
				<button className="btn btn-primary" onClick={handleNext}>
					Next
				</button>
			</div>
		</div>
	);
};

export default Testimonials;
