import React from 'react';

const QNA = () => {
    return (
        <div className='container'>
            <h2 className='text-info text-center mb-5'>QNA</h2>
            <div className="accordion mb-5" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        How React Works?
                    </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        React is a useful, comfortable user friendly library that creates interfaces. Its speciality to make components for every small chunks of code. When a developer changes a component code in a react file, then react makes a DOM calling it a "Virtual Dom" and compares with the changes made in the components. finding the changes in components react changes that specific change in the main site. In this process, react other unchanged files remains the same in the browser like before. If Compared to regular DOM, It would take a huge time to update, but in React case this is totally unique and this makes React so much faster. 
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Difference between Props and State?
                    </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <div className="row">
                            <div className="col-md-6">
                                <h5>Props</h5>
                                <ul>
                                    <li>Data is rolled from component to component</li>
                                    <li>It is type of look through only</li>
                                    <li>It is consistant or Immutable</li>
                                    <li>Props are opened to state and funtional components</li>
                                    <li>Props are external component</li>
                                </ul>
                            </div>
                            <div className="col-md-6">
                                <h5>State</h5>
                                <ul>
                                    <li>Data is rolled to heart of component only</li>
                                    <li>It is type of write and look through</li>
                                    <li>It is inconsistant or mutable</li>
                                    <li>State are opened to state component only</li>
                                    <li>State are internal component</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QNA;