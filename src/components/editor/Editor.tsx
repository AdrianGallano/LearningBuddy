import { EditorProvider, FloatingMenu } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { editorStyle } from "../../assets/editor/editor-tailwind"
import BubbleMenuWrapper from './BubbleMenuWrapper'
import "../../assets/css/editor.css"


const extensions = [StarterKit]
const editorProps = {
    attributes: {
        class: editorStyle,
    }
}

const Editor = () => {

    return (
        <EditorProvider
            extensions={extensions}
            content={"<p>Hello World!FSFSDF</p>"}
            autofocus={true}
            editable={true}
            injectCSS={false}
            editorProps={editorProps}
        >
            <BubbleMenuWrapper />
            <FloatingMenu editor={null}>This is the floating menu</FloatingMenu>
        </EditorProvider >
    )
}

export default Editor
