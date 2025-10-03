import Admin from '../Site/admin/Admin';
import HR from '../Site/hr/HR';
import Employee from '../Site/employee/Employee';

const Dashboard = () => {
    const userRole = localStorage.getItem('role');

    const renderContent = () => {
        if (userRole === 'admin') {
            return <Admin />;
        } else if (userRole === 'hr') {
            return <HR />;
        } else if (userRole === 'employee') {
            return <Employee />;
        } return <h1>Hello</h1>;
    };

    return (
        <div>
            {renderContent()}
        </div>
    );
};

export default Dashboard;