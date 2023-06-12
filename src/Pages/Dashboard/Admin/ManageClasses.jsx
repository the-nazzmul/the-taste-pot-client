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
    const handleApproval = (classId, approval) => {
        console.log(classId, approval);
        Swal.fire({
            title: 'Are you sure?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Proceed!'
        }).then((result) => {
            if (result.isConfirmed) {
                const update = { id: classId, approval: approval }
                axiosSecure.patch('/allClasses', update)
                .then(data => {
                    if (data.status ===200) {
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
                                            <button disabled={singleClass.status === 'approved' || singleClass.status === "denied"} onClick={() => handleApproval(singleClass._id, "approved")} className="btn join-item btn-xs bg-green-500 text-white">Approve</button>
                                            <button disabled={singleClass.status === 'approved' || singleClass.status === "denied"} onClick={() => handleApproval(singleClass._id, "denied")} className="btn join-item btn-xs bg-red-500 text-white">Deny</button>
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
            </div>

        </div>
    );
};

export default ManageClasses;