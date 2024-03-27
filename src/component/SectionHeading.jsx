
const SectionHeading = ({ heading, subHeading }) => {
    return (
        <div className="lg:w-4/12 mx-auto py-8 space-y-4 text-center">
            <p className="text-lg text-yellow-500 capitalize">---{subHeading}---</p>
            <h1 className="text-3xl font-sans font-semibold border-y-4 py-3 uppercase">{heading}</h1>
        </div>
    );
};

export default SectionHeading;