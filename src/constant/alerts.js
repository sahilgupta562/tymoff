const UploadAlert = { title: "Alert!", body: "You have data to publish in the upload. Do you want to cancel the process?", type: "upload", successText: "Yes", cancelText: "No" };
const ClearHistoryAlert = { title: "Alert!", body: "Your like and download will not be affected.", type: "clear_history", successText: "Ok", cancelText: "Cancel" };
// const ClearHistoryAlert = { title: "Alert!", body: "Your tymoff history will be cleared from all devices.", type: "clear_history", successText: "Ok", cancelText: "Cancel" };
const LogoutAlert = { title: "Log out", body: "Are you sure you want to Logout?", type: "logout", successText: "Ok", cancelText: "Cancel" };
const FeedbackResponseAlert = { title: "", body: "Thanks for submitting your feedback.", type: "feedback_response", successText: "Ok", cancelText: "" };
const RemoveImageAlert = { title: "Remove profile photo", body: "Are you sure to remove your profile photo?", type: "remove_profile_image", successText: "Ok", cancelText: "Cancel" };
const DeletePost = { title: "Delete Post", body: "Are you sure you want to delete your post?", type: "delete_post", successText: "Delete", cancelText: "Cancel" };
const ContactResponseAlert = { title: "", body: "Thanks for dropping your message", type: "contact_reponse", successText: "ok", cancelText: "" };
export { UploadAlert, ClearHistoryAlert, LogoutAlert, FeedbackResponseAlert, RemoveImageAlert, DeletePost, ContactResponseAlert };
