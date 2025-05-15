import React from "react";
import { Columns } from "@/components/columns";

export const Profile: React.FC = () => {
  return (
    <section className="relative flex h-full w-full flex-col items-center justify-center">
      <Columns maxColumns={12} alternative={true}/>
      <h1>Profile</h1>
    </section>
  );
};

export default Profile;
