import PropTypes from "prop-types"
const SubmissionCard = ({ submission }) => {
    const { title, status, marks, obtainMarks, feedback } = submission;

    return (
        <tr className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50 shadow-lg">
                            {/* col-1 */}
                            <td className="p-2 md:p-3">
                                <p>{title}</p>
                            </td>
                            {/* cols-2 */}
                            <td className="p-2 md:p-3">
                                <p>{marks}</p>
                            </td>
                            {/* col-3 */}
                            <td className="p-2 md:p-3">
                                <p className="dark:text-gray-600">{obtainMarks ? obtainMarks : "Not Yet"}</p>
                            </td>
                            {/* col-4 */}
                            <td className="p-2 md:p-3">
                                <p className="dark:text-gray-600">{feedback ? feedback : "Not Yet"}</p>
                            </td>
                            {/* col-5 */}
                            <td className="p-3">
                                <span className={status === 'pending' ? ' font-semibold rounded-md dark:text-orange-600 ' : ' font-semibold rounded-md dark:text-green-500 '}>
                                    <span>{status}</span>
                                </span>
                            </td>
                        </tr>
                        
    );
};

SubmissionCard.propTypes = {
    submission: PropTypes.object
};

export default SubmissionCard;
