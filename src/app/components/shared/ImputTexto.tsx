'use client'
import { InputHTMLAttributes } from "react";

export interface InputTextoProps extends InputHTMLAttributes<HTMLInputElement> {}

export default function InputTexto(props: InputTextoProps) {
  return (
    <input
      type="text"
      {...props}
    />
  );
}