import '@/assets/css/editor.css'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {MutableRefObject, useState} from "react";

export default function FormEditor({context}: {context: MutableRefObject<string>}) {
    console.log(2222, context)
    const editorConfiguration = {
        toolbar: [
            'heading', //类型
            '|',
            'bold', //加粗
            'italic', //斜体
            'link', //超链接
            'bulletedList',// 无序列表
            'numberedList', //有序列表
            '|',
            'indent', //左缩进
            'outdent', //右缩进
            '|',
            'imageUpload', //图片上传
            'blockQuote', //引用
            'insertTable', //插入图标
            //'mediaEmbed', //视频上传
            'undo', //撤销
            'redo'//重做
        ]
    };

    return (
        <CKEditor
            config={ editorConfiguration }
            editor={ ClassicEditor }
            data={ context.current }
            onReady={ editor => {
                // You can store the "editor" and use when it is needed.
                console.log( 'Editor is ready to use!', editor );
            } }
            onChange={ ( event, editor ) => {
                const data = editor.getData();
                context.current = data
                console.log( { event, editor, data } );
            } }
            onBlur={ ( event, editor ) => {
                console.log( 'Blur.', editor );
            } }
            onFocus={ ( event, editor ) => {
                console.log( 'Focus.', editor );
            } }
        />
    )
}