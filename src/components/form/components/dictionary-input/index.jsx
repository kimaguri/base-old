import { Select } from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import { dictionarySorter } from '../../../../utils/index.js'

export const DictionaryInput = ({ dictionaryName, register, technicalName }) => {
    const lov = useSelector((state) => state.app.lovs[dictionaryName]) || []
    const preparedLov = [...lov]
        .filter((item) => !item.inactive)
        .sort(dictionarySorter)

    if (!lov || lov.length === 0) {
        return (
            <Select disabled>
                <option>No options available</option>
            </Select>
        )
    }

    return (
        <Select {...register(technicalName)} placeholder='...'>
            {preparedLov.map((lovItem) => (
                <option key={lovItem.name} value={lovItem.name}>
                    {lovItem.value}
                </option>
            ))}
        </Select>
    )
}
