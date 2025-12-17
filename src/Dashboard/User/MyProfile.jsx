import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { toast, ToastContainer } from 'react-toastify';

const MyProfile = () => {
    const { user, updateUserProfile, setUser } = useContext(AuthContext);

    const handleUpdateProfile = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;

        updateUserProfile(name, photo)
            .then(() => {
                // স্টেট আপডেট করা যাতে পেজ রিফ্রেশ ছাড়াই নাম চেঞ্জ হয়
                setUser({ ...user, displayName: name, photoURL: photo });
                toast.success("Profile Updated Successfully!");
            })
            .catch(error => {
                toast.error(error.message);
            });
    };

    return (
        <div className="flex justify-center items-center min-h-[80vh]">
            <div className="card w-96 bg-base-100 shadow-2xl">
                <div className="card-body items-center text-center">
                    
                    {/* Current Image */}
                    <div className="avatar">
                        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={user?.photoURL || "https://i.ibb.co/T10z274/user.png"} alt="profile" />
                        </div>
                    </div>
                    
                    <h2 className="card-title mt-2">{user?.displayName}</h2>
                    <p className="text-gray-500">{user?.email}</p>
                    <div className="badge badge-accent mt-1 uppercase">{user?.role || 'User'}</div>

                    <div className="divider">Update Profile</div>

                    {/* Update Form */}
                    <form onSubmit={handleUpdateProfile} className="w-full space-y-3">
                        <div className="form-control">
                            <label className="label"><span className="label-text">Name</span></label>
                            <input 
                                name="name" 
                                type="text" 
                                defaultValue={user?.displayName} 
                                className="input input-bordered w-full" 
                            />
                        </div>
                        <div className="form-control">
                            <label className="label"><span className="label-text">Photo URL</span></label>
                            <input 
                                name="photo" 
                                type="text" 
                                defaultValue={user?.photoURL} 
                                className="input input-bordered w-full" 
                            />
                        </div>
                        <div className="form-control mt-4">
                            <button className="btn btn-primary">Update Information</button>
                        </div>
                    </form>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default MyProfile;