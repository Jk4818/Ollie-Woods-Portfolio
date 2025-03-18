// utils/smoothScroll.ts
export const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Using the native smooth scroll behavior
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };