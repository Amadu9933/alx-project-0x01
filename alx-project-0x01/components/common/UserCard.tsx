import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ name, username, email, address, phone, website, company }) => {
    return (
        <div className="max-w-xl mx-auto my-6 p-6 bg-gradient-to-br from-blue-50 to-purple-100 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-blue-200">
            <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-gradient-to-tr from-purple-400 to-blue-400 flex items-center justify-center text-white font-bold text-xl mr-4">
                    {name.charAt(0)}
                </div>
                <div>
                    <h2 className="text-xl font-bold text-gray-800">{name}</h2>
                    <p className="text-sm text-gray-500">@{username}</p>
                </div>
            </div>
            <div className="mb-2">
                <span className="font-semibold text-gray-700">Email:</span> <a href={`mailto:${email}`} className="text-blue-600 hover:underline">{email}</a>
            </div>
            <div className="mb-2">
                <span className="font-semibold text-gray-700">Phone:</span> <a href={`tel:${phone}`} className="text-blue-600 hover:underline">{phone}</a>
            </div>
            <div className="mb-2">
                <span className="font-semibold text-gray-700">Website:</span> <a href={`https://${website}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">{website}</a>
            </div>
            <div className="mb-2">
                <span className="font-semibold text-gray-700">Address:</span> {address.suite}, {address.street}, {address.city}, {address.zipcode}
            </div>
            <div className="mb-2">
                <span className="font-semibold text-gray-700">Company:</span> <span className="text-purple-700 font-medium">{company.name}</span>
                <div className="text-xs text-gray-500 italic">{company.catchPhrase}</div>
            </div>
        </div>
    );
};

export default UserCard;
