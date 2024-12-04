"use client";

interface ContainerProps {
  children: React.ReactNode;
}

const ManageContainer: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="max-w-[2520px] mx-auto xl:px-20 pl-24 pr-4">{children}</div>
  );
};

export default ManageContainer;
