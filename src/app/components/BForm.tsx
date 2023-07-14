import react from "react";
import { Form } from "react-bootstrap";
import BBInput from "./BBInput";

interface Form {
  title?: string;
}

export default function BBForm(props: Form) {
  return <Form>{props.title}</Form>;
}
