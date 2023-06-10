import useUsers from "../../../Hooks/useUsers";
import { GrUserAdmin } from "react-icons/gr";
import { GiTeacher } from "react-icons/gi";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";


const ManageUsers = () => {
    const [users, refetch] = useUsers()
    const [axiosSecure] = useAxiosSecure()

    const handleMakeInstructor = (user) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Proceed!'
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.patch('/users/instructor', user)
                    .then(data => {
                        if (data.data.modifiedCount) {
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
    const handleMakeAdmin = (user) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Proceed!'
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.patch('/users/admin', user)
                    .then(data => {
                        if (data.data.modifiedCount) {
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
        <div className="w-full px-12 h-full mt-20">
            <h1 className="text-3xl font-bold text-center my-8 uppercase">Manage Users</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Status</th>
                            <th>Make Instructor</th>
                            <th>Make Admin</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) =>
                                <tr key={user._id}>
                                    <td>{index + 1}</td>
                                    <td>
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={user.image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.role}</td>
                                    <td><button onClick={() => handleMakeInstructor(user)} disabled={user.role === 'admin' || user.role === "instructor"} className="btn btn-sm bg-orange-400"><GiTeacher className="text-xl"></GiTeacher></button></td>
                                    <td><button onClick={() => handleMakeAdmin(user)} disabled={user.role === 'admin' || user.role === "instructor"} className="btn btn-sm bg-green-400"><GrUserAdmin className="text-xl"></GrUserAdmin></button></td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUsers;