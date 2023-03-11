import { FieldHookConfig } from 'formik';
import { InputProps } from 'shared/types/InputProps';

type Values = { email: string; password: string };

export type RegisterInputProps = InputProps & FieldHookConfig<Values>;
