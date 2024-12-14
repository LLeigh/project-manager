import { useState } from "react";
import Input from "./Input";

export default function InputGroup({
    label,
    type,
    options,
    name,
    showLabel = true,
    onChange,
}: {
    label: string;
    type: "radio" | "checkbox";
    options: string[];
    name: string;
    showLabel?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
}) {

    const [selectedValue, setSelectedValue] = useState<string | string[]>(type === "radio" ? "" : []);

    const handleChange = (value: string) => {
        if (type === "radio") {
            setSelectedValue(value);
        } else if (type === "checkbox") {
            setSelectedValue((prev) =>
                (prev as string[]).includes(value)
                    ? (prev as string[]).filter((v) => v !== value)
                    : [...(prev as string[]), value]
            );
        }
    };
    console.log(selectedValue);

    return (
        <fieldset className={`input-group ${showLabel ? "mt-2" : ""}`}>
            {showLabel &&(<legend className="label">{label}:</legend>)}
            {options.map((option: string, index) => (
                <Input
                    key={index}
                    type={type}
                    id={`${option}-${index}`}
                    label={option}
                    labelFor={option}
                    name={type === "radio" ? name : option}
                    checked={
                        type === "radio" ? selectedValue === option : (selectedValue as string[]).includes(option)
                    }
                    onChange={() => handleChange(option)}
                />
            ))}
        </fieldset>
    )
}