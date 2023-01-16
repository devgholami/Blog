import { useFormik } from "formik";
import PostModel from "../../Models/PostModel";
import Input from "../Input";
import Editor from "../Editor";
import styles from "./PostForm.module.css";
import { useEffect } from "react";

export default function PostForm(props: {
  init: PostModel;
  onChange: Function;
  onSubmit:Function;
}) {
  const formik = useFormik({
    initialValues: props.init,
    validate: (values: PostModel) => {
      const errors: any = {};
      if (!values.title) errors.title = "Title is required";
      if (!values.text) errors.text = "Text is required";
      return errors;
    },
    onSubmit: (values, { setSubmitting }) => {
      //setTimeout(() => {
        setSubmitting(true);
        values.createdDate = new Date();
        //alert(JSON.stringify(values, null, 2));
        props.onSubmit(values);
        setSubmitting(false);
        //}, 400);
      },
    });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Input
        label="Title:"
        input={{
          id: "title",
          type: "text",
          name: "title",
          value: formik.values.title,
        }}
        events={{
          onChange: (e: Event) => {
            props.onChange(e);
            formik.handleChange(e);
          },
          onClick: null,
        }}
        error={formik.errors.title}
      />
      <Editor
        label="Text:"
        input={{ id: "text", name: "text", value: formik.values.text }}
        events={{
          onChange: (e: any) => {
            props.onChange(e);
            formik.setFieldValue("text", e.target.value);
          },
          onClick: null,
        }}
        error={formik.errors.text}
      />
      <button type="submit" disabled={formik.isSubmitting}>
        Submit
      </button>
    </form>
  );
}
