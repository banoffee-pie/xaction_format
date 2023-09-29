"use strict";
/*
* Contains helper functions to determine if a commenter is authorised to run commands
* */
Object.defineProperty(exports, "__esModule", { value: true });
exports.isCommenterAuthorised = exports.getCommentAuthorAssoc = exports.commentAuthorAssoc = void 0;
const github_1 = require("@actions/github");
var commentAuthorAssoc;
(function (commentAuthorAssoc) {
    commentAuthorAssoc["COLLABORATOR"] = "COLLABORATOR";
    commentAuthorAssoc["CONTRIBUTOR"] = "CONTRIBUTOR";
    commentAuthorAssoc["FIRST_TIMER"] = "FIRST_TIMER";
    commentAuthorAssoc["FIRST_TIME_CONTRIBUTOR"] = "FIRST_TIME_CONTRIBUTOR";
    commentAuthorAssoc["MANNEQUIN"] = "MANNEQUIN";
    commentAuthorAssoc["MEMBER"] = "MEMBER";
    commentAuthorAssoc["NONE"] = "NONE";
    commentAuthorAssoc["OWNER"] = "OWNER";
})(commentAuthorAssoc = exports.commentAuthorAssoc || (exports.commentAuthorAssoc = {}));
// returns one of the associations from the string in the context
function getCommentAuthorAssoc(comment) {
    if (comment === undefined)
        throw new Error('context.payload.comment is undefined.');
    let assoc;
    const author_association = comment.author_association;
    switch (author_association) {
        case 'COLLABORATOR':
            assoc = commentAuthorAssoc.COLLABORATOR;
            break;
        case 'CONTRIBUTOR':
            assoc = commentAuthorAssoc.CONTRIBUTOR;
            break;
        case 'FIRST_TIMER':
            assoc = commentAuthorAssoc.FIRST_TIMER;
            break;
        case 'FIRST_TIME_CONTRIBUTOR':
            assoc = commentAuthorAssoc.FIRST_TIME_CONTRIBUTOR;
            break;
        case 'MANNEQUIN':
            assoc = commentAuthorAssoc.MANNEQUIN;
            break;
        case 'MEMBER':
            assoc = commentAuthorAssoc.MEMBER;
            break;
        case 'NONE':
            assoc = commentAuthorAssoc.NONE;
            break;
        case 'OWNER':
            assoc = commentAuthorAssoc.OWNER;
            break;
        default:
            throw new Error(`Unrecognised user association: ${author_association}`);
    }
    return assoc;
}
exports.getCommentAuthorAssoc = getCommentAuthorAssoc;
// returns true if comment author is owner, collaborator or member
function isCommenterAuthorised() {
    const { comment } = github_1.context.payload;
    if (comment === undefined)
        throw new Error('context.payload.comment is undefined.');
    const assoc = getCommentAuthorAssoc(comment);
    const authorised = [
        commentAuthorAssoc.COLLABORATOR,
        commentAuthorAssoc.MEMBER,
        commentAuthorAssoc.OWNER,
    ].includes(assoc);
    console.info(`The commenter association is ${assoc}. This command has${authorised ? '' : "n't"} been authorised.`);
    return authorised;
}
exports.isCommenterAuthorised = isCommenterAuthorised;
//# sourceMappingURL=authorisation.js.map