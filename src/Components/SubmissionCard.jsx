
const SubmissionCard = ({ submission }) => {
    const { title, date, status } = submission;

    return (
        <div className="submission-card">
            <h3>{title}</h3>
            <p>Date: {date}</p>
            <p>Status: {status}</p>
            {/* Add additional submission details here */}
        </div>
    );
};

export default SubmissionCard;
