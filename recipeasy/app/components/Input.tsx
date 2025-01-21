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
    accept,
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
    accept?: string;
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
            <textarea id={id} rows={rows} name={name} placeholder={placeholder} required={isRequired}  className="min-h-14"/>
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
        <div className="input-file-container relative group">
            {showLabel &&(
            <label htmlFor={labelFor}>{label}</label>
            )}
            <div className="file-mock-input group-hover:border-focus">
                <span className="flex items-center h-full text-gray text-xs capitalize">{placeholder}</span>
            </div>
            <input type="file" id={id} name={name} accept={accept} required={isRequired} className="absolute top-6 w-full " onChange={onChange}></input>
            <Icon icon="folder" className="absolute h-6 w-8 right-2 top-7 group-hover:text-primary" />
        </div>;

    const InputRadio =
        <div className="radio-container">
            <input type="radio" id={id} name={name} checked={checked} value={value} onChange={onChange}></input>
            <label htmlFor={labelFor}>{label}</label>
        </div>;

    const InputCheckbox =
        <div className="checkbox-container">
            <input type="checkbox" id={id} name={name} checked={checked} value={value} onChange={onChange}></input>
            <label htmlFor={labelFor}>{label}</label>
        </div>;
    return (
        <>
            {{ 'textarea': InputTextarea, 'select': InputSelect, 'radio': InputRadio, 'checkbox': InputCheckbox, 'file': InputFile }[type] || InputText}
        </>

    )
}