"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthGard = exports.UserDisplayName = void 0;
function UserDisplayName(req) {
    if (req.user) {
        let user = req.user;
        return user.displayName.toString();
    }
    return '';
}
exports.UserDisplayName = UserDisplayName;
function AuthGard(req, res, next) {
    if (!req.isAuthenticated()) {
        return res.redirect('/login');
    }
    next();
}
exports.AuthGard = AuthGard;
//# sourceMappingURL=index.js.map