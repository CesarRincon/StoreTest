import { useMemo } from 'react'
import { dataCountry } from '../components/utils/utils'

export const useGetColombiaInfo = (selectedInputs: any) => {
    const cities = useMemo(() => {
        if (!selectedInputs?.department) return []

        return Object.keys(dataCountry[selectedInputs?.department] || {})
    }, [selectedInputs?.department])

    const districts = useMemo(() => {
        if (!selectedInputs?.city) return []

        return Object.entries(
            dataCountry[selectedInputs?.department][selectedInputs?.city]
        ).map(([name, postalCode]) => ({
            name,
            postalCode,
        }))
    }, [selectedInputs?.city])

    const departments = useMemo(() => Object.keys(dataCountry || {}), [])

    const postalCode = useMemo(() => {
        if (!selectedInputs?.city) return []

        return dataCountry[selectedInputs?.department][selectedInputs?.city]
    }, [selectedInputs?.city])

    return { cities, districts, departments, postalCode }
}
