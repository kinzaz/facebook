import { FieldHookConfig } from 'formik';
import { InputProps } from 'types/InputProps';

type Values = { email: string; password: string };

export type RegisterInputProps = InputProps & FieldHookConfig<Values>;
