import { BubbleMenu, useCurrentEditor } from '@tiptap/react'
import { Bold, Italic, Strikethrough, List, ListOrdered, TextQuote, Code } from 'lucide-react'
import "../../assets/css/bubble-menu.css"

const BubbleMenuWrapper = () => {
    const { editor } = useCurrentEditor()

    if (!editor) {
        return null
    }

    return (
        <BubbleMenu
            editor={null}
            className='flex bg-white z-20 border border-gray-600 rounded-md p-1 shadow-md gap-0.5'
        >
            <button
                onClick={() => editor.chain().focus().toggleBold().run()}
                className={`toggle-btn ${editor.isActive('bold') ? 'is-active' : ''}`}
            >
                <Bold
                    height={16}
                    width={16}
                />
            </button>
            <button
                onClick={() => editor.chain().focus().toggleItalic().run()}
                className={`toggle-btn ${editor.isActive('italic') ? 'is-active' : ''}`}
            >
                <Italic
                    height={16}
                    width={16}
                />
            </button>
            <button
                onClick={() => editor.chain().focus().toggleStrike().run()}
                className={`toggle-btn ${editor.isActive('strike') ? 'is-active' : ''}`}
            >
                <Strikethrough
                    height={16}
                    width={16}
                />
            </button>
            <button
                onClick={() => editor.chain().focus().toggleBulletList().run()}
                className={`toggle-btn ${editor.isActive('bulletList') ? 'is-active' : ''}`}
            >
                <List
                    height={16}
                    width={16}
                />
            </button>
            <button
                onClick={() => editor.chain().focus().toggleOrderedList().run()}
                className={`toggle-btn ${editor.isActive('orderedList') ? 'is-active' : ''}`}
            >
                <ListOrdered
                    height={16}
                    width={16}
                />
            </button>
            <button
                onClick={() => editor.chain().focus().toggleBlockquote().run()}
                className={`toggle-btn ${editor.isActive('blockquote') ? 'is-active' : ''}`}
            >
                <TextQuote
                    height={16}
                    width={16}
                />
            </button>
            <button
                onClick={() => editor.chain().focus().toggleCodeBlock().run()}
                className={`toggle-btn ${editor.isActive('codeBlock') ? 'is-active' : ''}`}
            >
                <Code
                    height={16}
                    width={16}
                />
            </button>
        </BubbleMenu>
    )
}

export default BubbleMenuWrapper