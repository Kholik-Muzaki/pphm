// CardDashboard.js
import CountUp from 'react-countup';
import './CardDashboard.css';

const CardDashboard = ({ title, number, iconClass, bgColor }) => {
    return (
        <div className={`card card-dashboard ${bgColor}`}>
            <div className="card-content">
                <div className="card-number">
                    <CountUp end={number} duration={2.5} />
                </div>
                <i className={`${iconClass} bx-tada bx-md`}></i>
                <div className="card-title">{title}</div>
            </div>
        </div>
    );
}

export default CardDashboard;
