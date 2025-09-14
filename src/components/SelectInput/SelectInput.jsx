import { useId, useState } from "react";
import { Field, useField } from "formik";
import clsx from "clsx";
import css from "./SelectInput.module.css";
import Icon from "../../assets/Icon/Icon";

export default function SelectInput({
  name,
  placeholder,
  labelText,
  options = [],
  onChange,
}) {
  const fieldId = useId();
  const [isOpen, setIsOpen] = useState(false);
  const [field, meta] = useField(name);

  const isEmpty = !field.value || field.value === "";
  const baseClass = meta.touched && meta.error ? css.inputError : css.inputName;
  const inputClassName = `${baseClass} ${isEmpty ? css.empty : ""}`;

  const handleChange = (e) => {
    field.onChange(e);
    if (onChange) {
      onChange(e);
    }
  };

  return (
    <div className={css.selectWrapper}>
      <label className={css.labelName} htmlFor={fieldId}>
        {labelText}
      </label>

      <div className={css.inputWrapper}>
        <Field
          {...field}
          id={fieldId}
          as="select"
          name={name}
          className={inputClassName}
          onChange={handleChange}
          onFocus={() => setIsOpen(true)}
          onBlur={() => setIsOpen(false)}
          value={field.value || ""}
        >
          <option value="" disabled>
            {placeholder}
          </option>
          {options.map((item) => (
            <option key={item._id} value={item._id}>
              {item.name}
            </option>
          ))}
        </Field>

        <Icon
          name="icon-arrow_down"
          className={clsx(css.selectIcon, isOpen && css.selectIconOpen)}
        />
      </div>
    </div>
  );
}
