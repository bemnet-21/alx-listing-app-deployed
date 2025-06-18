import { PROPERTYLISTINGSAMPLE } from "@/constants/index";
import { useRouter } from "next/router";
import PropertyDetail from "@/components/property/PropertyDetail";
import ReviewSection from "@/components/property/ReviewSection";
import BookingSection from "@/components/property/BookingSection";


export default function PropertPage() {
    const router = useRouter();
    const { id } = router.query;
    const property = PROPERTYLISTINGSAMPLE.find((item) => item.name === id);

    if (!property) return <p>Property not found</p>;

    return (
        <div className="">
            <PropertyDetail property={property} />
            <BookingSection price={property.price}/>
            <ReviewSection
                reviews={[
                    {
                    avatar: '/assets/Vector.png',
                    name: 'Bemnet',
                    comment: 'Good',
                    rating: 4.9
                    }
                ]}/>

        </div>
    )
}