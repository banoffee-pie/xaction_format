export declare enum commentAuthorAssoc {
    COLLABORATOR = "COLLABORATOR",
    CONTRIBUTOR = "CONTRIBUTOR",
    FIRST_TIMER = "FIRST_TIMER",
    FIRST_TIME_CONTRIBUTOR = "FIRST_TIME_CONTRIBUTOR",
    MANNEQUIN = "MANNEQUIN",
    MEMBER = "MEMBER",
    NONE = "NONE",
    OWNER = "OWNER"
}
export declare function getCommentAuthorAssoc(comment: {
    [key: string]: any;
    id: number;
} | undefined): commentAuthorAssoc;
export declare function isCommenterAuthorised(): boolean;
