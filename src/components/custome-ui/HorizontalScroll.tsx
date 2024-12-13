const HorizontalScroll = ({ children }: any) => {
  return (
    <div className="overflow-x-auto no-scrollbar">
      <div className="flex space-x-16 snap-x snap-mandatory">{children}</div>
    </div>
  );
};

export default HorizontalScroll;
