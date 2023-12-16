import DynamicInput from './dynamic-input/index.jsx'

export const FormApplet = ({ meta, control, setValue, errors }) => {
    return (
        <>
            {meta.map((input, index) => {
                return (
                    <DynamicInput
                        technicalName={input.technicalName}
                        type={input.type}
                        dictionaryName={input.dictionaryName}
                        label={input.label}
                        source={input.source}
                        control={control}
                        setValue={setValue}
                        errors={errors}
                        key={`${input.technicalName}_${index}`}
                        required={input.required}
                    />
                )
            })}
        </>
    )
}
