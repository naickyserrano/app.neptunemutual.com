import { Container } from "@/components/UI/atoms/container";
import { Tab } from "@/components/UI/atoms/tab";
import { classNames } from "@/utils/classnames";

export const TabHeader = ({ activeTab, headers, onClick }) => {
  return (
    <div className="border-b border-b-B0C4DB">
      <Container className={"flex"}>
        {headers.map((header) => (
          <Tab key={header.name} active={activeTab == header.name}>
            <button
              onClick={() => onClick(header.name)}
              className={classNames(
                "inline-block px-6 py-2",
                activeTab == header.name ? "font-semibold" : ""
              )}
            >
              {header.displayAs}
            </button>
          </Tab>
        ))}
      </Container>
    </div>
  );
};
