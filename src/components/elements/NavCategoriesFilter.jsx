/* eslint-disable react/prop-types */
export default function NavCategoriesFilter({ className }) {
    const options = [
        { label: "All Categories", value: "" },
        { label: "1", value: 1 },
        { label: "2", value: 2 }
    ];

    return (
        <select className={`${className}`}>
            {options.map((option, i) => (
                <option key={i} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
}
