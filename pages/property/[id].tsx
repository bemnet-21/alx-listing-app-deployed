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
        if (!router.isReady || !id) return;

        const fetchProperty = async () => {
            try {
                const response = await axios.get<PropertyProps>(`/api/properties/${id}`)
                
                setProperty(response.data)
            } catch(error) {
                console.error("Error fetching property:", error)
            } finally {
                setLoading(false)
            }
        }

        fetchProperty()
    }, [id, router.isReady])

    if (loading) return <p>Loading...</p>
    if (!property) return <p>Property not found</p>

    return <PropertyDetail property={property} />
}