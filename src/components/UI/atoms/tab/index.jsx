import { classNames } from "@/utils/classnames";

export const Tab = ({ children, active, className }) => {
  return (
    <div
      className={classNames(
        `font-sora cursor-pointer mr-3 -mb-px overflow-auto `,
        active
          ? "text-4e7dd9 border border-b-0 font-semibold rounded-t-lg border-solid border-B0C4DB bg-f1f3f6"
          : "text-black",
        className
      )}
    >
      {children}
    </div>
  );
};
