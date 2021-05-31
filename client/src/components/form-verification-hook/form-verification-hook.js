import { useEffect, useState } from 'react'

const useValidation = (value, validations) => {
    const [isEmpty, setEmpty] = useState(true)
    const [maxLengthError, setMaxLengthError] = useState(false)
    const [isFileSelect, setFileSelect] = useState(true)
    const [inputValid, setInputValid] = useState(false)

    useEffect(() => {
        for (const validation in validations) {

            switch (validation) {
                case 'maxLengthError':
                    value.length > validations[validation]
                        ? setMaxLengthError(true)
                        : setMaxLengthError(false)
                    break;
                case 'isEmpty':
                    value ? setEmpty(false) : setEmpty(true)
                    break;
                case 'isFileSelect':
                    if (value) {
                        setFileSelect(true)
                        setMaxLengthError(false)
                        setEmpty(false)
                    } else {
                        setFileSelect(false)
                    }
                    break;
                default:
                    break;
            }
        }
    }, [value])

    useEffect(() => {
        if (isEmpty || maxLengthError || !isFileSelect) {
            setInputValid(false)
        } else {
            setInputValid(true)
        }
    }, [isEmpty, maxLengthError, isFileSelect])

    return {
        isEmpty,
        maxLengthError,
        isFileSelect,
        inputValid
    }
}

const useInput = (initialValue, validations) => {
    const [value, setValue] = useState(initialValue)
    const [isDirty, setDirty] = useState(false)
    const valid = useValidation(value, validations)
    const onChange = (e) => {
        setValue(e.target.value)
    }

    const onBlur = () => {
        setDirty(true)
    }

    return {
        value,
        isDirty,
        onBlur,
        onChange,
        ...valid
    }
}

export {
    useInput
}