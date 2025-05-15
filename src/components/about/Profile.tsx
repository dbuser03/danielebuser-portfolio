import React from "react";
import { Columns } from "@/components/columns";

export const Profile: React.FC = () => {
  return (
    <>
      <section className="relative flex h-screen w-full flex-col items-start justify-center">
        <Columns maxColumns={12} alternative={true} />
        <h1 className="max-w-6xl mx-4 md:mx-6 text-5xl md:text-7xl text-[var(--background)]">
          I'm a <span className="font-bold">computer science student</span>{" "}
          based in Milan willing to become an amazing{" "}
          <span className="font-bold">creative developer</span>.
        </h1>
      </section>

      <section className="relative flex h-screen w-full flex-col items-start justify-center">
        <Columns maxColumns={12} alternative={true} />
        <div className="max-w-8xl mx-6 text-[var(--background)]">
          {/* Add your content here */}
        </div>
      </section>
    </>
  );
};

export default Profile;
