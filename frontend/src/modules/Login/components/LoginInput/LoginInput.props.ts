import { FieldHookConfig } from 'formik';
import { DetailedHTMLProps, InputHTMLAttributes } from 'react';

type Values = { email: string; password: string };

interface InputProps
	extends DetailedHTMLProps<
		InputHTMLAttributes<HTMLInputElement>,
		HTMLInputElement
	> {
	bottom?: boolean;
}

export type LoginInputProps = InputProps & FieldHookConfig<Values>;
