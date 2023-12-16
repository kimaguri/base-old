import { useEffect, useLayoutEffect } from 'react'
import { Select } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSelectOptions } from '../../formSlice.js'

export const SelectInput = ({ source, value, onChange, setValue, name, ...props }) => {
    const dispatch = useDispatch()
    const lovs = useSelector((state) => state.form.lovs[source])

    useLayoutEffect(() => {
        if (!lovs) {
            dispatch(fetchSelectOptions({ tableName: source }))
        }
    }, [dispatch, lovs, props, source])

    useEffect(() => {
        if (lovs && lovs.length > 0) {
            setValue(name, lovs[0].id)
        }
    }, [lovs, setValue])

    if (!lovs || lovs.length === 0) {
        return (
            <Select size="lg">
                <option>No options available</option>
            </Select>
        )
    }

    return (
        <Select value={value} onChange={onChange} {...props} size="lg">
            {lovs.map((lov) => (
                <option key={lov.id} value={lov.id}>
                    {lov.name}
                </option>
            ))}
        </Select>
    )
}
