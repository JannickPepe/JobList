/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { useState } from "react";
import { FiAward, FiChevronDown, FiChevronUp } from "react-icons/fi";
import { FaExternalLinkSquareAlt } from "react-icons/fa";
import { Link } from "react-router-dom";



const ShuffleSortTable = () => {
    return (
        <div className="p-8 w-full bg-gradient-to-br from-indigo-500 to-purple-600">
            <Table />
        </div>
    );
};

//
const Table = () => {

    const [users, setUsers] = useState(userData);

    const shift = (id, direction) => {
        const index = users.findIndex((u) => u.id === id);
        let usersCopy = [...users];

        if (direction === "up") {
            if (index > 0) {
                [usersCopy[index], usersCopy[index - 1]] = [
                usersCopy[index - 1],
                usersCopy[index],
                ];
            }
            } else {
            if (index < usersCopy.length - 1) {
                [usersCopy[index], usersCopy[index + 1]] = [
                usersCopy[index + 1],
                usersCopy[index],
                ];
            }
        }

        setUsers(usersCopy);
    };

    return (
        <div className="w-full bg-white shadow-lg rounded-lg overflow-x-auto max-w-5xl mx-auto">
            <table className="w-full">
                <thead>
                    <tr className="border-b-[1px] border-slate-200 text-slate-400 text-sm uppercase">
                        <th className="pl-4 w-8"></th>
                        <th className="text-start p-4 font-medium">Company</th>
                        <th className="text-start p-4 font-medium">Applicants</th>
                        <th className="text-start p-4 font-medium">Category</th>
                        <th className="text-start p-4 font-medium">Popular</th>
                        <th className="text-start p-4 font-medium">Enty Level</th>
                    </tr>
                </thead>

                <tbody>
                    {users.map((user, index) => {
                        return (
                        <TableRows
                            key={user.id}
                            user={user}
                            index={index}
                            shift={shift}
                        />
                        );
                    })}
                </tbody>
            </table>
        </div>
    );

};

//
const TableRows = ({ user, index, shift }) => {

    const rankOrdinal = numberToOrdinal(index + 1);

    return (
        <motion.tr
        layoutId={`row-${user.id}`}
        className={`text-sm ${user.id % 2 ? "bg-slate-100" : "bg-white"}`}
        >
        <td className="pl-4 w-8 text-lg">
            <button
            className="hover:text-violet-600"
            onClick={() => shift(user.id, "up")}
            >
                <FiChevronUp />
            </button>
            <button
            className="hover:text-violet-600"
            onClick={() => shift(user.id, "down")}
            >
                <FiChevronDown />
            </button>
        </td>

        <td className="flex items-center gap-3 p-4 font-medium">
            <Link to={user.link} >
                <FaExternalLinkSquareAlt className="w-7 h-7 rounded-full hover:-rotate-45 transition-transform" color="blue"/>
            </Link>
            <div>
                <span className="block mb-1 font-medium">{user.companyName}</span>
                <span className="block text-xs text-slate-500">{user.location}</span>
            </div>
        </td>

        <td className="p-4 overflow-hidden">
            <div>
                <span className="block mb-1 font-medium">{user.name}</span>
                <span className="block text-xs text-slate-500">{user.contact}</span>
            </div>
        </td>

        <td className="p-4">
            <div>
                {user.category}
            </div>
        </td>

        <td className="p-4">
            <div
            className={`flex items-center gap-2 font-medium ${
                rankOrdinal === "1st" && "text-violet-500"
            }`}
            >
            <span>{rankOrdinal}</span>
            {rankOrdinal === "1st" && <FiAward className="text-xl" />}{" "}
            </div>
        </td>

        <td className="p-4">
            <span
            className={`px-2 py-1 text-xs font-medium rounded ${
                user.status === "Junior"
                ? "bg-indigo-400 text-white"
                : user.status === "Mid"
                ? "bg-purple-400 text-white"
                : "bg-violet-400 text-slate-800"
            }`}
            >
                {user.status}
            </span>
        </td>
        </motion.tr>
    );

};

export default ShuffleSortTable;

//
const numberToOrdinal = (n) => {

    let ord = "th";

    if (n % 10 == 1 && n % 100 != 11) {
        ord = "st";
    } else if (n % 10 == 2 && n % 100 != 12) {
        ord = "nd";
    } else if (n % 10 == 3 && n % 100 != 13) {
        ord = "rd";
    }

    return n + ord;

};

//
const userData = [
    {
        id: 1,
        name: "Andrea Thompson",
        contact: "andythompson@example.com",
        link: "https://www.valyrion.com/",
        companyName: "Valyrion",
        location: "Copenhagen",
        category: "Frontend",
        status: "Mid",
    },
    {
        id: 2,
        name: "Thomas Smith",
        contact: "tsmith@example.com",
        link: "https://www.hover.dev/components/tables",
        companyName: "NanoScale",
        location: "Copenhagen",
        category: "Backend",
        status: "Junior",
    },
    {
        id: 3,
        name: "John Anderson",
        contact: "john.a@example.com",
        link: "https://www.hover.dev/components/tables",
        companyName: "Google",
        location: "Copenhagen",
        category: "Full-Stack",
        status: "Senior",
    },

    {
        id: 4,
        name: "Craig Peterson",
        contact: "craigpeterson@example.com",
        link: "https://www.hover.dev/components/tables",
        companyName: "Microsoft Teams",
        location: "Copenhagen",
        category: "Full-Stack",
        status: "Mid",
    },
    {
        id: 5,
        name: "Jen Horowitz",
        contact: "j.horowitz@example.com",
        link: "https://www.hover.dev/components/tables",
        companyName: "Novo Nordic",
        location: "Copenhagen",
        category: "Web Dev + UI",
        status: "Junior",
    },
];