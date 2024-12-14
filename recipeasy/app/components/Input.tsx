import Icon from "./Icon";

export default function Input({
    label,
    labelFor,
    showLabel = true,
    id,
    name,
    value,
    placeholder,
    type,
    rows,
    isRequired,
    options,
    checked,
    onChange,
}: {
    label: string;
    labelFor: string;
    showLabel?: boolean;
    id: string;
    name: string;
    value?: any;
    placeholder?: string;
    type: string;
    rows?: number;
    isRequired?: boolean;
    options?: string[];
    checked?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
}) {

    const InputText =
        <div className="input-container">
            {showLabel &&(<label htmlFor={labelFor}>{label}</label>)}
            <input id={id} type={type} name={name} placeholder={placeholder} required={isRequired} />
        </div>;

    const InputTextarea =
        <div className="input-container">
            {showLabel &&(<label htmlFor={labelFor}>{label}</label>)}
            <textarea id={id} rows={rows} name={name} placeholder={placeholder} required={isRequired} />
        </div>;

    const InputSelect =
        <div className="input-container">
            {showLabel &&(<label htmlFor={labelFor}>{label}</label>)}
            <select id={id} name={name} required={isRequired}>
                <option className="select-placeholder" value="">{placeholder}</option>
                {options?.map((option, index) => (
                    <option key={index} value={option}>{option} </option>
                ))}
            </select>
            <Icon icon="caret" className="absolute h-7 w-8 right-1 top-6 bg-white rounded-full" />
        </div>;

    const InputFile =
        <div className="input-file-container relative">
            {showLabel &&(
            // <span className="label">{label}</span>
            <label htmlFor={labelFor}>{label}</label>
            )}
            <input type="file" id={id} name={name} required={isRequired} className="opacity-0"></input>
            <Icon icon="folder" className="absolute h-6 w-8 right-1 top-7" />
        </div>;

    const InputRadio =
        <div className="radio-container">
            <input type="radio" id={id} name={name} checked={checked} onChange={onChange}></input>
            <label htmlFor={labelFor}>{label}</label>
        </div>;

    const InputCheckbox =
        <div className="checkbox-container">
            <input type="checkbox" id={id} name={name} checked={checked} onChange={onChange}></input>
            <label htmlFor={labelFor}>{label}</label>
        </div>;
    return (
        <>
            {{ 'textarea': InputTextarea, 'select': InputSelect, 'radio': InputRadio, 'checkbox': InputCheckbox, 'file': InputFile }[type] || InputText}
        </>

    )
}