import { ChangeEvent, useState } from "react";

export const useForm = <T>(initialData: T) => {

    const [ formData, setFormData ] = useState(initialData);

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };

    return {
        ...formData,
        formData,
        onChange
    }

}