import { useRouter } from "next/router";
import PropertyDetail from "@/components/property/PropertyDetail";
import { useState, useEffect } from "react";
import axios from "axios";
import { PropertyProps } from "@/interfaces";


export default function PropertyDetailPage() {
    const router = useRouter()
    const { id } = router.query
    const [property, setProperty] = useState<PropertyProps | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchProperty = async () => {
            if (!id) return;
            try {
                const response = await axios.get<PropertyProps>(`${process.env.NEXT_PUBLIC_API_BASE_URL}/properties/${id}`)
                setProperty(response.data)
            } catch(error) {
                console.log("Error fetching property details: ", error)
            } finally {
                setLoading(false)
            }
        }

        fetchProperty()
    }, [id])

    if (loading) {
        return <p>Loading...</p>
    }
    if (!property) {
        return <p>Property not found</p>
    }

    return <PropertyDetail property={property} />
}