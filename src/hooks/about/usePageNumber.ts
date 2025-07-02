import { useState, useEffect, useRef } from "react";
import { DEFAULT_PAGE_NUMBER } from "@/constants/footer/footer";

export const usePageNumber = () => {
  const [currentPage, setCurrentPage] = useState(DEFAULT_PAGE_NUMBER);

  const homeRef = useRef<HTMLDivElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);
  const contactsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.25,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target === homeRef.current) {
            setCurrentPage("001");
          } else if (entry.target === profileRef.current) {
            setCurrentPage("002");
          } else if (entry.target === contactsRef.current) {
            setCurrentPage("003");
          }
        }
      });
    }, options);

    if (homeRef.current) observer.observe(homeRef.current);
    if (profileRef.current) observer.observe(profileRef.current);
    if (contactsRef.current) observer.observe(contactsRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return {
    currentPage,
    homeRef,
    profileRef,
    contactsRef,
  };
};
