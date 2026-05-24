import { useEffect, useState, useRef } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import {
    ClassicEditor,
    Essentials,
    Bold,
    Italic,
    Underline,
    Strikethrough,
    Subscript,
    Superscript,
    Code,
    Heading,
    FontFamily,
    FontSize,
    FontColor,
    FontBackgroundColor,
    Alignment,
    List,
    ListProperties,
    TodoList,
    Link,
    BlockQuote,
    CodeBlock,
    HorizontalLine,
    Table,
    TableToolbar,
    TableCellProperties,
    TableProperties,
    MediaEmbed,
    RemoveFormat,
    SourceEditing,
    FindAndReplace,
    Highlight,
    SpecialCharacters,
    SpecialCharactersArrows,
    SpecialCharactersCurrency,
    SpecialCharactersLatin,
    SpecialCharactersMathematical,
    SpecialCharactersText,
    Indent,
    IndentBlock,
    PasteFromOffice,
    Autoformat,
    Fullscreen,
    ShowBlocks,
    Undo,
} from "ckeditor5";


export default function InputEditor({ field, label, value, onChange, error }) {
    const [mounted, setMounted] = useState(false);
    const hasError = !!error;
    const editorRef = useRef(null);

    useEffect(() => { setMounted(true); }, []);

    if (!mounted) {
        return (
            <div className={`input-style-1 ${hasError ? "has-error" : ""}`}>
                <label>{label}</label>
                <div style={{ minHeight: 200, border: "1px solid #e2e8f0", borderRadius: 8, padding: 12, background: "#f8fafc", color: "#94a3b8", fontSize: 13 }}>
                    Loading editor...
                </div>
            </div>
        );
    }

    return (
        <div className={`input-style-1 ${hasError ? "has-error" : ""}`}>
            <label>{label}</label>
            <div className="editor-wrapper" style={{
                border: `1px solid ${hasError ? "#dc3545" : "#e2e8f0"}`,
                borderRadius: 8,
                overflow: "hidden",
            }}>
                <CKEditor
                    editor={ClassicEditor}
                    data={value || ""}
                    onChange={(event, editor) => {
                        onChange(editor.getData());
                    }}
                    config={{
                        licenseKey: "GPL",
                        plugins: [
                            Essentials,
                            Bold,
                            Italic,
                            Underline,
                            Strikethrough,
                            Subscript,
                            Superscript,
                            Code,
                            Heading,
                            FontFamily,
                            FontSize,
                            FontColor,
                            FontBackgroundColor,
                            Alignment,
                            List,
                            ListProperties,
                            TodoList,
                            Link,
                            BlockQuote,
                            CodeBlock,
                            HorizontalLine,
                            Table,
                            TableToolbar,
                            TableCellProperties,
                            TableProperties,
                            MediaEmbed,
                            RemoveFormat,
                            SourceEditing,
                            FindAndReplace,
                            Highlight,
                            SpecialCharacters,
                            SpecialCharactersArrows,
                            SpecialCharactersCurrency,
                            SpecialCharactersLatin,
                            SpecialCharactersMathematical,
                            SpecialCharactersText,
                            Indent,
                            IndentBlock,
                            PasteFromOffice,
                            Autoformat,
                            Fullscreen,
                            ShowBlocks,
                            Undo,
                        ],
                        toolbar: {
                            items: [
                                "undo", "redo",
                                "|",
                                "findAndReplace", "sourceEditing",
                                "|",
                                "heading",
                                "|",
                                "fontFamily", "fontSize", "fontColor", "fontBackgroundColor",
                                "|",
                                "bold", "italic", "underline", "strikethrough", "subscript", "superscript", "code",
                                "|",
                                "alignment",
                                "|",
                                "bulletedList", "numberedList", "todoList",
                                "|",
                                "outdent", "indent",
                                "|",
                                "blockQuote", "codeBlock", "horizontalLine",
                                "|",
                                "link", "mediaEmbed",
                                "|",
                                "insertTable",
                                "|",
                                "highlight",
                                "|",
                                "specialCharacters",
                                "|",
                                "removeFormat",
                                "|",
                                "showBlocks", "fullscreen",
                            ],
                            shouldNotGroupWhenFull: true,
                        },
                        heading: {
                            options: [
                                { model: "paragraph", title: "Paragraph", class: "ck-heading_paragraph" },
                                { model: "heading1", view: "h1", title: "Heading 1", class: "ck-heading_h1" },
                                { model: "heading2", view: "h2", title: "Heading 2", class: "ck-heading_h2" },
                                { model: "heading3", view: "h3", title: "Heading 3", class: "ck-heading_h3" },
                                { model: "heading4", view: "h4", title: "Heading 4", class: "ck-heading_h4" },
                                { model: "heading5", view: "h5", title: "Heading 5", class: "ck-heading_h5" },
                                { model: "heading6", view: "h6", title: "Heading 6", class: "ck-heading_h6" },
                            ],
                        },
                        list: {
                            properties: {
                                styles: true,
                                startIndex: true,
                                reversed: true,
                            },
                        },
                        table: {
                            contentToolbar: [
                                "tableColumn",
                                "tableRow",
                                "mergeTableCells",
                                "tableCellProperties",
                                "tableProperties",
                            ],
                        },
                        link: {
                            addTargetToExternalLinks: true,
                        },
                        fontFamily: {
                            options: [
                                "default",
                                "Arial, Helvetica, sans-serif",
                                "Courier New, monospace",
                                "Georgia, serif",
                                "Lucida Sans Unicode, Lucida Grande, sans-serif",
                                "Tahoma, Geneva, sans-serif",
                                "Times New Roman, serif",
                                "Trebuchet MS, Helvetica, sans-serif",
                                "Verdana, Geneva, sans-serif",
                            ],
                        },
                        fontSize: {
                            options: [9, 10, 11, 12, 13, 14, 16, 18, 20, 22, 24, 28, 32, 36, 40, 48, 56, 64],
                        },
                    }}
                />
            </div>
            {hasError && <span className="text-danger" style={{ fontSize: 11 }}>{error}</span>}
        </div>
    );
}
