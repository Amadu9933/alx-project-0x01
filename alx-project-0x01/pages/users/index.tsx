import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";
import UserModal from "@/components/common/UserModal";
import { UserProps, UserData } from "@/interfaces";
import { useState } from "react";

export async function getStaticProps() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const posts = await response.json();

    return {
        props: {
            posts,
        },
    };
}

const Users: React.FC<{ posts: UserProps[] }> = ({ posts }) => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [user, setUser] = useState<UserData | null>(null);

    const handleAddUser = (newUser: UserData) => {
        setUser({ ...newUser, id: posts.length + 1 });
    };

    return (
        <div className="flex flex-col h-screen">
            <Header />
            <div className="flex justify-end px-6 pt-4">
                <button onClick={() => setModalOpen(true)} className="bg-blue-700 px-4 py-2 rounded-full text-white">
                    Add User
                </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
                {posts.map((user) => (
                    <UserCard key={user.id} {...user} />
                ))}
            </div>
            {isModalOpen && (
                <UserModal onClose={() => setModalOpen(false)} onSubmit={handleAddUser} />
            )}
        </div>
    );
};

export default Users;