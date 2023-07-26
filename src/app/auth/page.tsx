import React from "react";
import Navbar from "../components/Navbar";

type AuthProps = {};

const AuthPage: React.FC<AuthProps> = () => {
  return (
    <div className="h-screen relative">
      <Navbar />
      <div className="flex items-center justify-center h-[cal(100vh-5rem)] pointer-events-none select-none">
        <img src="./hero.png" />
      </div>
    </div>
  );
};
export default AuthPage;
