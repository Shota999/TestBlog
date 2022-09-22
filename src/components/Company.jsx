import '../App.scss'

export default function Company() {
    return (
        <div className="App">
            <div className="mainContainer">
                <div className="company">
                    <div className="title">
                        <h2>Cost of services of our company</h2>
                        <p>We work efficiently with the great bulk of services</p>
                    </div>
                    <div className="blocks_container">
                        <div className="block">
                            <div className="border_container">
                                <div className="top">
                                    <h3>Basic</h3>
                                </div>
                                <span>$80.00</span>
                                <button>get started</button>
                            </div>
                            <ul>
                                <li>
                                    <i className="fa fa-check"></i> Content Optimization
                                </li>
                                <li>
                                    <i className="fa fa-check"></i> Risk Management
                                </li>
                                <li>
                                    <i className="fa fa-check"></i> Marketing Plan
                                </li>
                                <li>
                                    <i className="fa fa-check"></i> Branding Strategy
                                </li>
                            </ul>
                        </div>
                        <div className="block">
                            <div className="border_container">
                                <div className="top">
                                    <h3>Standart</h3>
                                </div>
                                <span>$148.00</span>
                                <button>get started</button>
                            </div>
                            <ul>
                                <li>
                                    <i className="fa fa-check"></i> Content Optimization
                                </li>
                                <li>
                                    <i className="fa fa-check"></i> Risk Management
                                </li>
                                <li>
                                    <i className="fa fa-check"></i> Marketing Plan
                                </li>
                                <li>
                                    <i className="fa fa-check"></i> Branding Strategy
                                </li>
                            </ul>
                        </div>
                        <div className="block">
                            <div className="border_container">
                                <div className="top">
                                    <h3>Pro</h3>
                                </div>
                                <span>$250</span>
                                <button>get started</button>
                            </div>
                            <ul>
                                <li>
                                    <i className="fa fa-check"></i> Content Optimization
                                </li>
                                <li>
                                    <i className="fa fa-check"></i> Risk Management
                                </li>
                                <li>
                                    <i className="fa fa-check"></i> Marketing Plan
                                </li>
                                <li>
                                    <i className="fa fa-check"></i> Branding Strategy
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}