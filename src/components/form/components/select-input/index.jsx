import { useLayoutEffect } from 'react'
import { Select } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSelectOptions } from '../../formSlice.js'

export const SelectInput = ({ technicalName, source, register }) => {
    const dispatch = useDispatch()
    const lovs = useSelector((state) => state.form.lovs[source])

    useLayoutEffect(() => {
        if (!lovs) {
            dispatch(fetchSelectOptions({ tableName: source }))
        }
    }, [dispatch, source])

    if (!lovs || lovs.length === 0) {
        return (
            <Select size="lg">
                <option>No options available</option>
            </Select>
        )
    }

    return (
        <Select {...register(technicalName)} size="lg" placeholder="...">
            {lovs.map((lov) => (
                <option key={lov.id} value={lov.id}>
                    {lov.name}
                </option>
            ))}
        </Select>
    )
}
