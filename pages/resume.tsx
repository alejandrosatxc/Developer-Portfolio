export default function Resume() {
    return (
        <>
            <h1 className="text-red-500 m-4 text-6xl">Resume</h1>
            <div className="flex flex-col ml-4">
                <div className="flex flex-row flex-wrap">
                    <div className="flex flex-col w-96 mb-2">
                        <h2 className="text-red-500 text-4xl mb-4">Alejandro Zapien</h2>
                        <h2 className="text-red-500 text-3xl">Full-Stack Engineer</h2>
                    </div>
                    <div className="flex flex-col w-[500px]">
                        <h3 className="text-red-500 text-2xl">San Antonio, TX</h3>
                        <h3 className="text-red-500 text-2xl">210.723.0440</h3>
                        <h3 className="text-red-500 text-2xl">AlejandroZapien09@gmail.com</h3>
                    </div>
                </div>
                <div className="flex flex-row mt-4 flex-wrap">
                    <div className="w-96 mb-2">
                        <h3 className="text-red-500 text-3xl">Skills and Technologies</h3>
                    </div>
                    <div className="w-[500px]">
                        <p className="text-red-500 text-2xl">Full-stack Engineer, fully versed in full-stack application development front-end and back-end, development, deployment, Amazon Web Services, Google Cloud Platform, Heroku, Vercel, CI, pipelining, database management, writing algorithms for problem solving. 6+ years experience with JavaScript, TypeScript, Python, Linux, Java, Node, React, PHP, express.js, Next.js, git, github, MySQL, NoSQL, Machine Learning, Neural Nets, C, C++, Postgress, MongoDB, Sequelize, Primsa, Docker, Kubernetes, Blockchains, Cryptocurrencies, Arduino, Raspberry Pi, Bash scripting, HTML, CSS and many others and counting. </p>
                    </div>
                </div>
                <div className="flex flex-row mt-4 flex-wrap">
                    <div className="w-96 mb-2">
                        <h2 className="text-red-500 text-3xl">Experience</h2>
                    </div>
                    <div className="text-red-500 text-2xl w-[500px]">
                        <h2 className="text-red-500 text-2xl">SATX Consultants / Tech Director/Lead Developer/Database Manager</h2>
                        <h3 className="text-red-700 text-xl">October 2019 - PRESENT,  San Antonio, TX</h3>
                        <p className="text-red-500 text-2xl">Develop, engineer and deploy full-stack applications according to client requirements. Develop automation of company processes and procedures. Hire, train, and supervise programming interns. Maintain a Database of constituents for political fundraising. </p>
                        <br />
                        <h2 className="text-red-500 text-2xl">Palm Restaurant / Server/Supervisor / Tech Director/Lead Developer/Database Manager</h2>
                        <h3 className="text-red-700 text-xl">November 2013 - March 2020,  San Antonio TX</h3>
                        <p className="text-red-500 text-2xl">Provide fine dining lunch and dinner service to San Antonio’s upper-class citizens. Open and close restaurant leading a team of wait staff to create the best fine-dining steakhouse experience. Extensive wine, liquor, and cocktail knowledge</p>
                    </div>
                </div>
                <div className="flex flex-row mt-4 flex-wrap">
                    <div className="w-96 mb-2">
                        <h3 className="text-3xl text-red-500">Education</h3>
                    </div>
                    <div className="w-[500px]">
                        <p className="text-2xl text-red-500">Bachelors Degree in Computer Science From the University of Texas at San Antonio 2014-2018</p>
                        <br />
                        <p className="text-2xl text-red-500">Associates Degree in Liberal Arts From San Antonio College 2010-2014</p>
                    </div>
                </div>
            </div>
        </>
    )
}