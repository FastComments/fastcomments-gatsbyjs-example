export type EntryKey =
    | "comments"
    | "comment-count"
    | "live-chat"
    | "collab-chat"
    | "image-chat"
    | "recent-comments"
    | "recent-discussions"
    | "top-pages"
    | "reviews-summary"
    | "activity-feed"
    | "dark-mode"
    | "page-transitions";

export type Entry = {
    key: EntryKey;
    label: string;
    hint: string;
    kind: "widget" | "flow";
    path: string;
};

export const WIDGETS: Entry[] = [
    { key: "comments",      label: "Live Comment Widget", kind: "widget", hint: "Full live commenting widget", path: "/commenting" },
    { key: "comment-count", label: "Comment Count",       kind: "widget", hint: "Inline count badge",         path: "/comment-count" },
    { key: "live-chat",     label: "Live Chat",           kind: "widget", hint: "Realtime streaming widget",  path: "/live-chat" },
    { key: "collab-chat",   label: "Collab Chat",         kind: "widget", hint: "Text-anchored threads",      path: "/collab-chat" },
    { key: "image-chat",    label: "Image Chat",          kind: "widget", hint: "Region comments on images",  path: "/image-chat" },
    { key: "recent-comments",   label: "Recent Comments",    kind: "widget", hint: "Cross-site comment stream", path: "/recent-comments" },
    { key: "recent-discussions", label: "Recent Discussions", kind: "widget", hint: "Most active threads",      path: "/recent-discussions" },
    { key: "top-pages",     label: "Top Pages",           kind: "widget", hint: "Pages ranked by activity",   path: "/top-pages" },
    { key: "reviews-summary", label: "Reviews Summary",   kind: "widget", hint: "Star ratings overview",       path: "/reviews-summary" },
    { key: "activity-feed", label: "Activity Feed",       kind: "widget", hint: "Per-user timeline",          path: "/activity-feed" },
];

export const FLOWS: Entry[] = [
    { key: "dark-mode",        label: "Dark Mode",        kind: "flow", hint: "Runtime theme switching",         path: "/dark-mode" },
    { key: "page-transitions", label: "Page Transitions", kind: "flow", hint: "Gatsby route transitions + threads", path: "/page-transition-test-start" },
];

export const ALL_ENTRIES: Entry[] = [...WIDGETS, ...FLOWS];
