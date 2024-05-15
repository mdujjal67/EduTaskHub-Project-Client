import PropTypes from "prop-types"
import { AuthContext } from "../Provider/AuthProvider";
import { useContext } from "react";
const PendingAssignmentCard = ({ pendingAssignment }) => {
    const { title, marks } = pendingAssignment;
    const {user} = useContext(AuthContext);

    return (
        <tr className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50 shadow-lg">
                            {/* col-1 */}
                            <td className="p-2 md:p-3">
                                <p>{title}</p>
                            </td>
                            {/* cols-2 */}
                            <td className="p-2 md:p-3">
                                <p>{user?.displayName}</p>
                            </td>
                            {/* col-3 */}
                            <td className="p-2 md:p-3">
                                <p className="dark:text-gray-600">{marks}</p>
                            </td>
                            {/* col-4 */}
                            <td className="p-3">
                                <button className="btn btn-sm bg-green-500 px-2  text-[12px] rounded-lg text-white">give mark</button>
                            </td>
                        </tr>
                        
    );
};

PendingAssignmentCard.propTypes = {
    pendingAssignment: PropTypes.object
};

export default PendingAssignmentCard;
