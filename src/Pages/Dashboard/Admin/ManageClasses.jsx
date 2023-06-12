import { useQuery } from "react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";


const ManageClasses = () => {
    const [axiosSecure] = useAxiosSecure()
    const { user } = useAuth()

    const { data: classes = [], refetch } = useQuery(['isAdmin', user?.email], async () => {
        const result = await axiosSecure('/allClasses')
        return result.data;
    })
    const handleApproved = (classId) => {
        Swal.fire({
            title: 'Are you sure?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Proceed!'
        }).then((result) => {
            if (result.isConfirmed) {
                const id = { id: classId }
                axiosSecure.patch('/allClasses/approved', id)
                    .then(data => {
                        if (data.status === 200) {
                            Swal.fire(
                                'Successful!',
                                'User role has been updated',
                                'success'
                            )
                            refetch()
                        }
                    })
            }
        })
    }
    const handleDeny = (classId) => {
        Swal.fire({
            title: 'Are you sure?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Proceed!'
        }).then((result) => {
            if (result.isConfirmed) {
                window.my_modal_1.showModal()
                const submitButton = document.getElementById('feedbackBtn')
                submitButton.addEventListener('click', () => {
                    const feedback = document.getElementById('feedback').value;
                    const update = { id: classId, feedback: feedback }
                    axiosSecure.patch('/allClasses/deny', update)
                        .then(data => {
                            if (data.status === 200) {
                                Swal.fire(
                                    'Successful!',
                                    'User role has been updated',
                                    'success'
                                )
                                refetch()
                            }
                        })
                })
            }
        })
    }

    return (

        <div className="w-full h-full px-12 mt-20">
            <h2 className="text-3xl font-bold text-center my-8">Manage classes</h2>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Instructor</th>
                            <th>Instructor Email</th>
                            <th>Status</th>
                            <th>Approval</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            classes.map((singleClass, index) =>
                                <tr key={singleClass._id}>
                                    <td>{index + 1}</td>
                                    <td>{singleClass.classTitle}</td>
                                    <td>{singleClass.instructor}</td>
                                    <td>{singleClass.instructorEmail}</td>
                                    <td>{singleClass.status}</td>
                                    <td>
                                        <div className="join">
                                            <button onClick={() => handleApproved(singleClass._id)} className="btn join-item btn-xs bg-green-500 text-white">Approve</button>
                                            <button onClick={() => handleDeny(singleClass._id)} className="btn join-item btn-xs bg-red-500 text-white">Deny</button>
                                        </div>
                                    </td>
                                    <td>
                                        <button className="btn btn-sm bg-red-500 text-white">X</button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
                {/* Feedback Modal */}
                <dialog id="my_modal_1" className="modal">
                    <form method="dialog" className="modal-box">
                        <h3 className="text-xl my-4">Feedback</h3>
                        <textarea id="feedback" className="textarea textarea-bordered w-full" placeholder="Feedback" name="feedback"></textarea>
                        <input id="feedbackBtn" className="custom-btn my-4" type="submit" value="Proceed?" />
                        <div className="modal-action">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">Close</button>
                        </div>
                    </form>
                </dialog>
            </div>

        </div>
    );
};

export default ManageClasses;