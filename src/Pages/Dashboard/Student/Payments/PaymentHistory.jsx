import { format } from "date-fns";
import useEnrolled from "../../../../Hooks/useEnrolled";


const PaymentHistory = () => {
    const [enrolledCourses] = useEnrolled()
    return (
        <div className="w-full h-full px-12 mt-20">
            <h2 className="text-3xl font-bold text-center my-8">Payment History</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="bg-[#E6820C] text-white">
                            <th>#</th>
                            <th>Course Name</th>
                            <th>Date</th>
                            <th>Amount</th>
                            <th>Transaction ID</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            enrolledCourses.map((payment, index) =>
                                <tr key={payment._id}>
                                    <td>{index + 1}</td>
                                    <td>{payment.courseName}</td>
                                    <td>{format(new Date(payment.date), 'dd-MM-yy')}</td>
                                    <td>${payment.price}</td>
                                    <td>{payment.transactionId}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PaymentHistory;