const TabbedNavigation = ({ tabs, activeTab, setActiveTab }) => {
    return (
        <div className="grid md:grid-cols-5 gap-3 grid-cols-2">
        {tabs.map((tab, index) => (
            <nav key={index} onClick={() => setActiveTab(!activeTab)} className={`justify-self-center place-items-center px-3 py-3 cursor-pointer font-semibold text-lg`}>{tab}
            </nav>
        ))}
        </div>
    );
}
// ${activeTab === tab ? "text-amber-500" : "text-gray-500"}

export default TabbedNavigation;