import { PropertyProps } from "@/interfaces";

const PropertyDetail: React.FC<{property: PropertyProps}> = ({property}) => {
    return (
        <div className="container mx-auto px-6">
            <h1 className="text-4xl font-bold text-black">{property.name}</h1>
            <div className="flex items-center space-x-2 mt-2">
                <span className="text-yellow-500">{property.rating} stars</span>
                <span className="">{property.address.city}, {property.address.country}</span>
            </div>
            {/* Image */}
            <div className="grid md:grid-cols-2 grid-rows-2 gap-4 mt-4 border border-amber-500">
                <img src={property.image} alt={property.name} className="row-span-2 w-full h-full object-cover rounded-lg border border-red-500" />
                <img src={property.image} alt={property.name} className="hidden  w-full h-96 object-cover rounded-lg md:inline-block" />
                <img src={property.image} alt={property.name} className="hidden  w-full h-96 object-cover rounded-lg md:inline-block" />
            </div>
            {/* description */}
            <div className="mt-4 text-black">
                <h2 className="text-2xl font-semibold">Description</h2>
                <p className="">{property.description}</p>
            </div>

            {/* Amentities */}
            <div className="mt-4 text-black">
                <h2 className="text-2xl font-semibold">What this place offers</h2>
                <ul className="flex flex-wrap space-x-4">
                    {property.category.map((amentity, index) => (
                        <li key={index} className="bg-gray-200 p-2 rounded-md">
                            {amentity}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default PropertyDetail;