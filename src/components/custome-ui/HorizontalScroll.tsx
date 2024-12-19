const HorizontalScroll = ({ children }: any) => {
  return (
    <div className="overflow-x-auto no-scrollbar py-4">
      <div className="flex space-x-6 sm:space-x-16 snap-x snap-mandatory">{children}</div>
    </div>
  );
};

export default HorizontalScroll;
