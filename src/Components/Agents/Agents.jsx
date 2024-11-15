import React, { useState } from "react";
import Agent from "./Agent";
import agents from "../../Data/AgentsData";


export default function Agents() {
	const [allAgents] = useState(agents);

	return (
		<div className="agents" id="agents">
			<div className="agents-intro">
				<p className="agents-heading">Meet Our Agents</p>
				<p className="agents-text">
				Our team of dedicated real estate professionals is committed to providing 
				exceptional service and guiding you through every step of your real estate journey. 
				With a deep understanding of the local market and a passion for helping clients find 
				their dream homes, our agents are here to assist you.
				</p>
			</div>
			<div className="agents-container">
				{allAgents.map((agent) => (
					<Agent
						key={agent.id}
						name={agent.name}
						title={agent.title}
						image={agent.image}
						phone={agent.phone}
					/>
				))}
			</div>
		</div>
	);
}