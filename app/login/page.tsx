"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import api from "../utils/api";
import { log } from "console";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("yosua");
  const [password, setPassword] = useState("@Yosua85");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // function mutate untuk handle login, nanti akan dipanggil di handleSubmit
  const loginMutation = useMutation({
    mutationFn : async (payload : any) => {
      const response = await api.post("/auth/v2/login/user", payload);
      return response.data;
    },
    onSuccess: (data) => {
      localStorage.setItem("token", data.token);
      router.push("/dashboard");
    },
    onError: (error : any) => {
      setError(error.response?.data?.message || "Login failed");
    },
  })

  // function untuk handle submit form login
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    loginMutation.mutate({ email, password });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="card w-full max-w-sm shadow-xl bg-base-100">
        <div className="card-body">
          <h1 className="text-xl font-semibold text-center">
            Ops Dashboard Login
          </h1>

          {error && (
            <div className="alert alert-error text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4 mt-4">
            <div>
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                className="input input-bordered w-full"
                placeholder="username"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                className="input input-bordered w-full"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button
              type="submit"
              className="btn bg-[#3771B8] w-full"
              disabled={loginMutation.isPending}
            >
              {loginMutation.isPending ? "Signing in..." : "Login"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
