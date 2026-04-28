"use client"
import { authClient } from '@/lib/auth-client';
import React from 'react';
import { FaFacebookF, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';

const RightSidebar = () => {
  const handleSigninWithGoogle= async()=>{
 const data = await authClient.signIn.social({
    provider: "google",
  });
  }
    return (
        <>
            <div className="mb-8">
            <h2 className="font-bold text-xl mb-4 text-black">Login With</h2>
            <div className="flex flex-col gap-2">
              <button onClick={handleSigninWithGoogle} className="flex items-center justify-center gap-2 border border-blue-500 text-blue-500 py-2 rounded-md hover:bg-blue-50 transition-all">
                <FaGoogle /> Login with Google
              </button>
              <button className="flex items-center justify-center gap-2 border border-black text-black py-2 rounded-md hover:bg-gray-100 transition-all">
                <FaGithub /> Login with Github
              </button>
            </div>
          </div>

          {/* Find Us On Section */}
          <div>
            <h2 className="font-bold text-xl mb-4 text-black">Find Us On</h2>
            <div className="border rounded-md overflow-hidden">
              <a
                href="#"
                className="flex items-center gap-3 p-4 border-b hover:bg-gray-50"
              >
                <div className="p-2 bg-gray-100 rounded-full text-blue-700">
                  <FaFacebookF />
                </div>
                <span className="font-medium text-gray-600">Facebook</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-3 p-4 border-b hover:bg-gray-50"
              >
                <div className="p-2 bg-gray-100 rounded-full text-blue-400">
                  <FaTwitter />
                </div>
                <span className="font-medium text-gray-600">Twitter</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-3 p-4 hover:bg-gray-50"
              >
                <div className="p-2 bg-gray-100 rounded-full text-pink-600">
                  <FaInstagram />
                </div>
                <span className="font-medium text-gray-600">Instagram</span>
              </a>
            </div>
          </div>
        </>
    );
};

export default RightSidebar;