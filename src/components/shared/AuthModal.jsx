import React, { useState } from "react";
import { ROLES } from "../../constants";

function AuthModal({ initialRole, onClose, onSignIn }) {
  const [mode, setMode] = useState("signin"); // "signin" | "signup"
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState(initialRole || ROLES.GUEST);

  const signInRoles = [ROLES.GUEST, ROLES.CONTRACTOR, ROLES.ADMIN];
  const signUpRoles = [ROLES.GUEST, ROLES.CONTRACTOR];
  const roleOptions = mode === "signin" ? signInRoles : signUpRoles;

  const handleSubmit = (e) => {
    e.preventDefault();
    // No real auth – just set the chosen role
    onSignIn(role);
  };

  const handleBackdropClick = () => {
    onClose();
  };

  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  return (
    <div
      className="fixed inset-0 z-40 flex items-center justify-center bg-black/40 px-4"
      onClick={handleBackdropClick}
    >
      <div
        className="w-full max-w-md rounded-2xl bg-white p-6 shadow-lg"
        onClick={stopPropagation}
      >
        <div className="flex items-start justify-between mb-4">
          <div>
            <h2 className="text-lg font-semibold text-slate-900">
              {mode === "signin" ? "Sign in" : "Create an account"}
            </h2>
            <p className="text-xs text-slate-600 mt-1 leading-relaxed">
              Choose how you&apos;re using the platform. In a live system this
              screen would connect to secure authentication.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600 text-sm"
          >
            ✕
          </button>
        </div>

        <div className="flex gap-2 mb-4 text-xs">
          <button
            type="button"
            onClick={() => setMode("signin")}
            className={`flex-1 rounded-md border px-3 py-1.5 ${
              mode === "signin"
                ? "bg-slate-900 text-white border-slate-900"
                : "bg-white text-slate-700 border-slate-300"
            }`}
          >
            Sign in
          </button>
          <button
            type="button"
            onClick={() => setMode("signup")}
            className={`flex-1 rounded-md border px-3 py-1.5 ${
              mode === "signup"
                ? "bg-slate-900 text-white border-slate-900"
                : "bg-white text-slate-700 border-slate-300"
            }`}
          >
            Sign up
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 text-xs md:text-sm">
          <label className="block space-y-1">
            <span className="text-slate-800 text-xs">Email address</span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@company.co.uk"
              className="w-full rounded-lg bg-slate-50 border border-slate-300 px-3 py-1.5 text-xs md:text-sm focus:outline-none focus:ring-2 focus:ring-slate-400"
            />
          </label>

          <label className="block space-y-1">
            <span className="text-slate-800 text-xs">
              {mode === "signin" ? "Password" : "Create a password"}
            </span>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full rounded-lg bg-slate-50 border border-slate-300 px-3 py-1.5 text-xs md:text-sm focus:outline-none focus:ring-2 focus:ring-slate-400"
            />
          </label>

          <div>
            <p className="text-slate-800 mb-2 text-xs">Use platform as</p>
            <div className="space-y-2">
              {roleOptions.map((r) => {
                const active = role === r;
                return (
                  <button
                    key={r}
                    type="button"
                    onClick={() => setRole(r)}
                    className={`w-full text-left rounded-md px-3 py-1.5 border text-xs md:text-sm ${
                      active
                        ? "bg-slate-900 text-white border-slate-900"
                        : "bg-white text-slate-800 border-slate-300 hover:bg-slate-50"
                    }`}
                  >
                    {r}
                  </button>
                );
              })}
            </div>
          </div>

          <button
            type="submit"
            className="w-full rounded-md bg-slate-900 px-4 py-1.5 text-xs md:text-sm font-medium text-white hover:bg-slate-800"
          >
            {mode === "signin" ? "Continue" : "Create account"}
          </button>

          <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">
            This is a visual prototype only. No real accounts are created and no
            data is stored.
          </p>
        </form>
      </div>
    </div>
  );
}

export default AuthModal;
