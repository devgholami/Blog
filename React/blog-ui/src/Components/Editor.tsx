import { Editor } from "@tinymce/tinymce-react";
import styles from "./FormElements.module.css";

type inputProps = {
  label: string;
  error: string | undefined;
  input: { id: string; name: string; value: string };
  events: { onChange: Function | null; onClick: Function | null };
};
export default function Input(props: inputProps) {
  return (
    <div className={styles.formGroup}>
      <label className={styles.formLabel} htmlFor={props.input.id}>
        {props.label}
      </label>
      <Editor
        tinymceScriptSrc={process.env.PUBLIC_URL + "/js/tinymce/tinymce.min.js"}
        value={props.input.value}
        id={props.input.id}
        textareaName={props.input.name}
        onExecCommand={(e) => {
          console.log(e);
          if (!!e.value && /^(h1|h2|h3|h4|h5|h6)$/.test(e.value)) {
            const headings = e.target
              .getBody()
              .querySelectorAll("h1, h2, h3, h4, h5, h6");
            for (let i = 0; i < headings.length; i++) {
              if (!headings[i].id) {
                headings[i].id = `H${Math.random().toString(32).substr(2, 5)}`;
              }
            }
          }
        }}
        onEditorChange={(e) => {
          props.events.onChange?.({
            target: { name: props.input.name, value: e },
          });
        }}
        init={{
          plugins:
            "print preview paste importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount imagetools textpattern noneditable help charmap quickbars emoticons",
          imagetools_cors_hosts: ["picsum.photos"],
          toolbar:
            "undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media link anchor codesample | ltr rtl",
          toolbar_sticky: true,
          autosave_ask_before_unload: true,
          autosave_interval: "30s",
          autosave_prefix: "{path}{query}-{id}-",
          autosave_restore_when_empty: false,
          autosave_retention: "2m",
          image_advtab: true,
          link_list: [
            { title: "My page 1", value: "https://www.tiny.cloud" },
            { title: "My page 2", value: "http://www.moxiecode.com" },
          ],
          image_list: [
            { title: "My page 1", value: "https://www.tiny.cloud" },
            { title: "My page 2", value: "http://www.moxiecode.com" },
          ],
          image_class_list: [
            { title: "None", value: "" },
            { title: "Some class", value: "class-name" },
          ],
          importcss_append: true,
          file_picker_callback: function (callback, value, meta) {
            /* Provide file and text for the link dialog */
            if (meta.filetype === "file") {
              callback("https://www.google.com/logos/google.jpg", {
                text: "My text",
              });
            }

            /* Provide image and alt text for the image dialog */
            if (meta.filetype === "image") {
              callback("https://www.google.com/logos/google.jpg", {
                alt: "My alt text",
              });
            }

            /* Provide alternative source and posted for the media dialog */
            if (meta.filetype === "media") {
              callback("movie.mp4", {
                source2: "alt.ogg",
                poster: "https://www.google.com/logos/google.jpg",
              });
            }
          },
          height: 600,
          image_caption: true,
          quickbars_selection_toolbar:
            "bold italic | quicklink h1 h2 h3 h4 h5 h6 blockquote quickimage quicktable",
          noneditable_noneditable_class: "mceNonEditable",

          contextmenu: "link image imagetools table",
        }}
      />
      {props.error ? (
        <p className={styles.formValidationError}>{props.error}</p>
      ) : null}
    </div>
  );
}
