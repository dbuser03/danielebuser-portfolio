import React from "react";
import { Columns } from "@/components/columns";

export const Home: React.FC = () => {
  return (
    <section className="relative flex h-full w-full flex-col items-center justify-center">
      <Columns maxColumns={12} alternative={false}/>
      <div className="w-full max-w-4xl">
        <div
          className="aspect-[16/9] w-full bg-[var(--neutral)]"
          aria-label="Content section"
        />
        <p className="mt-1 text-xs text-[var(--neutral)] md:text-sm">
          Lorem ipsum
        </p>
      </div>
    </section>
  );
};

export default Home;
