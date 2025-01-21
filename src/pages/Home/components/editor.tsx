/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-empty-object-type */
import { FC, forwardRef, useMemo } from "react";
import { default as JoditEditorWysiwyg } from "jodit-react";

interface JoditEditorProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

export const JoditEditor: FC<JoditEditorProps> = forwardRef<
  any,
  JoditEditorProps
>((props, ref) => {
  const { placeholder, value, onChange, onBlur } = props;

  const CONFIG = {
    API_URL: "https//api-staging",
  };

  const config = useMemo(() => {
    const configDefault = {
      readonly: false,
      placeholder: placeholder || "Nhập nội dung",
      minHeight: 500,
      style: {
        textAlign: "left",
      },
      buttons: [
        "bold",
        "italic",
        "underline",
        "strikethrough",
        "eraser",
        "ul",
        "ol",
        "font",
        "fontsize",
        "indent",
        "outdent",
        "|",
        "left",
        "center",
        "right",
        "|",
        "paragraph",
        "lineHeight",
        "superscript",
        "subscript",
        "classSpan",
        "file",
        "image",
        "video",
        "spellcheck",
        "cut",
        "table",
        "link",
        "|",
        "undo",
        "redo",
        "find",
        // "source",
        "fullsize",
        "preview",
        "print",
        // {
        //   name: "uploader",
        //   iconURL: "https://cdn.jodit.com/3.5.2/img/upload.svg",
        //   exec: function (editor) {
        //     let input = document.createElement("input");
        //     input.type = "file";
        //     input.accept = "image/*";
        //     input.onchange = function () {
        //       let file = input.files[0];
        //       let formData = new FormData();
        //       formData.append("file", file);
        //       fetch("https://api.imgur.com/3/image", {
        //         method: "POST",
        //         headers: {
        //           Authorization: "Client-ID 4b6e8e0b3c1f7b1",
        //         },
        //         body: formData,
        //       })
        //         .then((response) => response.json())
        //         .then((data) => {
        //           editor.selection.insertHTML(
        //             `<img src="${data.data.link}" />`
        //           );
        //         });
        //     };
        //     input.click();
        //   },
        // },
      ],
      uploader: {
        insertImageAsBase64URI: false,
        imagesExtensions: ["jpg", "png", "jpeg", "gif"],
        withCredentials: false,
        // format: "json",
        method: "POST",
        // api server upload file
        url: `${CONFIG.API_URL}/file-manager/upload`,
        prepareData: function (formdata:any) {
          const file = formdata.get("files[0]"); // Hoặc 'file', phụ thuộc vào tên của input
          if (!file) {
            console.error("No file found in formdata");
          }
          formdata.delete("files[0]");
          formdata.delete("source");
          formdata.delete("path");

          formdata.append("file", file, file.name);
        },
        isSuccess: function (resp:any) {
          return !resp?.error;
        },
        process: function (resp:any) {
          return {
            files: [resp.url], // Jodit sẽ lấy URL của file từ response
            path: resp.path || "",
            baseurl: "",
            error: 0,
            msg: "Tải lên thành công",
          };
        },
        defaultHandlerSuccess: function (data:any, resp:any) {
          const files = data.files || [];
          if (files.length) {
            this.selection.insertImage(files[0], null, 250);
          }
        },
        defaultHandlerError: function (resp) {
          this.events.fire(
            "errorPopap",
            this.i18n(resp.msg || "Lỗi không xác định")
          );
        },
      },
      events: {
        processPaste: function (event, html) {},
        afterPaste: function (event) {},
      },
    };

    return configDefault;
  }, [placeholder]);

  //add plugins

  return (
    <JoditEditorWysiwyg
      ref={ref}
      value={value as string}
      config={config}
      onBlur={onBlur as any}
      onChange={(newContent) => {
        onChange?.(newContent as any);
      }}
    />
  );
});
