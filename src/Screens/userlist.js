import React, { useEffect, useState } from "react";
import axios from "axios";
import "./modal.css"; 

const UsersList = () => {
    const [users, setUsers] = useState([]);
    const [page, setPage] = useState(1);
    const [editingUser, setEditingUser] = useState(null);
    const [formData, setFormData] = useState({ first_name: "", last_name: "", email: "" });
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [userToDelete, setUserToDelete] = useState(null);

    useEffect(() => {
        const fetchUsers = async () => {
            const response = await axios.get(`https://reqres.in/api/users?page=${page}`);
            setUsers(response.data.data);
        };
        fetchUsers();
    }, [page]);

    const handleDelete = async () => {
        try {
            await axios.delete(`https://reqres.in/api/users/${userToDelete}`);
            setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userToDelete));
            alert("User deleted successfully!");
        } catch (err) {
            console.error(err);
            alert("Failed to delete the user.");
        } finally {
            setIsDeleteModalOpen(false);
        }
    };

    const handleEdit = (user) => {
        setEditingUser(user.id);
        setFormData({
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.email || "",
        });
        setIsModalOpen(true);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSave = async () => {
        try {
            const response = await axios.put(`https://reqres.in/api/users/${editingUser}`, formData);
            setUsers((prevUsers) =>
                prevUsers.map((user) =>
                    user.id === editingUser ? { ...user, ...response.data } : user
                )
            );
            setIsModalOpen(false);
            alert("User updated successfully!");
        } catch (err) {
            console.error(err);
            alert("Failed to update the user.");
        }
    };

    return (
        <div className="user-list-container">
            <div className="header">
                <h1>User Management System</h1>
            </div>
            <div className="card-container">
                {users.map((user) => (
                    <div key={user.id} className="profile-card">
                        <img src={user.avatar} alt={user.first_name} className="profile-avatar" />
                        <h3>{`${user.first_name} ${user.last_name}`}</h3>
                        <p>{user.email}</p>
                        <div className="card-buttons">
                            <button onClick={() => handleEdit(user)} className="edit-button">
                                Edit
                            </button>
                            <button
                                onClick={() => {
                                    setUserToDelete(user.id);
                                    setIsDeleteModalOpen(true);
                                }}
                                className="delete-button"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
                <div className="pagination-buttons">
                    <button onClick={() => setPage(page - 1)} disabled={page === 1}>
                        Previous
                    </button>
                    <button onClick={() => setPage(page + 1)}>Next</button>
                </div>
            </div>

            {isModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close-button" onClick={() => setIsModalOpen(false)}>&times;</span>
                        <h3>Edit User</h3>
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                handleSave();
                            }}
                        >
                            <input
                                type="text"
                                name="first_name"
                                value={formData.first_name}
                                onChange={handleInputChange}
                                placeholder="First Name"
                                required
                            />
                            <input
                                type="text"
                                name="last_name"
                                value={formData.last_name}
                                onChange={handleInputChange}
                                placeholder="Last Name"
                                required
                            />
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                placeholder="Email"
                                required
                            />
                            <button type="submit">Save</button>
                            <button type="button" onClick={() => setIsModalOpen(false)}>
                                Cancel
                            </button>
                        </form>
                    </div>
                </div>
            )}

            {isDeleteModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close-button" onClick={() => setIsDeleteModalOpen(false)}>&times;</span>
                        <h3>Are you sure you want to delete this user?</h3>
                        <button onClick={handleDelete} className="confirm-button">
                            Yes
                        </button>
                        <button onClick={() => setIsDeleteModalOpen(false)} className="cancel-button">
                            No
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default UsersList;
