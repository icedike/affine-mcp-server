import { randomUUID } from "node:crypto";
export function buildCommentContent(contentText, mode = "page") {
    const pageId = randomUUID();
    const noteId = randomUUID();
    const paragraphId = randomUUID();
    return {
        snapshot: {
            type: "page",
            meta: { id: pageId, title: "", createDate: Date.now(), tags: [] },
            blocks: {
                type: "block", id: pageId, flavour: "affine:page", version: 2,
                props: { title: { "$blocksuite:internal:text$": true, delta: [] } },
                children: [{
                        type: "block", id: noteId, flavour: "affine:note", version: 1,
                        props: {
                            xywh: "[0,0,498,92]", background: "edgeless/note/white",
                            index: "a0", lockedBySelf: false, hidden: false, displayMode: "both",
                            edgeless: { style: { borderRadius: 8, borderSize: 4, borderStyle: "none", shadowType: "--affine-note-shadow-box" } }
                        },
                        children: [{
                                type: "block", id: paragraphId, flavour: "affine:paragraph", version: 1,
                                props: {
                                    type: "text",
                                    text: { "$blocksuite:internal:text$": true, delta: [{ insert: contentText }] },
                                    collapsed: false
                                },
                                children: []
                            }]
                    }]
            }
        },
        attachments: [],
        mode,
        preview: contentText,
    };
}
