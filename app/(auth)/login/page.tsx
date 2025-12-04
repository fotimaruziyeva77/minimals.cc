"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // 👉 Hoziroq: har qanday email/password qabul qilinadi
    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen flex">
      {/* LEFT SIDE */}
      <div className="hidden lg:flex w-1/2 bg-[#f8fafc] flex-col items-center justify-center p-12">
        <h1 className="text-3xl font-semibold mb-3">Hi, Welcome back</h1>
        <p className="text-gray-500 mb-8">
          More effectively with optimized workflows.
        </p>

        <Image
          src="/assets/login.png"
          alt="illustration"
          width={380}
          height={380}
          className="rounded-xl"
        />
      </div>

      {/* RIGHT SIDE */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-6">
        <div className="w-full max-w-md">
          <h2 className="text-2xl font-semibold mb-2">
            Sign in to your account
          </h2>

          <p className="text-sm text-gray-500 mb-5">
            Don’t have an account?{" "}
            <span className="text-green-600 cursor-pointer">Get started</span>
          </p>

          <Alert className="bg-[#d1fae5] border-none mb-6">
            <AlertDescription>
              Use <b>demo@minimals.cc</b> with password <b>@2Minimal</b>
            </AlertDescription>
          </Alert>

          {/* Email */}
          <div className="mb-4">
            <label className="text-sm text-gray-600">Email address</label>
            <Input
              placeholder="demo@minimals.cc"
              className="mt-1"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password */}
          <div className="mb-6">
            <div className="flex justify-between items-center">
              <label className="text-sm text-gray-600">Password</label>
              <span className="text-xs text-gray-500 cursor-pointer">
                Forgot password?
              </span>
            </div>
            <Input
              type="password"
              placeholder="••••••"
              className="mt-1"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <Button
            className="w-full bg-[#0F172A] hover:bg-[#1e293b]"
            onClick={handleLogin}
          >
            Sign in
          </Button>
        </div>
      </div>
    </div>
  );
}
